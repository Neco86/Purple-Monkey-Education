import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import NoItem from '../../../components/NoItem'
import { MyCourseWrapper,CourseItemWrapper } from './style'
import { actionCreators } from './store'


class MyCourse extends Component{
render(){ 
        const { myCourseList,deleteCourse,fixCourse,seeCourse,username } = this.props;
         return(
            <MyCourseWrapper>
                {myCourseList.map((item,index)=>(
                    <CourseItemWrapper key={item.key}>
                        <div className="top">
                            <img src={item.imgSrc} alt=""/>
                            <div className="right">
                                <div className="title">{item.title}</div>
                                <div className="type">{item.type}</div>
                                <div className="time">下次课: {item.time}</div>
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="item">
                                <span className="iconfont detail" onClick={()=>{seeCourse(item.key)}}>&#xe60f;查看信息</span>
                            </div>
                            <div className="item">
                                <span className="iconfont fix" onClick={()=>{fixCourse(item.key)}}>&#xe609;修改课程</span>
                            </div>
                            <div className="item">
                                <span className="iconfont delete" onClick={()=>{deleteCourse(item.key,myCourseList,username)}}>&#xe63c;删除课程</span>
                            </div>
                        </div>
                    </CourseItemWrapper>
                    ))}
                {(myCourseList.size===0||myCourseList.length===0)?
                <div style={{overflow:"hidden",paddingTop:"100px"}}> 
                    <NoItem content={["暂无课程","快来发布你的第一门课程吧"]}/>
                </div>
                :null}
            </MyCourseWrapper>
        )
}
componentDidMount(){
    this.props.getMyCourseList(this.props.username)
}
}
const mapDispatchToProps=(dispatch)=>{
            return {
                getMyCourseList(username){
                    dispatch(actionCreators.getMyCourseList(username))
                },
                seeCourse(key){
                    dispatch(actionCreators.setSeeKey(key));
                    dispatch(actionCreators.changeITab(0));
                    dispatch(actionCreators.changePage(3));
                },
                fixCourse(key){
                    dispatch(actionCreators.setFixKey(key));
                    dispatch(actionCreators.changePage(2));
                },
                deleteCourse(key,course,username){
                    var myCourseList=JSON.parse(JSON.stringify(course));
                    for (var i in myCourseList){
                        if (myCourseList[i].key===key)
                            {
                                myCourseList.splice(i,1);
                            }
                    }
                    dispatch(actionCreators.deleteCourse(key,myCourseList,username))
                }
            }
        }
const mapStateToProps=(state)=>{
    return {
        username:state.getIn(['login','username']),
        myCourseList:state.getIn(['h1p3','myCourseList'])
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(MyCourse));