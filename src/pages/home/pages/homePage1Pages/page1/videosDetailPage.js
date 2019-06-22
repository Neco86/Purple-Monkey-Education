import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { actionCreators } from './store'
import NavBar from '../../../../../common/components/NavBar'
import { VideosDetailWrapper,SearchDetailWrapper,FullScreenWrapper } from './style'
import NoItem from '../../../components/NoItem'
import Alert from '../../../../../common/components/Alert'

class VideosDetail extends Component{
constructor(props) {
super(props);
this.state = {
  commenting: false
};
}
render(){
        const { videosDetailContent,changePage,videosTime,videosComments,
                inputComment,changeInputComment,postComment,username,userImg,
                postCommentResult,setCommentResult
         } = this.props;
         return(
            <VideosDetailWrapper>
                <NavBar
                title={videosDetailContent.title}
                func={()=>{changePage(0)}}
                />
                <div style={{height:"45px"}}/>
                <div className='video'>
                    <video 
                    src={videosDetailContent.videoSrc} 
                    autoPlay={true}
                    controls="controls"
                    />
                </div>
                <div className="publisher" style={{overflow:"hidden"}}>
                    <div style={{float:"left"}}>
                        <img src={videosDetailContent.userImg} alt=""/>
                        <span>{videosDetailContent.username}</span>
                    </div>
                    <div style={{float:"right"}}>
                        <span>{videosTime[0]}</span>
                        <span>{videosTime[1]}</span>
                    </div>                  
                </div>
                <SearchDetailWrapper>
                    <div className="itemWrapper">
                       <div style={{fontWeight:"500"}}>
                            {"全部评论 ("+videosComments.length+")"}
                       </div>
                       {(videosComments.length===0)?
                        <div style={{height:"180px"}}>
                            <NoItem content={["评论区空空如也","快来发表第一条评论吧"]}/>
                        </div>
                        :
                        <div style={{padding:"15px"}}>
                            {videosComments.map((item,index)=>
                                (<div key={index} style={{marginTop:"15px"}}>
                                    <img src={item.userImg} alt="" style={{width:"20px",height:"20px",borderRadius:"50%"}}/>
                                    <span style={{display:"inline-block",position:"relative",top:"-4px",left:"5px"}}>{item.username}</span>
                                    <span style={{float:"right",color:"#aaa"}}>{item.time[1]}</span>
                                    <span style={{float:"right",marginRight:"5px",color:"#aaa"}}>{item.time[0]}</span>
                                    <div style={{marginTop:"10px"}}>
                                        {item.comment}
                                    </div>
                                </div>)
                                )}
                        </div>
                        }
                        
                    </div>
                </SearchDetailWrapper>
                <div>
                    {this.state.commenting?
                        <div>
                            <FullScreenWrapper style={{backgroundColor:"black",opacity:"0.3"}} onClick={()=>{this.setState({commenting:false})}}/>
                            <div className="comment" onClick={(e)=>{e.stopPropagation()}} style={{zIndex:"1000"}}>
                                <textarea 
                                value={inputComment}
                                onChange={(e)=>{changeInputComment(e)}}
                                autoFocus={true}
                                />
                                <div className="cbottom">
                                    <div style={{float:"left"}} className="left iconfont">&#xe791;</div>
                                    <div style={{float:"right"}} className="right" onClick={()=>{postComment(inputComment,username,userImg,videosComments);this.setState({commenting:false})}}>发布</div>
                                </div>
                            </div>
                        </div>
                            :
                        <div className="bottom">
                            <input 
                            className="iconfont" 
                            placeholder="&#xe609; 我来说两句"
                            onFocus={()=>{this.setState({commenting:true})}}
                            value={inputComment}
                            onChange={(e)=>{changeInputComment(e)}}
                            />
                        </div>}
                        {postCommentResult?
                            <Alert 
                            icon="&#xe657;"
                            iconColor="#1afa29"
                            content={["评论成功"]}
                            func={()=>{setCommentResult(false)}}
                            />
                        :
                        null
                        }
                </div>
            </VideosDetailWrapper>
        )
   
}
componentDidMount(){
    this.props.getVideosDetail(this.props.videosClickKey)
    this.props.getUserImg(this.props.username)
}
}
const mapDispatchToProps=(dispatch)=>{
            return {
                getVideosDetail(key){
                    dispatch(actionCreators.getVideosDetail(key))
                },
                changePage(page){
                    dispatch(actionCreators.changePage(page))
                },
                changeInputComment(e){
                    dispatch(actionCreators.changeInputComment(e.target.value))
                },
                postComment(data,username,userImg,videosComments){
                    var date=new Date();
                    var timeStr1=`${date.getFullYear()}-${date.getMonth()+1}-${date.getDay()}`
                    var timeStr2=`${date.getHours()}:${date.getMinutes()}`;
                    const time=[timeStr1,timeStr2]
                    dispatch(actionCreators.postComment(data,username,time))
                    dispatch(actionCreators.changeVideosCommetns(videosComments,data,username,userImg,time))
                },
                getUserImg(username){
                    dispatch(actionCreators.getUserImg(username))
                },
                setCommentResult(data){
                    dispatch(actionCreators.setCommentResult(data))
                }
            }
        }
const mapStateToProps=(state)=>{
    return {
        username:state.getIn(['login','username']),


        videosClickKey:state.getIn(['h1p1','videosClickKey']),
        videosDetailContent:state.getIn(['h1p1','videosDetailContent']),
        videosTime:state.getIn(['h1p1','videosTime']),
        videosComments:state.getIn(['h1p1','videosComments']),
        inputComment:state.getIn(['h1p1','inputComment']),
        userImg:state.getIn(['h1p1','userImg']),
        postCommentResult:state.getIn(['h1p1','postCommentResult']),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(VideosDetail));