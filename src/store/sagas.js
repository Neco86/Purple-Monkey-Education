import {  put,takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import { actionTypes as registerActionTypes,actionCreators as registerActionCreators }   from '../pages/register/store'
import { actionTypes as groupRegisterActionTypes,actionCreators as groupRegisterActionCreators }   from '../pages/groupRegister/store'
import { actionTypes as teacherRegisterActionTypes,actionCreators as teacherRegisterActionCreators }   from '../pages/teacherRegister/store'
import { actionTypes as studentRegisterActionTypes,actionCreators as studentRegisterActionCreators }   from '../pages/studentRegister/store'
import { actionTypes as loginActionTypes,actionCreators as loginActionCreators }   from '../pages/login/store'
import { actionTypes as h1p1ActionTypes,actionCreators as h1p1ActionCreators }   from '../pages/home/pages/homePage1Pages/page1/store'
import { actionTypes as h1p2ActionTypes,actionCreators as h1p2ActionCreators }   from '../pages/home/pages/homePage1Pages/page2/store'
import { actionTypes as h1p3ActionTypes,actionCreators as h1p3ActionCreators }   from '../pages/home/pages/homePage1Pages/page3/store'
import { actionTypes as h1p4ActionTypes,actionCreators as h1p4ActionCreators }   from '../pages/home/pages/homePage1Pages/page4/store'
import { actionTypes as h1p4EditGroupActionTypes,actionCreators as h1p4EditGroupActionCreators }   from '../pages/home/pages/homePage1Pages/page4/editGroup/store'
import { actionTypes as h1p4EditTeacherActionTypes,actionCreators as h1p4EditTeacherActionCreators }   from '../pages/home/pages/homePage1Pages/page4/eidtTeacher/store'

import settings from './settings';
const Url = settings.url;
function* getRegisterUserName(param) {
  try {
    console.log("get registerUserName")
    const res=yield axios.get(`${Url}/registerUserName/`, {
            params:{
                username : param.data
            }
        });
    const data=res.data
    const action=registerActionCreators.usernameIsDouble(data.data)
    yield put(action)
  }catch(e){
      console.log(`json请求失败`);
  }
}
function* getGroupRegisterEduArea() {
  try {
    console.log("get getEducationArea")
    const res=yield axios.get(`${Url}/getEducationArea/`);
    const data=res.data
    const action=groupRegisterActionCreators.setEducationArea(data.data)
    yield put(action)
  }catch(e){
      console.log(`json请求失败`);
  }
}
function* getGroupNameBottom(param) {
  try {
    console.log("get groupNameBottom")
    const res=yield axios.get(`${Url}/groupNameBottom/`, {
            params:{
                username : param.data
            }
        });
    const data=res.data
    const action=groupRegisterActionCreators.setGroupNameBottom(data.data)
    yield put(action)
  }catch(e){
      console.log(`json请求失败`);
  }
}
function* getProvince() {
  try {
    console.log("get getProvince")
    const res=yield axios.get(`${Url}/getProvince/`);
    const data=res.data
    const action=groupRegisterActionCreators.setProvince(data)
    yield put(action)
  }catch(e){
      console.log(`json请求失败`);
  }
}
function* groupRegisterFinish(data) {
  try {
    console.log("post groupRegisterFinish")
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
    const res=yield axios.post(`${Url}/groupRegisterFinish/`, {
            params:params
        });
    const resData=res.data
    const action=groupRegisterActionCreators.groupRegisterResult(resData.data)
    yield put(action)
  }catch(e){
      console.log(`json请求失败`);
  }
}
function* getTeacherRegisterPID(param) {
  try {
    console.log("get teacherID")
    const res=yield axios.get(`${Url}/teacherID/`, {
            params:{
                username : param.data
            }
        });
    const data=res.data
    const action=teacherRegisterActionCreators.setPersonIDBottom(data.data)
    yield put(action)
  }catch(e){
      console.log(`json请求失败`);
  }
}
function* getTeacherRegisterResult(data) {
  try {
    console.log("post teacherRegisterFinish")
    const param=data.data;
    const params={
        username : param.username,//用户名
        password:param.password,//密码
        phoneNumber:param.phoneNumber,//手机号
        select:param.select,//账号类型
        name:param.name,//性名
        sex:param.sex,//性别
        age:param.age,//年龄
        personID:param.personID,//身份证号
        chooseEduArea:param.chooseEduArea,//从教领域
        teacheAge:param.teacheAge,//从教年限
        ageL:param.ageL,//适龄下限
        ageH:param.ageH,//适龄上线
        tel:param.tel,//联系方式
        intro:param.intro//简介
    }
    const res=yield axios.post(`${Url}/teacherRegisterFinish/`, {
            params:params
        });
    const resData=res.data
    const action=teacherRegisterActionCreators.teacherRegisterResult(resData.data)
    yield put(action)
  }catch(e){
      console.log(`json请求失败`);
  }
}
function* getStudentRegisterResult(data) {
  try {
    console.log("post studentRegisterFinish")
    const param=data.data;
    const params={
        username : param.username,//用户名
        password:param.password,//密码
        phoneNumber:param.phoneNumber,//手机号
        select:param.select,//账号类型
        name:param.name,//孩子姓名
        sex:param.sex,//孩子性别
        age:param.age,//孩子年龄
        eduArea:param.eduAreaChoose,//详细地址
        place:param.provinceChoose//店面地址
    }
    const res=yield axios.post(`${Url}/studentRegisterFinish/`, {
            params:params
        });
    const resData=res.data
    const action=studentRegisterActionCreators.studentRegisterResult(resData.data)
    yield put(action)
  }catch(e){
      console.log(`json请求失败`);
  }
}
function* getLogin(param) {
  try {
    console.log("post login")
    const params={
        username : param.username,//用户名
        password:param.password,//密码
    }
    const res=yield axios.post(`${Url}/login/`, {
            params:params
        });
    const resData=res.data
    const action=loginActionCreators.loginResult(resData.data)
    yield put(action)
  }catch(e){
      console.log(`json请求失败`);
  }
}
function* getNewsList() {
  try {
    console.log("get getNewsList")
    const res=yield axios.get(`${Url}/getNewsList/`);
    const resData=res.data
    const action=h1p1ActionCreators.setNewsList(resData.data)
    yield put(action)
  }catch(e){
      console.log(`json请求失败`);
  }
}
function* getVideosList() {
  try {
    console.log("get getVideosList")
    const res=yield axios.get(`${Url}/getVideosList/`);
    const resData=res.data
    const action=h1p1ActionCreators.setVideosList(resData.data)
    yield put(action)
  }catch(e){
      console.log(`json请求失败`);
  }
}
function* getSearchList(param) {
  try {
    console.log("get getSearchList")
    const res=yield axios.get(`${Url}/getSearchList/`,{
            params:{
                search : param.data
            }
        });
    const resData=res.data
    const action=h1p1ActionCreators.setSearchList(resData.data)
    yield put(action)
  }catch(e){
      console.log(`json请求失败`);
  }
}
function* getSearchDetail(param) {
  try {
    console.log("get getSearchDetail")
    const res=yield axios.get(`${Url}/getSearchDetail/`,{
            params:{
                key : param.data
            }
        });
    const resData=res.data
    const action=h1p1ActionCreators.setSearchDetail(resData.data)
    yield put(action)
  }catch(e){
      console.log(`json请求失败`);
  }
}
function* getInformation(param) {
  try {
    console.log("get getInformation")
    const res=yield axios.get(`${Url}/getInformation/`,{
            params:{
                username : param.data
            }
        });
    const resData=res.data
    const action=h1p1ActionCreators.setInformation(resData.data)
    yield put(action)
  }catch(e){
      console.log(`json请求失败`);
  }
}
function* getNewsDetail(param) {
  try {
    console.log("get getNewsDetail")
    const res=yield axios.get(`${Url}/getNewsDetail/`,{
            params:{
                newsKey : param.data
            }
        });
    const resData=res.data
    const action=h1p1ActionCreators.setNewsDetail(resData.data)
    yield put(action)
  }catch(e){
      console.log(`json请求失败`);
  }
}
function* postComment(param) {
  try {
    console.log("post postComment")
    const res=yield axios.post(`${Url}/postComment/`,{
            params:{
                data : param.data,
                username:param.username,
                time:param.time,
                type:param.postType,
                key:param.key
            }
        });
    const resData=res.data
    const action=h1p1ActionCreators.postCommentResult(resData.data)
    yield put(action)
  }catch(e){
      console.log(`json请求失败`);
  }
}
function* getUserImg(param) {
  try {
    console.log("get getUserImg")
    const res=yield axios.get(`${Url}/getUserImg/`,{
            params:{
                username:param.data
            }
        });
    const resData=res.data
    const action=h1p1ActionCreators.setUserImg(resData.data)
    yield put(action)
  }catch(e){
      console.log(`json请求失败`);
  }
}
function* getVideosDetail(param) {
  try {
    console.log("get getVideosDetail")
    const res=yield axios.get(`${Url}/getVideosDetail/`,{
            params:{
                videosKey:param.data
            }
        });
    const resData=res.data
    const action=h1p1ActionCreators.setVideosDetail(resData.data)
    yield put(action)
  }catch(e){
      console.log(`json请求失败`);
  }
}
function* getTry(param) {
  try {
    console.log("get getTry")
    const res=yield axios.get(`${Url}/getTry/`,{
            params:{
                username:param.data
            }
        });
    const resData=res.data
    const action=h1p2ActionCreators.setTry(resData.data)
    yield put(action)
  }catch(e){
      console.log(`json请求失败`);
  }
}
function* agree(param) {
  try {
    console.log("post agree")
    const res=yield axios.post(`${Url}/agree/`,{
            params:{
                key1:param.key1,
                key2:param.key2
            }
        });
    const resData=res.data
    const action=h1p2ActionCreators.setAgreeResult(resData.data)
    yield put(action)
  }catch(e){
      console.log(`json请求失败`);
  }
}
function* disAgree(param) {
  try {
    console.log("post disAgree")
    const res=yield axios.post(`${Url}/disAgree/`,{
            params:{
                key1:param.key1,
                key2:param.key2
            }
        });
    const resData=res.data
    const action=h1p2ActionCreators.setDisAgreeResult(resData.data)
    yield put(action)
  }catch(e){
      console.log(`json请求失败`);
  }
}
function* getMyCourseList(param) {
  try {
    console.log("get getMyCourseList")
    const res=yield axios.get(`${Url}/getMyCourseList/`,{
            params:{
                username:param.data
            }
        });
    const resData=res.data
    const action=h1p3ActionCreators.setMyCourseList(resData.data)
    yield put(action)
  }catch(e){
      console.log(`json请求失败`);
  }
}
function* deleteCourse(param) {
  try {
    console.log("get deleteCourse")
    const res=yield axios.get(`${Url}/deleteCourse/`,{
            params:{
                key:param.key,
                username:param.username
            }
        });
    const resData=res.data
    const action=h1p3ActionCreators.deleteCourseResult(resData.data)
    yield put(action)
  }catch(e){
      console.log(`json请求失败`);
  }
}
function* addCourseFinish(data) {
  try {
    console.log("post addCourseFinish")
    var param=data.data;
    const res=yield axios.post(`${Url}/addCourseFinish/`,{
            params:{
                username:param.username,
                courseName:param.courseName,
                eduArea:param.eduArea,
                ageL:param.ageL,
                ageH:param.ageH,
                money:param.money,
                month:param.month,
                pic:param.pic,
                picValue:param.picValue
            }
        });
    const resData=res.data
    const action=h1p3ActionCreators.setAddCourseResult(resData.data)
    yield put(action)
  }catch(e){
      console.log(`json请求失败`);
  }
}
function* getList(param) {
  try {
    console.log("get getList")
    const res=yield axios.get(`${Url}/getList/`,{
            params:{
                username:param.data
            }
        });
    const resData=res.data
    const action=h1p3ActionCreators.setList(resData.data)
    yield put(action)
  }catch(e){
      console.log(`json请求失败`);
  }
}
function* getFixCourse(param) {
  try {
    console.log("get getFixCourse")
    const res=yield axios.get(`${Url}/getFixCourse/`,{
            params:{
                key:param.data
            }
        });
    const resData=res.data
    const action=h1p3ActionCreators.setFixCourse(resData.data)
    yield put(action)
  }catch(e){
      console.log(`json请求失败`);
  }
}
function* fixCourseFinish(data) {
  try {
    console.log("post fixCourseFinish");
    var param=data.data;
    const res=yield axios.post(`${Url}/fixCourseFinish/`,{
            params:{
                username:param.username,
                fixKey:param.fixKey,
                courseName:param.courseName,
                eduArea:param.eduArea,
                ageL:param.ageL,
                ageH:param.ageH,
                money:param.money,
                month:param.month,
                pic:param.pic,
                picValue:param.picValue
            }
        });
    const resData=res.data
    const action=h1p3ActionCreators.setFixCourseResult(resData.data)
    yield put(action)
  }catch(e){
      console.log(`json请求失败`);
  }
}
function* getPage3CourseDetail(param) {
  try {
    console.log("post getPage3CourseDetail")
    const res=yield axios.post(`${Url}/getPage3CourseDetail/`,{
            params:{
                key:param.data
            }
        });
    const resData=res.data
    const action=h1p3ActionCreators.setPage3CourseDetail(resData.data)
    yield put(action)
  }catch(e){
      console.log(`json请求失败`);
  }
}
function* deleteCourseDetail(param) {
  try {
    console.log("post deleteCourseDetail")
    const res=yield axios.post(`${Url}/deleteCourseDetail/`,{
            params:{
                key1:param.key1,
                key2:param.key2
            }
        });
    const resData=res.data
    const action=h1p3ActionCreators.setDeleteIResult(resData.data)
    yield put(action)
  }catch(e){
      console.log(`json请求失败`);
  }
}
function* changeCourseDetail(param) {
  try {
    console.log("post changeCourseDetail")
    const res=yield axios.post(`${Url}/changeCourseDetail/`,{
            params:{
                data:param.data,//修改之后的所有课程的内容
                key1:param.key1,
                key2:param.key2
            }
        });
    const resData=res.data
    const action=h1p3ActionCreators.setChangeIResult(resData.data)
    yield put(action)
  }catch(e){
      console.log(`json请求失败`);
  }
}
function* addCourse(param) {
  try {
    console.log("post addCourse")
    const res=yield axios.post(`${Url}/addCourse/`,{
            params:{
                data:param.data,//新增的小课
                key:param.key//小课隶属大课key
            }
        });
    const resData=res.data
    const action=h1p3ActionCreators.setAddCourseIResult(resData.data)
    yield put(action)
  }catch(e){
      console.log(`json请求失败`);
  }
}
function* getCourseTableList(param) {
  try {
    console.log("get getCourseTableList")
    const res=yield axios.get(`${Url}/getCourseTableList/`,{
            params:{
                username:param.data
            }
        });
    const resData=res.data
    const action=h1p3ActionCreators.setCourseTableList(resData.data)
    yield put(action)
  }catch(e){
      console.log(`json请求失败`);
  }
}
function* getTableList(param) {
  try {
    console.log("get getTableList")
    const res=yield axios.get(`${Url}/getTableList/`,{
            params:{
                username:param.data
            }
        });
    const resData=res.data
    const action=h1p3ActionCreators.setTableList(resData.data)
    yield put(action)
  }catch(e){
      console.log(`json请求失败`);
  }
}
function* getUserInfo(param) {
  try {
    console.log("get getUserInfo")
    const res=yield axios.get(`${Url}/getUserInfo/`,{
            params:{
                username:param.data
            }
        });
    const resData=res.data
    const action=h1p4ActionCreators.setUserInfo(resData.data)
    yield put(action)
  }catch(e){
      console.log(`json请求失败`);
  }
}
function* addNewPhoto(param) {
  try {
    console.log("post addNewPhoto")
    const res=yield axios.post(`${Url}/addNewPhoto/`,{
            params:{
                username:param.username,
                userImg:param.data
            }
        });
    const resData=res.data
    const action=h1p4ActionCreators.setNewPhotoResult(resData.data)
    yield put(action)
  }catch(e){
      console.log(`json请求失败`);
  }
}
function* getMoreInfo(param) {
  try {
    console.log("get getMoreInfo")
    const res=yield axios.get(`${Url}/getMoreInfo/`,{
            params:{
                username:param.data
            }
        });
    const resData=res.data
    const action=h1p4ActionCreators.setMoreInfo(resData.data)
    yield put(action)
  }catch(e){
      console.log(`json请求失败`);
  }
}
function* editGroupFnish(data) {
  try {
    console.log("post editGroupFnish")
    const param=data.data;
    const params={
        username : param.username,//用户名
        groupName:param.groupName,//性名
        chooseEduArea:param.chooseEduArea,//从教领域
        ageL:param.ageL,//适龄下限
        ageH:param.ageH,//适龄上线
        tel:param.tel,//联系方式
        place:param.place,//店面地址
        detailPlace:param.detailPlace//详细地址
    }
    const res=yield axios.post(`${Url}/editGroupFnish/`, {
            params:params
        });
    const resData=res.data
    const action=h1p4EditGroupActionCreators.setEditGroupResult(resData.data)
    yield put(action)
  }catch(e){
      console.log(`json请求失败`);
  }
}
function* eidtTeacherFinish(data) {
  try {
    console.log("post eidtTeacherFinish")
    const param=data.data;
    const params={
        username : param.username,//用户名

        name:param.name,//性名
        sex:param.sex,//性别
        age:param.age,//年龄
        personID:param.personID,//身份证号
        chooseEduArea:param.chooseEduArea,//从教领域
        teacheAge:param.teacheAge,//从教年限
        ageL:param.ageL,//适龄下限
        ageH:param.ageH,//适龄上线
        tel:param.tel//联系方式
    }
    const res=yield axios.post(`${Url}/eidtTeacherFinish/`, {
            params:params
        });
    const resData=res.data
    const action=h1p4EditTeacherActionCreators.setEditTecherResult(resData.data)
    yield put(action)
  }catch(e){
      console.log(`json请求失败`);
  }
}
function* getPubList(param) {
  try {
    console.log("get getPubList")
    const res=yield axios.get(`${Url}/getPubList/`,{
            params:{
                username:param.data
            }
        });
    const resData=res.data
    const action=h1p4ActionCreators.setPubList(resData.data)
    yield put(action)
  }catch(e){
      console.log(`json请求失败`);
  }
}
function* deleteItem(param) {
  try {
    console.log("get deleteItem")
    const res=yield axios.get(`${Url}/deleteItem/`,{
            params:{
                username:param.username,
                key:param.key,
                data:param.data//删完之后结果
            }
        });
    const resData=res.data
    const action=h1p4ActionCreators.setDeleteItemResult(resData.data)
    yield put(action)
  }catch(e){
      console.log(`json请求失败`);
  }
}
function* getPubDetail(param) {
  try {
    console.log("get getPubDetail")
    const res=yield axios.get(`${Url}/getPubDetail/`,{
            params:{
                username:param.username,
                key:param.key,
            }
        });
    const resData=res.data
    const action=h1p4ActionCreators.setPubDetail(resData.data)
    yield put(action)
  }catch(e){
      console.log(`json请求失败`);
  }
}
function* getPubTypeList(param) {
  try {
    console.log("get getPubTypeList")
    const res=yield axios.get(`${Url}/getPubTypeList/`);
    const resData=res.data
    const action=h1p4ActionCreators.setPubTypeList(resData.data)
    yield put(action)
  }catch(e){
      console.log(`json请求失败`);
  }
}
function* editPubFinish(p) {
  try {
    console.log("post editPubFinish")
    const param=p.data;
    const res=yield axios.post(`${Url}/editPubFinish/`,{
            params:{
                username:param.username,
                key:param.detailKey,
                title:param.title,
                type:param.pubType,
                content:param.content
            }
        });
    const resData=res.data
    const action=h1p4ActionCreators.setEditPubResult(resData.data)
    yield put(action)
  }catch(e){
      console.log(`json请求失败`);
  }
}
function* getMyComment(param) {
  try {
    console.log("get getMyComment")
    const res=yield axios.get(`${Url}/getMyComment/`,{
            params:{
                username:param.data
            }
        });
    const resData=res.data
    const action=h1p4ActionCreators.setMyComment(resData.data)
    yield put(action)
  }catch(e){
      console.log(`json请求失败`);
  }
}
function* deleteComment(param) {
  try {
    console.log("post deleteComment")
    const res=yield axios.post(`${Url}/deleteComment/`,{
            params:{
                username:param.username,
                key:param.key
            }
        });
    const resData=res.data
    const action=h1p4ActionCreators.setDeleteCommentResult(resData.data)
    yield put(action)
  }catch(e){
      console.log(`json请求失败`);
  }
}
function* mySaga() {
  yield takeEvery(registerActionTypes.CHANGEUSERNAME, getRegisterUserName);
  yield takeEvery(groupRegisterActionTypes.GETEDUCATIONAREA, getGroupRegisterEduArea);
  yield takeEvery(groupRegisterActionTypes.CHANGEGROUPNAME, getGroupNameBottom);
  yield takeEvery(groupRegisterActionTypes.GETPROVINCE, getProvince);
  yield takeEvery(groupRegisterActionTypes.GROUPREGISTERFINISH, groupRegisterFinish);
  yield takeEvery(teacherRegisterActionTypes.CHANGEPERSONID, getTeacherRegisterPID);
  yield takeEvery(teacherRegisterActionTypes.TEACHERREGISTERFINISH, getTeacherRegisterResult);
  yield takeEvery(studentRegisterActionTypes.STUDENTREGISTERFINISH, getStudentRegisterResult);
  yield takeEvery(loginActionTypes.LOGIN, getLogin);
  yield takeEvery(h1p1ActionTypes.GETNEWSLIST, getNewsList);
  yield takeEvery(h1p1ActionTypes.GETVIDEOSLIST, getVideosList);
  yield takeEvery(h1p1ActionTypes.GETSEARCH, getSearchList);
  yield takeEvery(h1p1ActionTypes.GETSEARCHDETAIL, getSearchDetail);
  yield takeEvery(h1p1ActionTypes.GETINFORMATION, getInformation);
  yield takeEvery(h1p1ActionTypes.GETNEWSDETAIL, getNewsDetail);
  yield takeEvery(h1p1ActionTypes.POSTCOMMENT, postComment);
  yield takeEvery(h1p1ActionTypes.GETUSERIMG, getUserImg);
  yield takeEvery(h1p1ActionTypes.GETVIDEODETAIL, getVideosDetail);
  yield takeEvery(h1p2ActionTypes.GETTRY, getTry);
  yield takeEvery(h1p2ActionTypes.AGREE, agree);
  yield takeEvery(h1p2ActionTypes.DISAGREE, disAgree);
  yield takeEvery(h1p3ActionTypes.GETCOURSELIST, getMyCourseList);
  yield takeEvery(h1p3ActionTypes.DELETECOURSE, deleteCourse);
  yield takeEvery(h1p3ActionTypes.ADDCOURSEFINISH, addCourseFinish);
  yield takeEvery(h1p3ActionTypes.GETLIST, getList);
  yield takeEvery(h1p3ActionTypes.GETFIXCOURSE, getFixCourse);
  yield takeEvery(h1p3ActionTypes.FIXCOURSEFINISH, fixCourseFinish);
  yield takeEvery(h1p3ActionTypes.GETPAGE3COURSEDETAIL, getPage3CourseDetail);
  yield takeEvery(h1p3ActionTypes.DELETECOURSEDETAIL, deleteCourseDetail);
  yield takeEvery(h1p3ActionTypes.CHANGECOURSEDETAIL, changeCourseDetail);
  yield takeEvery(h1p3ActionTypes.ADDCOURSE, addCourse);
  yield takeEvery(h1p3ActionTypes.GETCOURSETABLELIST, getCourseTableList);
  yield takeEvery(h1p3ActionTypes.GETTABLELIST, getTableList);
  yield takeEvery(h1p4ActionTypes.GETUSERINFO, getUserInfo);
  yield takeEvery(h1p4ActionTypes.ADDNEWPHOTO, addNewPhoto);
  yield takeEvery(h1p4ActionTypes.GETMOREINFO, getMoreInfo);
  yield takeEvery(h1p4EditGroupActionTypes.EDITGROUPFNISH, editGroupFnish);
  yield takeEvery(h1p4EditTeacherActionTypes.EDITTEACHERFINISH, eidtTeacherFinish);
  yield takeEvery(h1p4ActionTypes.GETPUBLISH, getPubList);
  yield takeEvery(h1p4ActionTypes.DELETEITEM, deleteItem);
  yield takeEvery(h1p4ActionTypes.GETPUBDETAIL, getPubDetail);
  yield takeEvery(h1p4ActionTypes.GETPUBTYPELIST, getPubTypeList);
  yield takeEvery(h1p4ActionTypes.EDITPUBFINISH, editPubFinish);
  yield takeEvery(h1p4ActionTypes.GETMYCOMMENT, getMyComment);
  yield takeEvery(h1p4ActionTypes.DELETECOMMENT, deleteComment);
}

export default mySaga;
