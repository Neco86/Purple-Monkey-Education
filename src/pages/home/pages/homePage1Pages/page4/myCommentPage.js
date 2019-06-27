import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { actionCreators } from './store'
import NavBar from '../../../../../common/components/NavBar'
import Alert from '../../../../../common/components/Alert'
import NoItem from '../../../components/NoItem'
import { MyCommentWrapper } from './style'

class MyComment extends Component{
render(){
        const { changePage,myComment,username,deleteComment,deleteCommentResult } =this.props;
         return(
            <MyCommentWrapper>
                <NavBar
                title="我的评论"
                func={()=>{changePage(0)}}
                />
                <div style={{height:"45px"}}/>
                {myComment.length===0?
                    <NoItem 
                    content={["暂无评论","快去发布第一条评论吧"]}
                    />:null}
                {myComment.map((item)=>(
                    <div className="item" key={item.key}>
                        <div className="top">
                            <div className="userPhoto">
                                <img src={item.userImg} alt=""/>
                            </div>
                            <div className="user">
                                <div>{item.username}</div>
                                <div className="time">{item.time}</div>
                            </div>
                            <div className="iconfont" onClick={()=>{deleteComment(item.key,myComment,username)}}>
                                &#xe63c;
                            </div>
                        </div>
                        <div className="middle">
                            {item.comment}
                        </div>
                        <div className="bottom">
                            <div className="left">
                                <img src={item.courseImg} alt=""/>
                            </div>
                            <div className="right">
                                <div className="title">
                                    {item.courseTitle}
                                </div>
                                <div className="source">
                                    <div>
                                        <img src={item.personPhoto} alt=""/>
                                        <span>{item.personName}</span>
                                    </div>
                                    <div className="time">
                                        {item.courseTime}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                {deleteCommentResult?
                    <Alert
                    icon="&#xe657;"
                    iconColor="#1afa29"
                    content={["删除成功"]}
                    func={()=>{this.props.finish()}}
                    />:null}
            </MyCommentWrapper>
        )
   
}
componentDidMount(){
    this.props.getMyComment(this.props.username)
}
}
const mapDispatchToProps=(dispatch)=>{
            return {
                changePage(data){
                    dispatch(actionCreators.changePage(data))
                },
                getMyComment(username){
                    dispatch(actionCreators.getMyComment(username))
                },
                deleteComment(key,comment,username){
                    var myComment=JSON.parse(JSON.stringify(comment))
                    for ( var i  in myComment )
                        if (myComment[i].key===key)
                            myComment.splice(i,1)
                    dispatch(actionCreators.deleteComment(key,myComment,username))
                },
                finish(){
                    dispatch(actionCreators.setDeleteCommentResult(false))
                }
            }
        }
const mapStateToProps=(state)=>{
    return {
        username:state.getIn(['login','username']),
        myComment:state.getIn(['h1p4','myComment']),
        deleteCommentResult:state.getIn(['h1p4','deleteCommentResult']),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(MyComment));