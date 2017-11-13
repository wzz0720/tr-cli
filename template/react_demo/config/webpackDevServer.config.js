const paths = require('../config/path');

const webpackConfig = require('../config/webpack.config.dev');

const proxy = require('../package').proxy

module.exports = {
    contentBase: paths.appPublic,
    watchContentBase: true,
    hot: true,
    host: process.env.HOST || '0.0.0.0',
    historyApiFallback: {
        disableDotRule: true,
    },
    compress: true,
    watchOptions: {
        ignored: /node_modules/,
        aggregateTimeout: 300,
        poll: 1000
    },
    clientLogLevel: "warning",
    proxy,
    publicPath: webpackConfig.output.publicPath,
    headers: { "X-Custom-Header": "yes" },
    stats: { 
        colors: true 
    }
};