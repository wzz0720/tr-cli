//combineReducers Home
import { combineReducers } from 'redux';

import {showHeader, hideHeader} from '../components/Home/HeaderAction';
import header from '../components/Home/HeaderRedux';

export default combineReducers({
    header  //页面内每个组件的reducer的集合 ...
})

export const HomeAction = {
    //  页面内每个组件的action集合
    showHeader,
    hideHeader
};