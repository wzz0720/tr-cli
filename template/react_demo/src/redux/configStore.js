import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import ThunkMiddleware from 'redux-thunk';

import rootReducer from './reducers'

const reducer = combineReducers(Object.assign(
    {},
    rootReducer,
    {routing:routerReducer}
))

const store = compose(
    applyMiddleware(ThunkMiddleware)    //中间件
)(createStore)(reducer);

export default store;