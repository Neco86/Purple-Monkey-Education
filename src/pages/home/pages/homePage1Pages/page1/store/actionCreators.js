import * as actionTypes from './actionTypes'
// const { fromJS } = require('immutable')
export const getNewsList = ()=>({
    type:actionTypes.GETNEWSLIST,
})
export const setNewsList = (data)=>({
    type:actionTypes.SETNEWSLIST,
    data:data
})
export const getVideosList = ()=>({
    type:actionTypes.GETVIDEOSLIST,
})
export const setVideosList = (data)=>({
    type:actionTypes.SETVIDEOSLIST,
    data:data
})
export const changeSearch = (data)=>({
    type:actionTypes.CHANGESEARCH,
    data:data
})
export const changePage = (data)=>({
    type:actionTypes.CHANGEPAGE,
    data:data
})
export const changeTabPage = (data)=>({
    type:actionTypes.CHANGETABPAGE,
    data:data
})
export const getSearch = (data)=>({
    type:actionTypes.GETSEARCH,
    data:data
})
export const setSearchList = (data)=>({
    type:actionTypes.SETSEARCH,
    data:data
})
export const setSearchClickKey = (data)=>({
    type:actionTypes.SETSEARCHCLICKKEY,
    data:data
})
export const getSearchDetail = (data)=>({
    type:actionTypes.GETSEARCHDETAIL,
    data:data
})
export const setSearchDetail = (data)=>({
    type:actionTypes.SETSEARCHDETAIL,
    data:data,
    comments:data.comments,
    dir:data.dir
})
export const getInformation = (data)=>({
    type:actionTypes.GETINFORMATION,
    data:data
})
export const setInformation = (data)=>({
    type:actionTypes.SETINFORMATION,
    data:data,
    course:data.course,
    publish:data.publish
})
export const setNewsClickKey = (key)=>({
    type:actionTypes.SETNEWSCLICKKEY,
    data:key,
})
export const getNewsDetail = (key)=>({
    type:actionTypes.GETNEWSDETAIL,
    data:key,
})
export const setNewsDetail = (data)=>({
    type:actionTypes.SETNEWSDETAIL,
    data:data,
    time:data.time,
    comments:data.comments
})
export const changeInputComment = (data)=>({
    type:actionTypes.CHANGEINPUTCOMMENT,
    data:data
})
export const postComment = (data,username,time)=>({
    type:actionTypes.POSTCOMMENT,
    data:data,
    username:username,
    time:time
})
export const postCommentResult = (data)=>({
    type:actionTypes.POSTCOMMENTRESULT,
    data:data,
})
export const getUserImg = (data)=>({
    type:actionTypes.GETUSERIMG,
    data:data,
})
export const setUserImg = (data)=>({
    type:actionTypes.SETUSERIMG,
    data:data,
})
export const changeNewsCommetns = (newsComments,data,username,userImg,time)=>({
    type:actionTypes.CHANGENEWSCOMMENTS,
    data:[...newsComments,{"username":username,"userImg":userImg,"time":time,"comment":data}]
})
export const setCommentResult = (data)=>({
    type:actionTypes.SETCOMMENTRESULT,
    data:data,
})
export const setVideosClickKey = (data)=>({
    type:actionTypes.SETVIDEOSCLICKKEY,
    data:data,
})
export const getVideosDetail = (data)=>({
    type:actionTypes.GETVIDEODETAIL,
    data:data,
})
export const setVideosDetail = (data)=>({
    type:actionTypes.SETVIDEODETAIL,
    data:data,
    time:data.time,
    comments:data.comments
})
export const changeVideosCommetns = (newsComments,data,username,userImg,time)=>({
    type:actionTypes.CHANGEVIDEOSCOMMENTS,
    data:[...newsComments,{"username":username,"userImg":userImg,"time":time,"comment":data}]
})