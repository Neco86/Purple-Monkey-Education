import * as actionTypes from './actionTypes'
const { fromJS } = require('immutable')
const defaultState=fromJS({
    newsList:[],
    videosList:[]
})

export default (state=defaultState,action)=>{
    switch (action.type){
        case actionTypes.SETNEWSLIST:
            return state.set("newsList",action.data)
        case actionTypes.SETVIDEOSLIST:
            return state.set("videosList",action.data)
        default: 
            return state
    }
}