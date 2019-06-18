import * as actionTypes from './actionTypes'
const { fromJS } = require('immutable')
const defaultState=fromJS({
    username:"",
    password:""
})

export default (state=defaultState,action)=>{
    switch (action.type){
        case actionTypes.CHANGEUSERNAME:
            return state.set("username",action.data)
        case actionTypes.CHANGEPASSWORD:
            return state.set("password",action.data)
        case actionTypes.LOGINRESULT:
            console.log(action.data);
            return state
        default: 
            return state
    }
}