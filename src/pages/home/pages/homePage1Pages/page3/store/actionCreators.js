import * as actionTypes from './actionTypes'
// // const { fromJS } = require('immutable')
export const changeTabPage = (index)=>({
    type:actionTypes.CHANGETABPAGE,
    data:index
})
export const getMyCourseList = ()=>({
    type:actionTypes.GETCOURSELIST
})
export const setMyCourseList = (data)=>({
    type:actionTypes.SETCOURSELIST,
    data:data
})
export const deleteCourse = (key,myCourseList)=>({
    type:actionTypes.DELETECOURSE,
    data:myCourseList,
    key:key
})
export const deleteCourseResult = (data)=>({
    type:actionTypes.DELETECOURSERESULT,
    data:data
})
export const setDeleteResult = (data)=>({
    type:actionTypes.SETDELETERESULT,
    data:data
})
export const changePage = (data)=>({
    type:actionTypes.CHANGEPAGE,
    data:data
})
export const changeCourseName = (data)=>({
    type:actionTypes.CHANGECOURSENAME,
    data:data
})
export const changeEduArea = (data)=>({
    type:actionTypes.CHANGEEDUAREA,
    data:data
})
export const changeAgeL = (data)=>({
    type:actionTypes.CHANGEALEL,
    data:data
})
export const changeAgeH = (data)=>({
    type:actionTypes.CHANGEAGEH,
    data:data
})
export const changeMonth = (data)=>({
    type:actionTypes.CHANGEMONTH,
    data:data
})
export const changeMoney = (data)=>({
    type:actionTypes.CHANGEMONEY,
    data:data
})
export const changePic = (data)=>({
    type:actionTypes.CHANGEPIC,
    data:data
})
export const changeNext = ()=>({
    type:actionTypes.CHANGENEXT
})
export const addCourseFinish = (data)=>({
    type:actionTypes.ADDCOURSEFINISH,
    data:data
})
export const setAddCourseResult = (data)=>({
    type:actionTypes.SETADDCOURSERESULT,
    data:data
})
export const clearAll = ()=>({
    type:actionTypes.CLEARALL
})
export const changePicValue = (data)=>({
    type:actionTypes.CHANGEPICVALUE,
    data:data
})
export const getList = ()=>({
    type:actionTypes.GETLIST
})
export const setList = (data)=>({
    type:actionTypes.SETLIST,
    data:data
})
export const setFixKey = (data)=>({
    type:actionTypes.SETFIXKEY,
    data:data
})
export const setSeeKey = (data)=>({
    type:actionTypes.SETSEEKEY,
    data:data
})
export const getFixCourse = (key)=>({
    type:actionTypes.GETFIXCOURSE,
    data:key
})
export const setFixCourse = (data)=>({
    type:actionTypes.SETFIXCOURSE,
    courseName:data.courseName,
    eduArea:data.eduArea,
    ageL:data.ageL,
    ageH:data.ageH,
    money:data.money,
    month:data.month
})
export const fixCourseFinish = (data)=>({
    type:actionTypes.FIXCOURSEFINISH,
    data:data
})
export const setFixCourseResult = (data)=>({
    type:actionTypes.SETFIXCOURSERESULT,
    data:data
})
export const getPage3CourseDetail = (data)=>({
    type:actionTypes.GETPAGE3COURSEDETAIL,
    data:data
})
export const setPage3CourseDetail = (data)=>({
    type:actionTypes.SETPAGE3COURSEDETAIL,
    data:data,
    key:data[0].key,
    courseName:data[0].courseName,
    place:data[0].place,
    time:data[0].time,
    long:data[0].long,
    teacher:data[0].teacher,
    homeWork:data[0].homeWork
})
export const changeICourseName = (data)=>({
    type:actionTypes.CHANGEICOURSENAME,
    data:data
})
export const chanegIPlace = (data)=>({
    type:actionTypes.CHANGEIPLACE,
    data:data
})
export const changeITime = (data)=>({
    type:actionTypes.CHANGEITIME,
    data:data
})
export const changeILong = (data)=>({
    type:actionTypes.CHANGEILONG,
    data:data
})
export const changeITeacher = (data)=>({
    type:actionTypes.CHANGEITEACHER,
    data:data
})
export const changeIWork = (data)=>({
    type:actionTypes.CHANGEIWORK,
    data:data
})
export const clearAllI = ()=>({
    type:actionTypes.CLEARALLI
})
export const changeITab = (index)=>({
    type:actionTypes.CHANGEITAB,
    data:index
})
export const changeIKey = (data)=>({
    type:actionTypes.CHANGEIKEY,
    data:data
})
export const deleteCourseDetail=(data,key1,key2)=>({
    type:actionTypes.DELETECOURSEDETAIL,
    data:data,//data为删除之后内容
    key1:key1,//所选课程的key
    key2:key2//课程第几次的key
})
export const setDeleteIResult = (data)=>({
    type:actionTypes.SETDELETEIRESULT,
    data:data
})
export const changeCourseDetail = (data,key1,key2)=>({
    type:actionTypes.CHANGECOURSEDETAIL,
    data:data,//data为修改之后内容
    key1:key1,//所选课程的key
    key2:key2//课程第几次的key
})
export const setChangeIResult = (data)=>({
    type:actionTypes.SETCHANGEIRESULT,
    data:data
})
export const changeError = (data,key)=>({
    type:actionTypes.CHANGEERROR,
    data:data,
    key:key
})
export const addCourse=(courseDetail,newItem,key1)=>({
    type:actionTypes.ADDCOURSE,
    data:newItem,//添加的小课
    key:key1,//添加小课从属大课的key
    courseDetail:courseDetail//添加之后的
})
export const setAddCourseIResult=(data)=>({
    type:actionTypes.SETADDCOURSEIRESULT,
    data:data
})
export const changeINext=()=>({
    type:actionTypes.CHANGEINEXT
})