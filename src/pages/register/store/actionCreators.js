import * as actionTypes from './actionTypes'
// // const { fromJS } = require('immutable')
export const changeUserName = (data)=>({
    type:actionTypes.CHANGEUSERNAME,
    data:data
})
export const usernameIsDouble = (data)=>({
    type:actionTypes.USERNAMEISDOUBLE,
    data:data
})
export const changePassWord = (data)=>({
    type:actionTypes.CHANGEPASSWORD,
    data:data
})
export const changeDoublePassWord = (data)=>({
    type:actionTypes.CHANGEDOUBLEPASSWORD,
    data:data
})
export const changePhoneNumber = (data)=>({
    type:actionTypes.CHANGEPHONENUMBER,
    data:data
})
export const changeSelect = (data)=>({
    type:actionTypes.CHANGESELCT,
    data:data
})
export const changeNext = ()=>({
    type:actionTypes.CHANGENEXT
})
export const handleNext = (pageNumber)=>({
    type:actionTypes.HANDLENEXT,
    pageNumber:pageNumber
})
export const backRegister = ()=>({
    type:actionTypes.BACKREGISTER
})