import {  put,takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import { actionTypes as registerActionTypes,actionCreators as registerActionCreators }   from '../pages/register/store'
import { actionTypes as groupRegisterActionTypes,actionCreators as groupRegisterActionCreators }   from '../pages/groupRegister/store'


function* getRegisterUserName(param) {
  try {
    const res=yield axios.get('/api/registerUserName', {
            params:{
                username : param.data
            }
        });
    const data=res.data
    const action=registerActionCreators.usernameIsDouble(data.data)
    yield put(action)
  }catch(e){
      console.log('json请求失败');
  }
}
function* getGroupRegisterEduArea() {
  try {
    const res=yield axios.get('/api/getEducationArea');
    const data=res.data
    const action=groupRegisterActionCreators.setEducationArea(data.data)
    yield put(action)
  }catch(e){
      console.log('json请求失败');
  }
}
function* getGroupNameBottom(param) {
  try {
    const res=yield axios.get('/api/groupNameBottom', {
            params:{
                username : param.data
            }
        });
    const data=res.data
    const action=groupRegisterActionCreators.setGroupNameBottom(data.data)
    yield put(action)
  }catch(e){
      console.log('json请求失败');
  }
}
function* getProvince() {
  try {
    const res=yield axios.get('/api/getProvince');
    const data=res.data
    const action=groupRegisterActionCreators.setProvince(data)
    yield put(action)
  }catch(e){
      console.log('json请求失败');
  }
}
function* groupRegisterFinish(data) {
  try {
    const param=data.data;
    const params={
        username : param.username,//用户名
        password:param.password,//密码
        phoneNumber:param.phoneNumber,//手机号
        select:param.select,//账号类型
        groupName:param.groupName,//机构名
        chooseEduArea:param.chooseEduArea,//教育领域
        place:param.place,//店面地址
        detailPlace:param.detailPlace,//详细地址
        tel:param.tel,//联系方式
        ageL:param.ageL,//适龄下限
        ageH:param.ageH,//适龄上线
        intro:param.intro//简介
    }
    const res=yield axios.post('/api/groupRegisterFinish', {
            params:params
        });
    const resData=res.data
    const action=groupRegisterActionCreators.groupRegisterResult(resData.data)
    yield put(action)
  }catch(e){
      console.log('json请求失败');
  }
}
function* mySaga() {
  yield takeEvery(registerActionTypes.CHANGEUSERNAME, getRegisterUserName);
  yield takeEvery(groupRegisterActionTypes.GETEDUCATIONAREA, getGroupRegisterEduArea);
  yield takeEvery(groupRegisterActionTypes.CHANGEGROUPNAME, getGroupNameBottom);
  yield takeEvery(groupRegisterActionTypes.GETPROVINCE, getProvince);
  yield takeEvery(groupRegisterActionTypes.GROUPREGISTERFINISH, groupRegisterFinish);
}

export default mySaga;
