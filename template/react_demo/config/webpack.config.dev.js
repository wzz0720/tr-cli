const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

const paths = require('../config/path');
const webpackConfig = require('../config/webpack.config');

module.exports = {
    devtool: webpackConfig.devtool,
    entry: webpackConfig.entry,
    output: Object.assign({},webpackConfig.output,{
        filename: 'static/js/[name].js',
        chunkFilename: 'static/js/[id].js',
        publicPath: '/'
    }),
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /^node_modules$/,
                enforce: 'pre',
                use: [
                  {
                    options: {
                      formatter: require('eslint-friendly-formatter'),
                      eslintPath: require.resolve('eslint'),
                      
                    },
                    loader: require.resolve('eslint-loader'),
                  },
                ]
            },
            {
                oneOf:[
                    webpackConfig.moduleLoaders.js,
                    Object.assign({
                        use: ['style-loader','css-loader','sass-loader']
                    },webpackConfig.moduleLoaders.css),
                    webpackConfig.moduleLoaders.images
                ]
            }
        ]
    },
    plugins: [
        new webpack.DllReferencePlugin({
            context: path.resolve(__dirname, '../dist'),
			manifest: require(path.resolve(paths.appDist,'vendor-manifest.json')),
            name:'vendor_library'
        }),
        new HtmlWebpackPlugin({
            inject: true,
            template: paths.appHtml,
        }),
        new AddAssetHtmlPlugin({
          filepath: path.resolve(__dirname, '../dist/*.dll.js')
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};