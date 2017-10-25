
export const SHOW_HEADER = 'SHOW_HEADER';
export const HIDE_HEADER = 'HIDE_HEADER';

//HOME 页面里 header组件的action
export function showHeader(){
    return {
        type: SHOW_HEADER,
        payload:{
            test:1
        }
    }
}
export function hideHeader(){
    return {
        type: HIDE_HEADER,
        payload:{
            test:0
        }
    }
}