import * as actionTypes from './actionTypes'
import { HANDLELOGOUT } from '../../../../../login/store/actionTypes'
const { fromJS } = require('immutable')
const defaultState=fromJS({
    userInfo:{},
    page:0,//默认零
    photo:false,
    bigPhoto:false,
    addPhotoResult:false,
    feedBack:false,
    //1.我的信息
    moreInfo:{},
    //2.教育机构编辑
    //3.个人教师编辑
    //4.所有公告
    pubList:[],
    deleteResult:false,
    //5.查看某个公告
    detailKey:"",
    detail:{},
    //6.编辑某个公告
    pubTypeList:[],
    title:"",
    pubType:"",
    content:"",
    next:false,
    editResult:false,
    //7.发布公告
    //8.我的评论
    myComment:[],
    deleteCommentResult:false,
    //9.设置
    logOut:false
    //10.关于
})
const getNext=(state)=>{
    return ((state.get("title")!=="")&&(!state.get("pubType")!=="")
    &&(state.get("content")!==""))
}
export default (state=defaultState,action)=>{
    switch (action.type){
        case actionTypes.SETUSERINFO:
            return state.set("userInfo",action.data)
        case actionTypes.SETPHOTO:
            return state.set("photo",action.data)
        case actionTypes.SETBIGPHOTO:
            return state.set("bigPhoto",action.data)
        case actionTypes.ADDNEWPHOTO:
            return state.set("userInfo",action.userInfo)
        case actionTypes.SETNEWPHOTORESULT:
            return state.set("addPhotoResult",action.data)
        case actionTypes.CHANGEPAGE:
            return state.set("page",action.data)
        case actionTypes.SETMOREINFO:
            return state.set("moreInfo",action.data)
        case actionTypes.SETPUBLISH:
            return state.set("pubList",action.data)
        case actionTypes.DELETEITEM:
            return state.set("pubList",action.data)
        case actionTypes.SETDELETEITEMRESULT:
            return state.set("deleteResult",action.data)
        case actionTypes.SEEDETAIL:
            return state.set("detailKey",action.data)
        case actionTypes.SETPUBDETAIL:
            return state.set("detail",action.data)
        case actionTypes.SETDEFAULTEDITPUBPAGE:
            const data=state.get("detail");
            return state.merge({"title":data.title,"pubType":data.type,"content":data.content})
        case actionTypes.SETPUBTYPELIST:
            return state.set("pubTypeList",action.data)
        case actionTypes.CHNAGETITLE:
            return state.set("title",action.data)
        case actionTypes.CHANGEPUBTYPE:
            return state.set("pubType",action.data)
        case actionTypes.CHANGECONTENT:
            return state.set("content",action.data)
        case actionTypes.CHANGENEXT:
            return state.set("next",getNext(state))
        case actionTypes.SETEDITPUBRESULT:
            return state.set("editResult",action.data)
        case actionTypes.CLEARALL:
            return state.merge({"title":"","pubType":"","content":""})
        case actionTypes.SETMYCOMMENT:
            return state.set("myComment",action.data)
        case actionTypes.DELETECOMMENT:
            return state.set("myComment",action.data)
        case actionTypes.SETDELETECOMMENTRESULT:
            return state.set("deleteCommentResult",action.data)
        case actionTypes.SETLOGOUT:
            return state.set("logOut",action.data)
        case actionTypes.SETFEEDBACK:
            return state.set("feedBack",action.data)
        case HANDLELOGOUT:
            return state.set("page",0)
        default: 
            return state
    }
}