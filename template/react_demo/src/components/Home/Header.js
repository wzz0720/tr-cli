import React, {Component} from 'react';

class Header extends Component {
    render(){
        return (
            <div className='header'>
                <h1>T-CLI</h1> 
                <p>用于构建React项目，生成React目录结构</p>
                <p>快速启动基于 React + Webpack 为技术栈的前端项目</p>
            </div>
        )
    }
}

export default Header;