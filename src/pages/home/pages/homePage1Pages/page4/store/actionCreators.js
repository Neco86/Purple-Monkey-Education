import * as actionTypes from './actionTypes'
// // const { fromJS } = require('immutable')
export const getUserInfo = (data)=>({
    type:actionTypes.GETUSERINFO,
    data:data
})
export const setUserInfo = (data)=>({
    type:actionTypes.SETUSERINFO,
    data:data
})
export const setPhoto = (data)=>({
    type:actionTypes.SETPHOTO,
    data:data
})
export const setBigPhoto = (data)=>({
    type:actionTypes.SETBIGPHOTO,
    data:data
})
export const addNewPhoto = (data,username)=>({
    type:actionTypes.ADDNEWPHOTO,
    data:data,
    username:username,
    userInfo:{
        "username":username,
        "userImg":data
    }
})
export const setNewPhotoResult = (data)=>({
    type:actionTypes.SETNEWPHOTORESULT,
    data:data
})
export const changePage = (data)=>({
    type:actionTypes.CHANGEPAGE,
    data:data
})
export const getMoreInfo = (data)=>({
    type:actionTypes.GETMOREINFO,
    data:data
})
export const setMoreInfo = (data)=>({
    type:actionTypes.SETMOREINFO,
    data:data
})
export const getPubList = (data)=>({
    type:actionTypes.GETPUBLISH,
    data:data
})
export const setPubList = (data)=>({
    type:actionTypes.SETPUBLISH,
    data:data
})
export const deleteItem = (key,username,data)=>({
    type:actionTypes.DELETEITEM,
    data:data,//删除之后的
    key:key,//删除的key
    username:username
})
export const setDeleteItemResult = (data)=>({
    type:actionTypes.SETDELETEITEMRESULT,
    data:data
})
export const seeDetail = (key,username)=>({
    type:actionTypes.SEEDETAIL,
    data:key,
    username:username
})
export const getPubDetail = (username,key)=>({
    type:actionTypes.GETPUBDETAIL,
    key:key,
    username:username
})
export const setPubDetail = (data)=>({
    type:actionTypes.SETPUBDETAIL,
    data:data
})
export const setDefalutEditPubPage = ()=>({
    type:actionTypes.SETDEFAULTEDITPUBPAGE
})
export const getPubTypeList = ()=>({
    type:actionTypes.GETPUBTYPELIST
})
export const setPubTypeList = (data)=>({
    type:actionTypes.SETPUBTYPELIST,
    data:data
})
export const changeTitle = (data)=>({
    type:actionTypes.CHNAGETITLE,
    data:data
})
export const changePubType = (data)=>({
    type:actionTypes.CHANGEPUBTYPE,
    data:data
})
export const changeContent = (data)=>({
    type:actionTypes.CHANGECONTENT,
    data:data
})
export const changeNext = ()=>({
    type:actionTypes.CHANGENEXT
})
export const editPubFinish = (data)=>({
    type:actionTypes.EDITPUBFINISH,
    data:data
})
export const setEditPubResult = (data)=>({
    type:actionTypes.SETEDITPUBRESULT,
    data:data
})
export const clearAll = ()=>({
    type:actionTypes.CLEARALL
})
export const getMyComment = (data)=>({
    type:actionTypes.GETMYCOMMENT,
    data:data
})
export const setMyComment = (data)=>({
    type:actionTypes.SETMYCOMMENT,
    data:data
})
export const deleteComment = (key,myComment,username)=>({
    type:actionTypes.DELETECOMMENT,
    data:myComment,//删完之后的
    key:key,
    username:username
})
export const setDeleteCommentResult = (data)=>({
    type:actionTypes.SETDELETECOMMENTRESULT,
    data:data
})
export const setLogOut = (data)=>({
    type:actionTypes.SETLOGOUT,
    data:data
})
export const setFeedBack = (data)=>({
    type:actionTypes.SETFEEDBACK,
    data:data
})
