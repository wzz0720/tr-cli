## TR-CLI
#### 一个全局的命令行工具用来创建一个新的项目
### 安装
<code>npm install -g tr-cli </code>
### 创建一个应用程序 
<code>tr-cli init

name:myapp          //你的项目名字myapp

version[1.0.0]::	//版本号（默认为1.0.0）

cd my-app
</code>
### 项目结构
<pre>
├──myapp
│├──.babelrc
│├──config
││├──path.js
││├──webpack.config.dev.js
││├──webpack.config.dll.js
││├──webpack.config.js
││├──webpack.config.prod.js
││├──webpackDevServer.config.js
│├──package.json
│├──public
││├──index.html
│├──scripts
││├──build.js
││├──start.js
││├──start.pre.js
│├──src
││├──App.js
││├──common
││├──components
││├──images
││├──redux
│││├──configStore.js
│││├──reducers.js
││├──routes
│││├──index.js
││├──styles
││├──utils
││├──views
│││├──Home.js
│││├──HomeRedux.js
│││├──home.scss
│├──test
││├──index.js
</pre>
### 运行
<p>首先运行预打包</p>
<code>npm run start:pre</code>
<p>开发调试</p>
<code>npm start</code>
<p>运行测试</p>
<code>npm run test</code>
<p>上线打包</p>
<code>npm run build</code>

### 其他
<p>1、代理配置在package.json中proxy字段</p>
<p>2、webpack配置在/config/目录中，*.dev.js为开发环境配置，*.dll.js为预打包配置，*.prod.js为上线生产打包</p>