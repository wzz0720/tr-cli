var webpack = require('webpack');
var path = require('path');

const paths = require('../config/path');
const deps = require('../package').dependencies;
const webpackConfig = require('../config/webpack.config');

module.exports = {
    devtool:'cheap-source-map',
    entry: {
        vendor: Object.keys(deps)
    },
    output: {
        path: paths.appDist,
        filename: '[name].dll.js',
        library: '[name]_library',
    },
    module:{
        rules:[
            webpackConfig.moduleLoaders.js
        ]
    },
    plugins: [
        new webpack.DllPlugin({
            context: path.resolve(__dirname, '../dist'),
            path: path.resolve(__dirname, '../dist/[name]-manifest.json'),
            name: '[name]_library'
        }),
    ]
}