// import * as actionTypes from './actionTypes'
const { fromJS } = require('immutable')
const defaultState=fromJS({
    
})

export default (state=defaultState,action)=>{
    switch (action.type){
        default: 
            return state
    }
}