import { combineReducers }  from 'redux-immutable'
import { reducer as registerReducer } from '../pages/register/store'

const reducer = combineReducers({
    register:registerReducer,
})
export default reducer