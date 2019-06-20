import * as actionTypes from './actionTypes'
const { fromJS } = require('immutable')
const defaultState=fromJS({
    selectedTab:"tab1"
})

export default (state=defaultState,action)=>{
    switch (action.type){
        case actionTypes.CHANGETAB1:
            return state.set("selectedTab","tab1")
        case actionTypes.CHANGETAB2:
            return state.set("selectedTab","tab2")
        case actionTypes.CHANGETAB3:
            return state.set("selectedTab","tab3")
        case actionTypes.CHANGETAB4:
            return state.set("selectedTab","tab4")
        default: 
            return state
    }
}