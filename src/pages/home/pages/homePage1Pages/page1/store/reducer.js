import * as actionTypes from './actionTypes'
const { fromJS } = require('immutable')
const defaultState=fromJS({
    newsList:[],
    videosList:[],
    search:"",
    page:3,//0默认,其他为了方便调试:1搜索,2搜索-详情,3搜索-详情-资料
    tabPage:0,
    searchResut:[],
    searchClickKey:"",//搜索结果点击的key
    searchDetail:{},//搜索结果详情
    comments:[],//searchDetail的comments
    dir:[],//searchDetail的dir
    information:{},
    course:[],//information的course
    publish:[],//information的publish

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
        case actionTypes.SETSEARCH:
            return state.set("searchResut",action.data)
        case actionTypes.SETSEARCHCLICKKEY:
            return state.set("searchClickKey",action.data)
        case actionTypes.SETSEARCHDETAIL:
            return state.merge({"searchDetail":action.data,"comments":action.comments,"dir":action.dir})
        case actionTypes.SETINFORMATION:
            return state.merge({"information":action.data,"course":action.course,"publish":action.publish})
        default: 
            return state
    }
}