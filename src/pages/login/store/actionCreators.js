import * as actionTypes from './actionTypes'
// // const { fromJS } = require('immutable')
export const changeUsername = (data)=>({
    type:actionTypes.CHANGEUSERNAME,
    data:data
})
export const changePassword = (data)=>({
    type:actionTypes.CHANGEPASSWORD,
    data:data
})
export const login = (username,password)=>({
    type:actionTypes.LOGIN,
    username:username,
    password:password
})
export const loginResult = (data)=>({
    type:actionTypes.LOGINRESULT,
    data:data
})