import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { actionCreators } from './store'
import { CourseTableWrapper } from './style'
import NoItem from '../../../components/NoItem'

class CourseTable extends Component{
render(){
        const { courseTableList,seeCourse,changePage } = this.props;
        var myDate=new Date()
         return(
            <CourseTableWrapper>
                <div className="top">
                    <div className="left">
                        <div className="today">今天 (<span>{myDate.getMonth()+1}</span>月<span>{myDate.getDate()}</span>日)</div>
                        <div className="total">共有<span> {courseTableList.length} </span>节课</div>
                    </div>
                    <div className="right">
                        <div className="iconfont" onClick={()=>{changePage(4)}}>
                            &#xe615;查看日历
                        </div>
                    </div>
                </div>
                {courseTableList.map((item)=>(
                <div className="item" key={item.key}>
                    <div className="itemTop">
                        <img src={item.imgSrc} alt=""/>
                        <div className="itemRight">
                            <div className="title">{item.title}</div>
                            <div className="eudArea">{item.eduArea}</div>
                            <div className="iconfont detail" onClick={()=>seeCourse(item.key)}>&#xe60f; 查看详细信息</div>
                        </div>
                    </div>
                    <div className="itemBottom">
                        <div>上课时间: {item.time}</div>
                        <div>上课地点: {item.place}</div>
                        <div>任课教师: {item.teacher}</div>
                    </div>
                </div>

                    ))}
                
                {courseTableList.size===0||courseTableList.length===0?
                <NoItem content={["今天没课","快去找点事做吧"]}/>:null
                }
            </CourseTableWrapper>
        )
   
}
componentDidMount(){
    this.props.getCourseTableList(this.props.username)
}
}
const mapDispatchToProps=(dispatch)=>{
            return {
                getCourseTableList(username){
                    dispatch(actionCreators.getCourseTableList())
                },
                seeCourse(key){
                    dispatch(actionCreators.setSeeKey(key))
                    dispatch(actionCreators.changePage(3))
                },
                changePage(page){
                    dispatch(actionCreators.changePage(page))
                }
            }
        }
const mapStateToProps=(state)=>{
    return {
        username:state.getIn(['login','username']),
        courseTableList:state.getIn(['h1p3','courseTableList']),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(CourseTable));