import {  put,takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import { actionTypes as registerActionTypes,actionCreators as registerActionCreators }   from '../pages/register/store'

function* getRegisterUserName(param) {
  try {
    const res=yield axios.get('/api/registerUserName.json?username='+param.data);
    const data=res.data
    const action=registerActionCreators.usernameIsDouble(data.data)
    yield put(action)
  }catch(e){
      console.log('json请求失败');
  }
}

function* mySaga() {
  yield takeEvery(registerActionTypes.CHANGEUSERNAME, getRegisterUserName);
}

export default mySaga;
