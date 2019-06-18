import * as actionTypes from './actionTypes'
// // const { fromJS } = require('immutable')
export const changeName = (data)=>({
    type:actionTypes.CHANGENAME,
    data:data
})
export const changeSex = (data)=>({
    type:actionTypes.CHANGESEX,
    data:data
})
export const changeAge = (data)=>({
    type:actionTypes.CHANGEAGE,
    data:data
})
export const changePersonID = (data)=>({
    type:actionTypes.CHANGEPERSONID,
    data:data
})
export const setPersonIDBottom = (data)=>({
    type:actionTypes.SETPERSONIDBOTTOM,
    data:data
})
export const changeEduArea = (data)=>({
    type:actionTypes.CHANGEEDUAREA,
    data:data
})
export const changeTeachAge = (data)=>({
    type:actionTypes.CHANGETEACHAGE,
    data:data
})
export const changeAgeL = (data)=>({
    type:actionTypes.CHANGEAGEL,
    data:data
})
export const changeAgeH = (data)=>({
    type:actionTypes.CHANGEAGEH,
    data:data
})
export const changeTel = (data)=>({
    type:actionTypes.CHANGETEL,
    data:data
})
export const changeIntro = (data)=>({
    type:actionTypes.CHANGEINTRO,
    data:data
})
export const changeNext = ()=>({
    type:actionTypes.CHANGENEXT
})
export const teacherRegisterFinish = (data)=>({
    type:actionTypes.TEACHERREGISTERFINISH,
    data:data
})
export const teacherRegisterResult = (data)=>({
    type:actionTypes.TEACHERREGISTERRESULT,
    data:data
})