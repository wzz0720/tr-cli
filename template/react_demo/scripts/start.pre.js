const webpack = require("webpack");
const chalk = require('chalk');

const webpackConfig = require('../config/webpack.config.dll');
const deps = require('../package').dependencies;
const depsArr = Object.keys(deps).sort();

const compiler = webpack(webpackConfig);

console.log('运行dll预打包');
console.log('打包' + 
            chalk.cyan(depsArr.map(depName => `${depName}`).join(',')) +
            ',请稍等...');
compiler.run((err, stats) => {
    if (err) { 
        console.log(err)
    }
    console.log(chalk.green('打包完成'))
    console.log('运行 ' + chalk.cyan(' npm start ') + ' 启动服务')
})