const WebpackDevServer = require("webpack-dev-server");
const webpack = require("webpack");
const exec = require('child_process').exec;

const webpackConfig = require('../config/webpack.config.dev')
const WebpackDevServerConfig = require('../config/webpackDevServer.config')

const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000;
const HOST = process.env.HOST || '0.0.0.0';

webpackConfig.entry.main.unshift(
    `webpack-dev-server/client?http://${HOST}:${DEFAULT_PORT}/`,  //node里的webpack-dev-server配置没有inline，所以采用这个种形式
    "webpack/hot/dev-server"                                        //HMR配置
);

const compiler = webpack(webpackConfig);

//创建WebpackDevServer服务
//@compiler                   webpack配置
//@WebpackDevServerConfig     WebpackDevServer配置
var server = new WebpackDevServer(compiler,WebpackDevServerConfig);
server.listen(DEFAULT_PORT, HOST, err => {
    if (err) {
        console.log(err);
    }
    console.log('启动服务...');
    if (process.platform === 'win32') {
        exec(`explorer http://${HOST}:${DEFAULT_PORT}`);
        return ;
    }
    if(process.platform === 'darwin'){
        exec(`open http://${HOST}:${DEFAULT_PORT}`);
        return ;
    }  
});