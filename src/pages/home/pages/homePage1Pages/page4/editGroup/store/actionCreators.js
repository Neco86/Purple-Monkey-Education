import * as actionTypes from './actionTypes'
// // const { fromJS } = require('immutable')
export const getEducationArea = ()=>({
    type:actionTypes.GETEDUCATIONAREA,
})
export const setEducationArea = (data)=>({
    type:actionTypes.SETEDUCATIONAREA,
    data:data
})
export const changeGroupName = (data)=>({
    type:actionTypes.CHANGEGROUPNAME,
    data:data
})
export const setGroupNameBottom = (data)=>({
    type:actionTypes.SETGROUPNAMEBOTTOM,
    data:data
})
export const changeEduArea = (data)=>({
    type:actionTypes.CHANGEEDUAREA,
    data:data
})
export const changePlace = (data)=>({
    type:actionTypes.CHANGEPLACE,
    data:data
})
export const getProvince = ()=>({
    type:actionTypes.GETPROVINCE
})
export const setProvince = (data)=>({
    type:actionTypes.SETPROVINCE,
    data:data.data,
    defaultChoose:data.defaultChoose
})
export const changeDetailPlace = (data)=>({
    type:actionTypes.CHANGEDETAILPLACE,
    data:data
})
export const changeTel = (data)=>({
    type:actionTypes.CHANGETEL,
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
export const changeIntro = (data)=>({
    type:actionTypes.CHANGEINTRO,
    data:data
})
export const changeNext = ()=>({
    type:actionTypes.CHANGENEXT
})
export const editGroupFnish = (data)=>({
    type:actionTypes.EDITGROUPFNISH,
    data:data
})
export const setEditGroupResult = (data)=>({
    type:actionTypes.SETEDITGROUPRESULT,
    data:data
})
export const setDefault = ()=>({
    type:actionTypes.SETDEFAULT
})