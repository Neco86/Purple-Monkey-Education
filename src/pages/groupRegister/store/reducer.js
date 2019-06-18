import * as actionTypes from './actionTypes'
const { fromJS } = require('immutable')
const defaultState=fromJS({
    groupName:"",
    groupNameBottom:false,
    educationArea:[],
    chooseEduArea:"",
    place:[],
    province:[],
    detailPlace:"",
    tel:"",
    ageL:"",
    ageH:"",
    next:false,
    intro:"",
    result:false
})
const getChange=(state)=>{
    return ((state.get("groupName")!=="")&&(!state.get("groupNameBottom"))
    &&(state.get("chooseEduArea")!=="")&&(state.get("detailPlace")!=="")
    &&(state.get("tel")!=="")&&(state.get("ageL")!=="")
    &&(state.get("ageH")!=="")&&(state.get("intro")!==""))
}
export default (state=defaultState,action)=>{
    switch (action.type){
        case actionTypes.SETEDUCATIONAREA:
            return state.set("educationArea",action.data)
        case actionTypes.CHANGEGROUPNAME:
            return state.merge({"groupName":action.data})
        case actionTypes.SETGROUPNAMEBOTTOM:
            return state.set("groupNameBottom",action.data)
        case actionTypes.CHANGEEDUAREA:
            return state.merge({"chooseEduArea":action.data})
        case actionTypes.CHANGEPLACE:
            return state.merge({"place":action.data})
        case actionTypes.SETPROVINCE:
            return state.merge({"province":action.data,"place":action.defaultChoose})
        case actionTypes.CHANGEDETAILPLACE:
            return state.merge({"detailPlace":action.data})
        case actionTypes.CHANGETEL:
            return state.merge({"tel":action.data})
        case actionTypes.CHANGEAGEL:
            return state.merge({"ageL":action.data})
        case actionTypes.CHANGEAGEH:
            return state.merge({"ageH":action.data})
        case actionTypes.CHANGEINTRO:
            return state.merge({"intro":action.data})
        case actionTypes.CHANGENEXT:
            return state.set('next',getChange(state))
        case actionTypes.GROUPREGISTERRESULT:
            return state.set('result',action.data)
        default: 
            return state
    }
}