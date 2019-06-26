import * as actionTypes from './actionTypes'
const { fromJS } = require('immutable')
const defaultState=fromJS({
    tabPage:0,//默认0,其他为了调试方便
    myCourseList:[],
    deleteResult:false,
    page:3,//默认0,其他为了调试方便,1为添加新课程,2修改课程,3查看课程
    //page1-添加新课程
    courseName:"",
    eduArea:"",
    ageL:"",
    ageH:"",
    money:"",
    month:"",
    pic:"",//文件名称
    picValue:"",//文件内容
    list:[],
    next:false,
    addCourseResult:false,
    //page2-修改课程
    fixKey:"",//默认空
    fixCourseResult:false,
    //page3-查看课程
    seeKey:"",//默认空
    courseDetail:[]
})
const getChange=(state)=>{
    return ((state.get("courseName")!=="")&&(!state.get("eduArea")!=="")
    &&(state.get("ageL")!=="")&&(state.get("ageH")!=="")
    &&(!state.get("money"!==""))&&(state.get("month")!=="")
    &&(state.get("picValue")!==""))
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
        case actionTypes.SETLIST:
            return state.set("list",action.data)
        case actionTypes.CLEARALL:
            return state.merge({"courseName":"","eduArea":"","ageL":"","ageH":"","money":"","month":"","pic":"","picValue":"","next":false})
        case actionTypes.SETFIXKEY:
            return state.set("fixKey",action.data)
        case actionTypes.SETSEEKEY:
            return state.set("seeKey",action.data)
        case actionTypes.SETFIXCOURSE:
            return state.merge({"courseName":action.courseName,"eduArea":action.eduArea,"ageH":action.ageH,"ageL":action.ageL,"money":action.money,"month":action.month,"next":true,"picValue":"x"})
        case actionTypes.SETFIXCOURSERESULT:
            return state.set("fixCourseResult",action.data)
        case actionTypes.SETPAGE3COURSEDETAIL:
            return state.set("courseDetail",action.data)
        default: 
            return state
    }
}