import { combineReducers }  from 'redux-immutable'
import { reducer as registerReducer } from '../pages/register/store'
import { reducer as groupRegisterReducer } from '../pages/groupRegister/store'

const reducer = combineReducers({
    register:registerReducer,
    groupRegister:groupRegisterReducer
})
export default reducer