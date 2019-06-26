import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import NoItem from '../../../components/NoItem'
import { MyCourseWrapper,CourseItemWrapper } from './style'
import { actionCreators } from './store'


class MyCourse extends Component{
render(){ 
        const { myCourseList,deleteCourse,fixCourse,seeCourse } = this.props;
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
                            <span className="iconfont detail" onClick={()=>{seeCourse(item.key)}}>&#xe60f;查看详细信息</span>
                            <span className="iconfont fix" onClick={()=>{fixCourse(item.key)}}>&#xe609;修改课程信息</span>
                            <span className="iconfont delete" onClick={()=>{deleteCourse(item.key,myCourseList)}}>&#xe63c;删除课程</span>
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
    this.props.getMyCourseList()
}
}
const mapDispatchToProps=(dispatch)=>{
            return {
                getMyCourseList(){
                    dispatch(actionCreators.getMyCourseList())
                },
                deleteCourse(key,course){
                    var myCourseList=JSON.parse(JSON.stringify(course))
                    for (var i in myCourseList)
                        if (myCourseList[i].key===key)
                            {
                                myCourseList.splice(i,1)
                            }
                    dispatch(actionCreators.deleteCourse(key,myCourseList))
                },
                seeCourse(key){
                    dispatch(actionCreators.setSeeKey(key))
                    dispatch(actionCreators.changePage(3))
                },
                fixCourse(key){
                    dispatch(actionCreators.setFixKey(key))
                    dispatch(actionCreators.changePage(2))
                }
            }
        }
const mapStateToProps=(state)=>{
    return {
        myCourseList:state.getIn(['h1p3','myCourseList'])
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(MyCourse));