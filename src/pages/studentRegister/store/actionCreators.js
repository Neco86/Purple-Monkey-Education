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
export const changeprovinceChoose = (data)=>({
    type:actionTypes.CHANGEPROVINCECHOOSE,
    data:data
})
export const changeEduArea = (data)=>({
    type:actionTypes.CHANGEEDUAREA,
    data:data
})
export const changeNext = ()=>({
    type:actionTypes.CHANGENEXT
})
export const studentRegisterFinish = (data)=>({
    type:actionTypes.STUDENTREGISTERFINISH,
    data:data
})
export const studentRegisterResult = (data)=>({
    type:actionTypes.STUDENTREGISTERRESULT,
    data:data
})