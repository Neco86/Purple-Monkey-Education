import { combineReducers }  from 'redux-immutable'
import { reducer as registerReducer } from '../pages/register/store'
import { reducer as groupRegisterReducer } from '../pages/groupRegister/store'
import { reducer as teacherRegisterReducer } from '../pages/teacherRegister/store'
import { reducer as studentRegisterReducer } from '../pages/studentRegister/store'
import { reducer as loginReducer } from '../pages/login/store'
import { reducer as home1Reducer } from '../pages/home/pages/homePage1Pages/store'
import { reducer as home1page1Reducer } from '../pages/home/pages/homePage1Pages/page1/store'
import { reducer as home1page2Reducer } from '../pages/home/pages/homePage1Pages/page2/store'
import { reducer as home1page3Reducer } from '../pages/home/pages/homePage1Pages/page3/store'
import { reducer as home1page4Reducer } from '../pages/home/pages/homePage1Pages/page4/store'
import { reducer as home1page4EditTeacherReducer } from '../pages/home/pages/homePage1Pages/page4/eidtTeacher/store'
import { reducer as home1page4EditGroupReducer } from '../pages/home/pages/homePage1Pages/page4/editGroup/store'

const reducer = combineReducers({
    register:registerReducer,
    groupRegister:groupRegisterReducer,
    teacherRegister:teacherRegisterReducer,
    studentRegister:studentRegisterReducer,
    login:loginReducer,
    h1:home1Reducer,
    h1p1:home1page1Reducer,
    h1p2:home1page2Reducer,
    h1p3:home1page3Reducer,
    h1p4:home1page4Reducer,
    h1p4EditTeacher:home1page4EditTeacherReducer,
    h1p4EditGroup:home1page4EditGroupReducer,
})
export default reducer