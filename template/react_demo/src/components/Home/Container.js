import React, {Component} from 'react';

class Container extends Component {
    render(){
        return (
            <div className="container">
                <h3>功能特性</h3>
                <ul>
                    <li>1、支持解析 JSX,ES6,SASS</li>
                    <li>2、支持组件热更新</li>
                    <li>3、公共代码（如react,redux）与业务代码的分离</li>
                    <li>4、代码热替换，浏览器可以实时刷新查看效果</li>
                    <li>5、开发环境与线上环境的不同编译</li>
                    <li>6、浏览器源码调试，快速定位问题</li>
                    <li>7、支持mocha测试</li>
                    <li>8、预打包处理，提高打包编译效率</li>
                </ul>
                <h3>运行</h3>
                <p>首先运行预打包</p>
                <code>npm run start:pre</code>
                <p>开发调试</p>
                <code>npm start</code>
                <p>运行测试</p>
                <code>npm run test</code>
                <p>上线打包</p>
                <code>npm run build</code>
                <h3>其他</h3>
                <ul>
                    <li>1、代理配置在package.json中proxy字段</li>
                    <li>2、webpack配置在/config/目录中，*.dev.js为开发环境配置，*.dll.js为预打包配置，*.prod.js为上线生产打包</li>
                </ul>
            </div>
        )
    }
}

export default Container;