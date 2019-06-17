import { combineReducers }  from 'redux-immutable'
import { reducer as entryReducer } from '../pages/entry/store'

const reducer = combineReducers({
    entry:entryReducer,
})
export default reducer