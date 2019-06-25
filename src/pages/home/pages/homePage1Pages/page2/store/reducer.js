import * as actionTypes from './actionTypes'
const { fromJS } = require('immutable')
const defaultState=fromJS({
    tryList:[],
    agreeResult:false,
    disAgreeResult:false
})

export default (state=defaultState,action)=>{
    switch (action.type){
        case actionTypes.SETTRY:
           return state.set("tryList",action.data)
        case actionTypes.AGREE:
            return state.set("tryList",action.data)
        case actionTypes.DISAGREE:
            return state.set("tryList",action.data)
        case actionTypes.SETAGREERESULT:
            return state.set("agreeResult",action.data)
        case actionTypes.SETDISAGREERESULT:
            return state.set("disAgreeResult",action.data)
        default: 
            return state
    }
}