#!/usr/bin/env node --harmony
'use strict'
const path = require('path');
const fs = require('fs-extra');
const co = require('co'); 
const prompt = require('co-prompt'); 
const execSync = require('child_process').execSync;
const spawn = require('cross-spawn');
const chalk = require('chalk'); 
const validateProjectName = require('validate-npm-package-name');
const dirTree = require('directory-tree');

const packageConfig = require('../command/config').packageConfig
const sep = path.sep;

// 打印出错的处理
function printValidationResults(results) {
  if (typeof results !== 'undefined') {
    results.forEach(error => {
      console.error(chalk.red(`  *  ${error}`));
    }); 
  }
}

//检查APP名字
function checkAppName(appName,root) {
  const validationResult = validateProjectName(appName);
  //特殊字符不允许创建
  if (!validationResult.validForNewPackages) {
    console.error(
      `不能创建名为${chalk.red(
        `"${appName}"`
      )}的文件,因为npm命名的限制:`
    );
    printValidationResults(validationResult.errors);
    printValidationResults(validationResult.warnings);
    process.exit(1);
  }
  //react vue 存在的不允许被创建
  const dependencies = ['react', 'react-dom', 'react-scripts', 'vue'].sort();
  if (dependencies.indexOf(appName) >= 0) {
    console.error(
      chalk.red(
        `请不要创建名为 ${chalk.green(
          appName
        )}的文件,因为存在与相同名称的依赖关系.\n` +
          `包括以下这些:\n\n`
      ) +
        chalk.cyan(dependencies.map(depName => `  ${depName}`).join('\n')) +
        chalk.red('\n\n请选择一个其他名称.')
    );
    process.exit(1);
  }
}

//判断是否存在改文件
function isBeingAppName(root, name) {
  const conflicts = fs.readdirSync(root);
  if (conflicts.length < 1) {
    return true;
  }
  console.log(`${chalk.green(name)} 项目已存在，请选择其他命名`);
  return false;
}

//递归打印文件目录、文件名
function readDir(path, _length) {
  const exists = fs.existsSync(path),
      stat = fs.statSync(path);
  if (exists && stat) { //判断文件、文件目录是否存在
      if (stat.isFile()) {
          var fpath = path.split(sep);
          console.info(chalk.green(symbol(fpath,_length) + '├──' + fpath[fpath.length - 1]));
      } else if (stat.isDirectory()) {
          var fpath = path.split(sep);
          console.info(chalk.green(symbol(fpath,_length) + '├──' + fpath[fpath.length - 1]));
          var files = fs.readdirSync(path);
          if (files && files.length > 0) {
              files.forEach(function(file) {
                if(file !== 'node_modules'){
                  readDir(path + sep + file, _length); //递归
                }
              });
          }
      }
  } else {
      console.info('根目录不存在.');
  }
};

//符号拼接
function symbol(fpath,_length) {
  var s = '';
  for (var i = 1; i < fpath.length - _length + 1; i++) {
      s += '│';
  }
  return s;
};

//初始化
function init(){
  configPrompt()
  .then(function(obj){
    creatApp(
      obj.appName,
      obj.root,
      obj.templatePath,
      obj.version
    )
  })
  .catch(function(error){
    console.log(error)
    process.exit(1);
  })
}

//输入提示设置
function configPrompt(){
  return co(function *() { 
    // 分步接收用户输入的参数 
    let appName = yield prompt('name:')
    let version = yield prompt('version[1.0.0]:')
    // let useDefaultWebpack = yield prompt('use default webpack:[y/n]')

    const root = path.resolve(appName);
    const templatePath = path.join(__dirname, '../template');

    return {
      appName,
      version,
      root,
      templatePath
    }

  })
}

//创建App
function creatApp(appName,root,templatePath,version){
  checkAppName(appName,root);
  //创建文件
  fs.ensureDirSync(appName);
  if (!isBeingAppName(root, appName)) {
    process.exit(1);
  }
  fs.copy(path.join(__dirname,'../template/react_demo'), root, err => {
    if (err) return console.error(err)
    console.log('success!')
    //更改工作区到当前目录下
    process.chdir(root);
    console.log(`在 ${chalk.green(root)} 创建了一个APP.`);
    run(appName,root,templatePath,version);
  });  
}

//运行
function run(appName,root,templatePath,version){
  getPackage(appName,version).then(function(packageConfig){
    //将设置好的package写入package.json
    fs.writeFileSync(
      path.join(root, 'package.json'),
      JSON.stringify(packageConfig, null, 2)
    );
  }).then(function(){
      //导入packages
      install().then(function(){
        //  _length 传入到 readDir 为了绘制tree 美观，记录目录结构的长度
        const _length = root.split(sep).length; 
        readDir(root,_length);
        console.log('查找目录' + chalk.cyan(' cd ' + appName ));
        console.log('运行' + chalk.cyan(' npm run start:pre ') + '预打包');
        console.log('运行' + chalk.cyan(' npm start ') + '启动开发环境');
        console.log('运行' + chalk.cyan(' npm run build ') + '打包生成上线包');
        console.log('运行' + chalk.cyan(' npm run test ') + '测试');
        process.exit(1);
      });
  })
}

//设置package
function getPackage(appName,version){
  return new Promise((resolve, reject) => {
    const dependencies = getDependencies();
    resolve(Object.assign(packageConfig,{
      name: appName,
      version: version || "1.1.1",
      dependencies
    }))
  })
}

//设置dependencies
function getDependencies(){
  return {
    "react": "^15.6.1",
    "react-dom": "^15.6.1",
    "react-redux": "^5.0.6",
    "react-router": "^4.2.0",
    "react-router-dom": "^4.2.2",
    "react-router-redux": "^4.0.8",
    "redux": "^3.7.2",
    "redux-thunk": "^2.2.0"
  }
}

//导入package包
function install() {
  return new Promise((resolve, reject) => {
    let command = 'npm';
    let args = ['install'];

    const child = spawn(command, args, { stdio: 'inherit' });

    child.on('close', code => {
      if (code !== 0) {
        reject({
          command: `${command} ${args.join(' ')}`,
        });
        return;
      }
      resolve();
    });
    //resolve();
  });
}

module.exports = init;