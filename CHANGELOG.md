# 版本迭代
## V1.1.3
 * **Bug Fix**
   * dll预打包加入babel配置
   * 服务启动时HOST可配置
   * 外网访问，热加载请求报错
## V1.1.2
 * **Bug Fix**
   * 修改webpackDevServer配置
## V1.1.0
 * **Improvement**
   * 加入webpack-bundle-analyzer分析包体依赖
   * 初始化可自行选择是否导入默认npm包
   * 打包时remove上次打包文件
   * 项目gitignore文件配置
   * 开发环境eslint检查
## V1.0.4  
 * **Bug Fix**
   * 加入了object-rest-spread插件
## V1.0.3  
 * **Bug Fix**
   * 解决了window下进程窗口自动打开浏览器
## V1.0.0
 * **Initial public release**
   * 支持解析 JSX,ES6,SASS
   * 支持组件热更新
   * 公共代码（如react,redux）与业务代码的分离
   * 代码热替换，浏览器可以实时刷新查看效果
   * 开发环境与线上环境的不同编译
   * 浏览器源码调试，快速定位问题
   * 支持mocha测试
   * 预打包处理，提高打包编译效率