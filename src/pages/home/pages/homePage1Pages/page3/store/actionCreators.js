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

