### 功能特性
- 支持解析 JSX,ES6,SASS
- 支持组件热更新
- 公共代码（如react,redux）与业务代码的分离
- 代码热替换，浏览器可以实时刷新查看效果
- 开发环境与线上环境的不同编译
- 浏览器源码调试，快速定位问题
- 支持mocha测试
- 预打包处理，提高打包编译效率
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