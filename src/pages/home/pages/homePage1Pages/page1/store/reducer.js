import * as actionTypes from './actionTypes'
const { fromJS } = require('immutable')
const defaultState=fromJS({
    newsList:[],
    videosList:[],
    search:"",
    page:0,//0默认,1搜索
    tabPage:0
})

export default (state=defaultState,action)=>{
    switch (action.type){
        case actionTypes.SETNEWSLIST:
            return state.set("newsList",action.data)
        case actionTypes.SETVIDEOSLIST:
            return state.set("videosList",action.data)
        case actionTypes.CHANGESEARCH:
            return state.set("search",action.data)
        case actionTypes.CHANGEPAGE:
            return state.set("page",action.data)
        case actionTypes.CHANGETABPAGE:
            return state.set("tabPage",action.data)
        default: 
            return state
    }
}