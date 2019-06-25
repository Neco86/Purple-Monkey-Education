import * as actionTypes from './actionTypes'
// const { fromJS } = require('immutable')
export const getTry = ()=>({
    type:actionTypes.GETTRY,
})
export const setTry = (data)=>({
    type:actionTypes.SETTRY,
    data:data
})
export const agree = (key1,key2,tryList)=>({
    type:actionTypes.AGREE,
    key1:key1,
    key2:key2,
    data:tryList
})
export const disAgree = (key1,key2,tryList)=>({
    type:actionTypes.DISAGREE,
    key1:key1,
    key2:key2,
    data:tryList
})
export const setAgreeResult = (data)=>({
    type:actionTypes.SETAGREERESULT,
    data:data
})
export const setDisAgreeResult = (data)=>({
    type:actionTypes.SETDISAGREERESULT,
    data:data
})

