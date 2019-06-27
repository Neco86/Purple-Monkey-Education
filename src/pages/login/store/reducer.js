import * as actionTypes from './actionTypes'
const { fromJS } = require('immutable')
const defaultState=fromJS({
    username:"",
    password:"",
    type:""//默认空,type1,type2,error1,error2,error3为调试使用
})

export default (state=defaultState,action)=>{
    switch (action.type){
        case actionTypes.CHANGEUSERNAME:
            return state.set("username",action.data)
        case actionTypes.CHANGEPASSWORD:
            return state.set("password",action.data)
        case actionTypes.LOGINRESULT:
            return state.set("type",action.data)
        case actionTypes.RELOGIN:
            return state.set("type","")
        case actionTypes.HANDLELOGOUT:
            return state.merge({"username":"","password":"","type":""})
        default: 
            return state
    }
}