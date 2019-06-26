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
    courseDetail:[],
    //CourseItem
    iCourseName:"",
    iPlace:"",
    iTime:"",
    iLong:"",
    iTeacher:"",
    iWork:"",
    iTabPage:0,
    iKey:"",
    deleteIResult:false,
    changeIResult:false,
    error:"",
    addIResult:false,
    iNext:false

})
const getINext=(state)=>{
    return ((state.get("iCourseName")!=="")&&(!state.get("iPlace")!=="")
    &&(state.get("iTime")!=="")&&(state.get("iLong")!=="")
    &&(!state.get("iTeacher"!==""))&&(state.get("iWork")!==""))
}
const getChange=(state)=>{
    return ((state.get("courseName")!=="")&&(!state.get("eduArea")!=="")
    &&(state.get("ageL")!=="")&&(state.get("ageH")!=="")
    &&(!state.get("money"!==""))&&(state.get("month")!=="")
    &&(state.get("picValue")!==""))
}
const getError=(iCourseName,key,state)=>{
    var list=state.get("courseDetail");
    for (var i in list)
        if (list[i].courseName===iCourseName&&list[i].key!==key)
            return "课程名已存在"
    return ""
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
            return state.merge({"courseDetail":action.data,"iKey":action.key,"iCourseName":action.courseName,"iPlace":action.place,"iTime":action.time,"iLong":action.long,"iTeacher":action.teacher,"iWork":action.homeWork})
        case actionTypes.CHANGEIWORK:
            return state.set("iWork",action.data)
        case actionTypes.CHANGEITIME:
            return state.set("iTime",action.data)
        case actionTypes.CHANGEITEACHER:
            return state.set("iTeacher",action.data)
        case actionTypes.CHANGEIPLACE:
            return state.set("iPlace",action.data)
        case actionTypes.CHANGEILONG:
            return state.set("iLong",action.data)
        case actionTypes.CHANGEICOURSENAME:
            return state.set("iCourseName",action.data)
        case actionTypes.CLEARALLI:
            return state.merge({"iWork":"","iTime":"","iTeacher":"","iPlace":"","iLong":"","iCourseName":""})
        case actionTypes.CHANGEITAB:
            return state.set("iTabPage",action.data)
        case actionTypes.CHANGEIKEY:
            return state.set("iKey",action.data)
        case actionTypes.DELETECOURSEDETAIL:
            return state.set("courseDetail",action.data)
        case actionTypes.SETDELETEIRESULT:
            return state.set("deleteIResult",action.data)
        case actionTypes.CHANGECOURSEDETAIL:
            return state.set("courseDetail",action.data)
        case actionTypes.SETCHANGEIRESULT:
            return state.set("changeIResult",action.data)
        case actionTypes.CHANGEERROR:
            return state.set("error",getError(action.data,action.key,state))
        case actionTypes.ADDCOURSE:
            return state.set("courseDetail",action.courseDetail)
        case actionTypes.SETADDCOURSEIRESULT:
            return state.set("addIResult",action.data)
        case actionTypes.CHANGEINEXT:
            return state.set("iNext",getINext(state))
        default: 
            return state
    }
}