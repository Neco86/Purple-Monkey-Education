// import {  put,takeEvery } from 'redux-saga/effects'
// import axios from 'axios'
// import { actionTypes as loginActionTypes,actionCreators as loginActionCreators }   from '../pages/login/store'

// function* getLogin(param) {
  // try {
  //   const res=yield axios.get('/api/login.json?username='+param.username+'&password='+param.password);
  //   const data=res.data
  //   const action=loginActionCreators.loginAction(data.data)
  //   yield put(action)
  // }catch(e){
  //     console.log('json请求失败');
  // }
// }

function* mySaga() {
  // yield takeEvery(loginActionTypes.LOGIN, getLogin);
}

export default mySaga;
