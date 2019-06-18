import * as actionTypes from './actionTypes'
import { SETEDUCATIONAREA } from '../../groupRegister/store/actionTypes'
const { fromJS } = require('immutable')
const defaultState=fromJS({
    name:"",
    sex:"",
    age:"",
    personID:"",
    personIDBottom:false,
    eduArea:[],//获取的可选项
    chooseEduArea:"",
    teacheAge:"",
    ageL:"",
    ageH:"",
    tel:"",
    intro:"",
    next:false,
    result:false
})
const getChange=(state)=>{
    return ((state.get("name")!=="")&&(!state.get("sex")!=="")
    &&(state.get("age")!=="")&&(state.get("personID")!=="")
    &&(!state.get("personIDBottom"))&&(state.get("chooseEduArea")!=="")
    &&(state.get("teacheAge")!=="")&&(state.get("ageL")!=="")
    &&(state.get("ageH")!=="")&&(state.get("tel")!=="")
    &&(state.get("intro")!==""))
}
export default (state=defaultState,action)=>{
    switch (action.type){
        case actionTypes.CHANGENAME:
            return state.set("name",action.data)
        case actionTypes.CHANGESEX:
            return state.set("sex",action.data)
        case actionTypes.CHANGEAGE:
            return state.set("age",action.data)
        case actionTypes.CHANGEPERSONID:
            return state.set("personID",action.data)
        case actionTypes.SETPERSONIDBOTTOM:
            return state.set("personIDBottom",action.data)
        case SETEDUCATIONAREA:
            return state.set("eduArea",action.data)
        case actionTypes.CHANGEEDUAREA:
            return state.set("chooseEduArea",action.data)
        case actionTypes.CHANGETEACHAGE:
            return state.set("teacheAge",action.data)
        case actionTypes.CHANGEAGEL:
            return state.set("ageL",action.data)
        case actionTypes.CHANGEAGEH:
            return state.set("ageH",action.data)
        case actionTypes.CHANGETEL:
            return state.set("tel",action.data)
        case actionTypes.CHANGEINTRO:
            return state.set("intro",action.data)
        case actionTypes.CHANGENEXT:
            return state.set("next",getChange(state))
        case actionTypes.TEACHERREGISTERRESULT:
            return state.set("result",action.data)
        default: 
            return state
    }
}