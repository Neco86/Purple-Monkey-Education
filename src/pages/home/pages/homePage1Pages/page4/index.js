import React,{ Component,Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { actionCreators } from './store'
import { MyPageWrapper,FullScreenWrapper,AlertWrapper,AlertBg } from './style'
import Alert from '../../../../../common/components/Alert'
import MyInfo from './myInfoPage'
import EditTeacher from './eidtTeacher'
import EditGroup from './editGroup'
import Publish from './publishPage'
import PubDetial from './pubDetail'
import EditPub from './editPubPage'
import AddPub from './addPubPage'
import MyComment from './myCommentPage'
import Setting from './settingPage'
import About from './aboutPage'

class HomePage1Page4 extends Component{
render(){
        const { userInfo,page,photo,setPhoto,bigPhoto,setBigPhoto,
            addNewPhoto,addPhotoResult,setNewPhotoResult,changePage,
            feedBack,setFeedBack
         } = this.props;
         return(
            <MyPageWrapper>
                {page===0?
                <Fragment>
                    <div className="user">
                        <img src={userInfo.userImg} alt="" onClick={()=>{setPhoto(true)}}/>
                        <div className="username">{userInfo.username}</div>
                        <div 
                        className="arrow iconfont"
                        onClick={()=>{changePage(1)}}
                        >
                            &#xe646;
                        </div>
                    </div>
                    <div className="func">
                        <div className="item">
                            <div className='iconfont' onClick={()=>{changePage(4)}}>&#xe734;</div>
                            <div className="bottom" onClick={()=>{changePage(4)}}>公告</div>
                        </div>
                        <div className="item">
                            <div 
                            className='iconfont' 
                            style={{fontSize:"20px",position:"relative",top:"4px",marginBottom:"10px"}}
                            onClick={()=>{changePage(8)}}
                            >&#xe607;</div>
                            <div className="bottom" onClick={()=>{changePage(8)}}>评论</div>
                        </div>
                        <div className="item">
                            <div className='iconfont' onClick={()=>{changePage(9)}}>&#xe60b;</div>
                            <div className="bottom" onClick={()=>{changePage(9)}}>设置</div>
                        </div>
                    </div>
                    <div className="feedback" onClick={()=>{setFeedBack(true)}}>
                        意见反馈
                        <div className="arrow iconfont">
                            &#xe646;
                        </div>
                    </div>
                    <div className="about" onClick={()=>{changePage(10)}}>
                        关于紫猴
                        <div className="arrow iconfont">
                            &#xe646;
                        </div>
                    </div>
                    <div className="icon">
                        <div className="iconfont">
                            &#xe606;
                        </div>
                    </div>
                    {photo?
                    <AlertWrapper>
                        <AlertBg onClick={()=>{setPhoto(false)}}/>
                        <div className="alert">
                            <div className="button"
                            style={{margin:"20px 0"}}
                            onClick={()=>{setPhoto(false);setBigPhoto(true)}}
                            >
                                查看大图
                            </div>
                            <label 
                            className="button"
                            htmlFor="newPhoto"
                            >
                                上传新头像
                                <input
                                id="newPhoto"
                                type="file"
                                style={{height:"0",width:"0",visibility: "hidden"}}
                                onChange={(e)=>{addNewPhoto(e,userInfo.username);setPhoto(false)}}
                                />
                            </label>
                        </div>
                    </AlertWrapper>
                        :null}
                    {bigPhoto?
                    <AlertWrapper>
                        <AlertBg onClick={()=>{ setBigPhoto(false);setPhoto(true)}}/>
                        <div className="bigPhoto">
                            <img src={userInfo.userImg} alt=""/>
                        </div>
                    </AlertWrapper>
                        :null}
                    {addPhotoResult?
                        <Alert
                        icon="&#xe657;"
                        iconColor="#1afa29"
                        func={()=>{setNewPhotoResult(false)}}
                        content={["头像上传成功"]}
                        />:null}
                    {feedBack?
                        <Alert
                        icon="&#xe602;"
                        iconColor="#f4ea2a"
                        func={()=>{setFeedBack(false)}}
                        content={["本应用不接受","任何形式的意见反馈"]}
                        />:null}
                </Fragment>
                :null}
                {page===1?<FullScreenWrapper><MyInfo/></FullScreenWrapper>:null}
                {page===2?<FullScreenWrapper><EditGroup/></FullScreenWrapper>:null}
                {page===3?<FullScreenWrapper><EditTeacher/></FullScreenWrapper>:null}
                {page===4?<FullScreenWrapper><Publish/></FullScreenWrapper>:null}
                {page===5?<FullScreenWrapper><PubDetial/></FullScreenWrapper>:null}
                {page===6?<FullScreenWrapper><EditPub/></FullScreenWrapper>:null}
                {page===7?<FullScreenWrapper><AddPub/></FullScreenWrapper>:null}
                {page===8?<FullScreenWrapper><MyComment/></FullScreenWrapper>:null}
                {page===9?<FullScreenWrapper><Setting/></FullScreenWrapper>:null}
                {page===10?<FullScreenWrapper><About/></FullScreenWrapper>:null}
            </MyPageWrapper>
        )
   
}
componentDidMount(){
    this.props.getUserInfo(this.props.username)
}
}
const mapDispatchToProps=(dispatch)=>{
            return {
                getUserInfo(username){
                    dispatch(actionCreators.getUserInfo(username))
                },
                setPhoto(data){
                    dispatch(actionCreators.setPhoto(data))
                },
                setBigPhoto(data){
                    dispatch(actionCreators.setBigPhoto(data))
                },
                addNewPhoto(e,username){
                    var reader = new FileReader();
                    reader.readAsDataURL(e.target.files[0]) 
                    reader.onload = function(e) {
                        dispatch(actionCreators.addNewPhoto(e.target.result,username))
                    }
                },
                setNewPhotoResult(data){
                    dispatch(actionCreators.setNewPhotoResult(data))
                    dispatch(actionCreators.setPhoto(true))
                },
                changePage(data){
                    dispatch(actionCreators.changePage(data))
                },
                setFeedBack(data){
                    dispatch(actionCreators.setFeedBack(data))
                }
            }
        }
const mapStateToProps=(state)=>{
    return {
        username:state.getIn(['login','username']),
        userInfo:state.getIn(['h1p4','userInfo']),
        page:state.getIn(['h1p4','page']),
        photo:state.getIn(['h1p4','photo']),
        bigPhoto:state.getIn(['h1p4','bigPhoto']),
        addPhotoResult:state.getIn(['h1p4','addPhotoResult']),
        feedBack:state.getIn(['h1p4','feedBack']),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(HomePage1Page4));