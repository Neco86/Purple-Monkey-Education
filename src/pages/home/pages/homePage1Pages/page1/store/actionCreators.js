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