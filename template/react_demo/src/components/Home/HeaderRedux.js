//aciton redux 

import { combineReducers } from 'redux';

import { SHOW_HEADER, HIDE_HEADER } from './HeaderAction'

const initialState = {
    loading: true,
    test: 2
};

//HOME 页面里 header组件的 reducer
export default function previewHeader(state = initialState, action){
    switch (action.type) {
        case SHOW_HEADER:{
            return action.payload
        }
        case HIDE_HEADER:{
            return Object.assign({},{
                loading: false
            },action.payload)
        }
        default:
            return state;
    }
}