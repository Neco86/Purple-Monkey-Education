import * as actionTypes from './actionTypes'
const { fromJS } = require('immutable')
const defaultState=fromJS({
    tabPage:0,//默认0,其他为了调试方便
    myCourseList:[],
    deleteResult:false,
    page:0,//默认0,其他为了调试方便,1为添加新课程
    //page1-添加新课程
    courseName:"",
    eduArea:"",
    ageL:"",
    ageH:"",
    money:"",
    month:"",
    pic:"",//文件名称
    picValue:"",//文件内容
    next:false,
    addCourseResult:false
})
const getChange=(state)=>{
    return ((state.get("courseName")!=="")&&(!state.get("eduArea")!=="")
    &&(state.get("ageL")!=="")&&(state.get("ageH")!=="")
    &&(!state.get("money"!==""))&&(state.get("month")!=="")
    &&(state.get("pic")!==""))
}
export default (state=defaultState,action)=>{
    switch (action.type){
        case actionTypes.CHANGETABPAGE:
            return state.set("tabPage",action.data)
        case actionTypes.SETCOURSELIST:
            return state.set("myCourseList",action.data)
        case actionTypes.DELETECOURSE:
            return state.set("myCourseList",action.data)
        case actionTypes.DELETECOURSERESULT:
            return state.set("deleteResult",action.data)
        case actionTypes.SETDELETERESULT:
            return state.set("deleteResult",action.data)
        case actionTypes.CHANGEPAGE:
            return state.set("page",action.data)
        case actionTypes.CHANGECOURSENAME:
            return state.set("courseName",action.data)
        case actionTypes.CHANGEEDUAREA:
            return state.set("eduArea",action.data)
        case actionTypes.CHANGEALEL:
            return state.set("ageL",action.data)
        case actionTypes.CHANGEAGEH:
            return state.set("ageH",action.data)
        case actionTypes.CHANGEMONTH:
            return state.set("month",action.data)
        case actionTypes.CHANGEMONEY:
            return state.set("money",action.data)
        case actionTypes.CHANGEPIC:
            return state.set("pic",action.data)
        case actionTypes.CHANGENEXT:
            return state.set("next",getChange(state))
        case actionTypes.SETADDCOURSERESULT:
            return state.set("addCourseResult",action.data)
        case actionTypes.CHANGEPICVALUE:
            return state.set("picValue",action.data)
        case actionTypes.CLEARALL:
            return state.merge({"courseName":"","eduArea":"","ageL":"","ageH":"","money":"","month":"","pic":"","picValue":"","next":false})
        default: 
            return state
    }
}