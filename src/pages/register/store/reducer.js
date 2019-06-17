import * as actionTypes from './actionTypes'
const { fromJS } = require('immutable')
const defaultState=fromJS({
    username:"",
    usernameBottom:false,
    password:"",
    doublePassword:"",
    phoneNumber:"",
    select:"",
    next:false,
    pageNumber:2//1通用注册页面//2教育机构//3个人教师//4学生家长
})
const getChange=(state)=>{
    return (state.get("username")!==""&&!state.get("usernameBottom")&&
        state.get("password")===state.get("doublePassword")&&
        state.get("phoneNumber")!==""&&state.get("select")!=="")
}
export default (state=defaultState,action)=>{
    switch (action.type){
        case actionTypes.CHANGEUSERNAME:
            return state.set('username',action.data)
        case actionTypes.USERNAMEISDOUBLE:
            return state.set("usernameBottom",action.data)
        case actionTypes.CHANGEPASSWORD:
            return state.set('password',action.data)
        case actionTypes.CHANGEDOUBLEPASSWORD:
            return state.set('doublePassword',action.data)
        case actionTypes.CHANGEPHONENUMBER:
            return state.set('phoneNumber',action.data)
        case actionTypes.CHANGESELCT:
            return state.set('select',action.data)
        case actionTypes.CHANGENEXT:
            return state.set('next',getChange(state))
        case actionTypes.HANDLENEXT:
            return state.set('pageNumber',action.pageNumber)   
        case actionTypes.BACKREGISTER:
            return state.set('pageNumber',1) 
        default: 
            return state
    }
}