## T-CLI
#### 一个全局的命令行工具用来创建一个新的项目
### 安装
<code>npm install -g t-cli </code>
### 创建一个应用程序 
<code>t-cli init

name:myapp          //你的项目名字myapp

version[1.0.0]::	//版本号（默认为1.0.0）

cd my-app
</code>
### 项目结构
<pre>
├──myapp
│├──.babelrc
│├──README.md
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
│││├──Home
││││├──Container.js
││││├──Header.js
││││├──HeaderAction.js
││││├──HeaderRedux.js
││├──images
│││├──test.png
││├──redux
│││├──configStore.js
│││├──reducers.js
││├──routes
│││├──index.js
││├──styles
│││├──index.scss
│││├──rest.css
││├──utils
│││├──Tool.js
││├──views
│││├──Home.js
│││├──HomeRedux.js
│││├──home.scss
│├──test
││├──index.js
</pre>