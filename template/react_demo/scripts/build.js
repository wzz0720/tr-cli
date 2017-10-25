const webpack = require("webpack");
const chalk = require('chalk');
const fs = require('fs-extra');

const webpackConfig = require('../config/webpack.config.prod');
const paths = require('../config/path');
const pk = require('../package');

const compiler = webpack(webpackConfig);

const packageConfig = {
    "name": pk.name,
    "version": pk.version,
    "description": pk.description,
    "main": "index.js",
    "scripts": {
      "start": "nodemon ./index",
    },
    "author": "",
    "license": "ISC",
    "dependencies": {
      "express": "^4.16.2",
      "http-proxy-middleware": "^0.17.4"
    }
}  

console.log('正在打包...');
compiler.run((err, stats) => {
    if (err) { 
        console.log(err)
    }
    console.log('[webpack:build]', stats.toString({
        chunks: false,
        colors: true
    }));
    fs.writeFile(paths.appBuild + '/package.json', JSON.stringify(packageConfig, null, 2), (error) => {
        fs.copy(paths.appServer, paths.appBuild + '/', err => {
            if (err) return console.error(err)
            console.log(chalk.green('打包完成'));
            console.log('如果想运行项目在node环境上，请执行以下操作，否则跳过，拷贝/build/public/文件到服务器上');
            console.log('查找目录 ' + chalk.cyan(' cd build '))
            console.log('导入npm ' + chalk.cyan(' npm install '));
            console.log('启动node服务 ' + chalk.cyan(' npm start '));
        });
    });
})