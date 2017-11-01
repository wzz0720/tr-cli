const chalk = require('chalk');
const fs = require('fs-extra');
const paths = require('../config/path');
const pk = require('../package');

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
fs.writeFile(paths.appBuild + '/package.json', JSON.stringify(packageConfig, null, 2), (error) => {
    fs.copy(paths.appServer, paths.appBuild + '/', err => {
        if (err) return console.error(err)
        console.log('Node环境已配置好，请执行：');
        console.log('查找目录 ' + chalk.cyan(' cd build '))
        console.log('导入npm ' + chalk.cyan(' npm install '));
        console.log('启动node服务 ' + chalk.cyan(' npm start '));
    });
});
  
