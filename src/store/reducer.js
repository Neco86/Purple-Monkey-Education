import { combineReducers }  from 'redux-immutable'
import { reducer as registerReducer } from '../pages/register/store'
import { reducer as groupRegisterReducer } from '../pages/groupRegister/store'
import { reducer as teacherRegisterReducer } from '../pages/teacherRegister/store'

const reducer = combineReducers({
    register:registerReducer,
    groupRegister:groupRegisterReducer,
    teacherRegister:teacherRegisterReducer
})
export default reducer