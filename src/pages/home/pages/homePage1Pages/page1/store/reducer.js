import * as actionTypes from './actionTypes'
const { fromJS } = require('immutable')
const defaultState=fromJS({
    newsList:[],
    videosList:[],
    search:"",
    userImg:"",//用户头像
    tabPage:0,//0默认,其他为了方便调试:0新闻 1视频
    page:0,//0默认
    //其他为了方便调试
    //1搜索,2搜索-详情,3搜索-详情-资料
    //4新闻详情
    //5视频详情
    //搜索
    searchResut:[],//搜索结果
    searchClickKey:"",//搜索结果点击的key
    searchDetail:{},//搜索结果详情
    comments:[],//searchDetail的comments
    dir:[],//searchDetail的dir
    //新闻
    information:{},
    course:[],//information的course
    publish:[],//information的publish
    newsClickKey:"",//主页新闻点击的key
    newsDetail:[],//新闻详情
    newsComments:[],//newsDetai的Comments
    time:[],//newsDetail的time
    inputComment:"",//新闻详情发布 评论
    postCommentResult:false,
    //视频
    videosClickKey:"",//主页视频点击的key
    videosDetailContent:{},
    videosTime:[],//videosDetailContent的time
    videosComments:[],//videosDetailContent的comments
})

export default (state=defaultState,action)=>{
    switch (action.type){
        case actionTypes.SETNEWSLIST:
            return state.set("newsList",action.data)
        case actionTypes.SETVIDEOSLIST:
            return state.set("videosList",action.data)
        case actionTypes.CHANGESEARCH:
            return state.set("search",action.data)
        case actionTypes.CHANGEPAGE:
            return state.set("page",action.data)
        case actionTypes.CHANGETABPAGE:
            return state.set("tabPage",action.data)
        case actionTypes.SETSEARCH:
            return state.set("searchResut",action.data)
        case actionTypes.SETSEARCHCLICKKEY:
            return state.set("searchClickKey",action.data)
        case actionTypes.SETSEARCHDETAIL:
            return state.merge({"searchDetail":action.data,"comments":action.comments,"dir":action.dir})
        case actionTypes.SETINFORMATION:
            return state.merge({"information":action.data,"course":action.course,"publish":action.publish})
        case actionTypes.SETNEWSCLICKKEY:
            return state.set("newsClickKey",action.data)
        case actionTypes.SETNEWSDETAIL:
            return state.merge({"newsDetail":action.data,"newsComments":action.comments,"time":action.time})
        case actionTypes.CHANGEINPUTCOMMENT:
            return state.set("inputComment",action.data)
        case actionTypes.POSTCOMMENT:
            return state.merge({"inputComment":""})
        case actionTypes.POSTCOMMENTRESULT:
            return state.merge({"postCommentResult":action.data})
        case actionTypes.SETUSERIMG:
            return state.set("userImg",action.data)
        case actionTypes.CHANGENEWSCOMMENTS:
            return state.set("newsComments",action.data)
        case actionTypes.SETCOMMENTRESULT:
            return state.set("postCommentResult",action.data)
        case actionTypes.SETVIDEOSCLICKKEY:
            return state.set("videosClickKey",action.data)
        case actionTypes.SETVIDEODETAIL:
            return state.merge({"videosDetailContent":action.data,"videosTime":action.time,"videosComments":action.comments})
        case actionTypes.CHANGEVIDEOSCOMMENTS:
            return state.set("videosComments",action.data)
        default: 
            return state
    }
}