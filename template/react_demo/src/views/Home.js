//组件文件命名统一采用大写字母开头
//Home.js表示首页
//List.js表示列表
//以此命名

import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import Header from '../components/Home/Header';
import Container from '../components/Home/Container';

import {HomeAction} from './HomeRedux'

import './home.scss'

class Home extends Component{
    componentDidMount(){
        this.props.actions.hideHeader() //测试action
    }
    render(){
        console.log(this.props.header.test) //测试对应action返回的数据
        return (
            <div>
                <Header></Header>
                <Container></Container>
            </div>
        )
    }
}
export default connect(state => {
    return{
        header:state.home.header
    }
},dispatch => {
    return{
        actions: bindActionCreators(HomeAction,dispatch)
    }
})(Home);