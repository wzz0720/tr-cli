const webpack = require("webpack");
const fs = require('fs-extra');
const chalk = require('chalk');

const webpackConfig = require('../config/webpack.config.prod');
const paths = require('../config/path');
const compiler = webpack(webpackConfig);

console.log('正在打包...');
fs.remove(paths.appBuild + '/public/').then(
    compiler.run((err, stats) => {
        if (err) { 
            console.log(err)
        }
        console.log('[webpack:build]', stats.toString({
            chunks: false,
            colors: true
        }));
        console.log(chalk.green('打包完成'));
        console.log('如果想运行项目在node环境上，请执行' + chalk.cyan(' npm run n ') + '，否则跳过，拷贝/build/public/文件到服务器上');
    })
)
  
