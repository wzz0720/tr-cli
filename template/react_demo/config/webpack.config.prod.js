const paths = require('../config/path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const webpackConfig = require('../config/webpack.config');

module.exports = {
    devtool: webpackConfig.devtool,
    entry: webpackConfig.entry,
    output: Object.assign({},webpackConfig.output,{
        path: paths.appBuild + '/public',
        filename: 'static/js/[name].[chunkhash:8].js',
        chunkFilename: "static/js/[name].[chunkhash:8].js",
        publicPath:'/'
    }),
    module:{
        rules:[
            webpackConfig.moduleLoaders.js,
            Object.assign({
                use: ExtractTextPlugin.extract({
                    //若单独打包调用失败，使用style-loader将css填入到HTML
                    fallback: 'style-loader',
                    use:[
                        {
                            loader: 'css-loader',
                            options:{
                                minimize: true //css压缩
                            }
                        },{
                            loader: 'sass-loader',
                        }
                    ]
                })
            },webpackConfig.moduleLoaders.css),
            webpackConfig.moduleLoaders.images
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": { 
               NODE_ENV: JSON.stringify("production") 
             }
        }),
        //单独打包css
        new ExtractTextPlugin('static/css/[name].[contenthash:8].css'),
        new HtmlWebpackPlugin({
            inject: true,
            template: paths.appHtml,
            minify: {
                removeComments: true,                   //删除注释
                collapseWhitespace: true,               //删除空格
                removeEmptyAttributes: true,            //删除空的属性
                removeStyleLinkTypeAttributes: true,    //删除样式链接类型属性
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            },
        }),
        // 如果你引入的 vendor 存在于 node_modules 目录中
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module) {
               return module.context && module.context.indexOf('node_modules') !== -1;
            }
        }),
        //压缩代码
        new webpack.optimize.UglifyJsPlugin({
            compress: {
              warnings: false,
              comparisons: false,
            },
            output: {
              comments: false,
              ascii_only: true,
            },
            sourceMap: true,
        }),
        //分析npm package
        new BundleAnalyzerPlugin({
            analyzerMode: 'server',
            analyzerHost: '127.0.0.1',
            analyzerPort: 8888,
            reportFilename: 'report.html',
            defaultSizes: 'parsed',
            openAnalyzer: true,
            generateStatsFile: false,
            statsFilename: 'stats.json',
            statsOptions: null,
            logLevel: 'info'
          })
    ]
};