import * as actionTypes from './actionTypes'
import { SETEDUCATIONAREA,SETPROVINCE } from '../../groupRegister/store/actionTypes'
const { fromJS } = require('immutable')
const defaultState=fromJS({
    province:[],//可选省份
    provinceChoose:[],
    eduArea:[],//可选教育领域
    name:"",
    sex:"",
    age:"",
    eduAreaChoose:"",
    next:false,
    result:false
})
const getChange=(state)=>{
    return ((state.get("name")!=="")&&(!state.get("sex")!=="")
    &&(state.get("age")!=="")&&(state.get("eduAreaChoose")!==""))
}
export default (state=defaultState,action)=>{
    switch (action.type){
        case SETEDUCATIONAREA:
            return state.set("eduArea",action.data)
        case SETPROVINCE:
            return state.merge({"province":action.data,"provinceChoose":action.defaultChoose})
        case actionTypes.CHANGENAME:
            return state.set("name",action.data)
        case actionTypes.CHANGESEX:
            return state.set("sex",action.data)
        case actionTypes.CHANGEAGE:
            return state.set("age",action.data)
        case actionTypes.CHANGEPROVINCECHOOSE:
            return state.set("provinceChoose",action.data)
        case actionTypes.CHANGEEDUAREA:
            return state.set("eduAreaChoose",action.data)
        case actionTypes.CHANGENEXT:
            return state.set("next",getChange(state))
        case actionTypes.STUDENTREGISTERRESULT:
            return state.set("result",action.data)
        default: 
            return state
    }
}