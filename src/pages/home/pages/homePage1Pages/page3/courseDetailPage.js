import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { actionCreators } from './store'
import NavBar from '../../../../../common/components/NavBar'
import { Tabs,  Badge } from 'antd-mobile'
import { CourseDetailWrapper } from './style'
import CourseItem from './CourseItem'
import Alert from '../../../../../common/components/Alert'

class CourseDetail extends Component{
render(){
        const { changePage,courseDetail,iTabPage,changeITab,seeKey,deleteIResult,
            setDeleteIResult,changeIResult,setChangeIResult,addIResult,setAddCourseIResult
         } = this.props;
        const height = courseDetail.length*50+50;
        let tabs=courseDetail.map((item)=>({"title":<Badge>{item.courseName}</Badge>})).concat([{"title":<Badge>添加</Badge>}])
         return(
            <CourseDetailWrapper height={height+"px"}>
                <NavBar title="课程详细信息" func={()=>{changePage(0)}}/>
                <div style={{height:"45px"}}/>
                <div className="tab">
                    <div className="left"/>
                    <Tabs tabs={tabs}
                      initialPage={iTabPage}
                      onChange={(tab, index) => {changeITab(index,courseDetail)}}
                      tabBarPosition="left"
                      tabDirection="vertical"
                    >
                    {courseDetail.map((item,index)=>(
                            <CourseItem  
                            key={item.key} 
                            type="type1"
                            delete={()=>{this.props.delete(index,courseDetail,seeKey)}}
                            change={()=>{this.props.change(index,courseDetail,seeKey,this.props)}}
                            />
                            )).concat(<CourseItem key="last" type="type2" add={()=>{this.props.addCourse(this.props)}}/>)}
                    </Tabs>
                </div>
                {deleteIResult?<Alert
                    icon="&#xe657;"
                    iconColor="#1afa29"
                    content={["课程删除成功"]}
                    func={()=>{setDeleteIResult(false)}}
                    />:null}
                {changeIResult?<Alert
                    icon="&#xe657;"
                    iconColor="#1afa29"
                    content={["课程修改成功"]}
                    func={()=>{setChangeIResult(false)}}
                    />:null}
                {addIResult?<Alert
                    icon="&#xe657;"
                    iconColor="#1afa29"
                    content={["课程增加成功"]}
                    func={()=>{setAddCourseIResult(false)}}
                    />:null} 
            </CourseDetailWrapper>
        )
   
}
componentDidMount(){
    this.props.getPage3CourseDetail(this.props.seeKey)//同时设置第一页
}
}
const mapDispatchToProps=(dispatch)=>{
            return {
                changePage(page){
                    dispatch(actionCreators.changePage(page))
                },
                getPage3CourseDetail(key){
                    dispatch(actionCreators.getPage3CourseDetail(key))
                },
                changeITab(index,courseDetail){
                    dispatch(actionCreators.changeITab(index))
                    if (index!==courseDetail.length){//非添加页面
                        dispatch(actionCreators.changeIKey(courseDetail[index].key))
                        dispatch(actionCreators.changeICourseName(courseDetail[index].courseName))
                        dispatch(actionCreators.chanegIPlace(courseDetail[index].place))
                        dispatch(actionCreators.changeITime(courseDetail[index].time))
                        dispatch(actionCreators.changeILong(courseDetail[index].long))
                        dispatch(actionCreators.changeITeacher(courseDetail[index].teacher))
                        dispatch(actionCreators.changeIWork(courseDetail[index].homeWork))
                    }else{
                        dispatch(actionCreators.changeIKey(""))
                        dispatch(actionCreators.changeICourseName(""))
                        dispatch(actionCreators.chanegIPlace(""))
                        dispatch(actionCreators.changeITime(""))
                        dispatch(actionCreators.changeILong(""))
                        dispatch(actionCreators.changeITeacher(""))
                        dispatch(actionCreators.changeIWork(""))
                    }
                },
                delete(index,course,seeKey){
                    var courseDetail=JSON.parse(JSON.stringify(course))
                    var key2=courseDetail[index].key
                    courseDetail.splice(index,1)
                    dispatch(actionCreators.deleteCourseDetail(courseDetail,seeKey,key2))
                    this.changeITab(index,courseDetail)
                },
                setDeleteIResult(data){
                    dispatch(actionCreators.setDeleteIResult(data))
                },
                change(index,course,seeKey,props){
                    var courseDetail=JSON.parse(JSON.stringify(course))
                    var key2=courseDetail[index].key
                    courseDetail[index].courseName=props.iCourseName;
                    courseDetail[index].place=props.iPlace;
                    courseDetail[index].time=props.iTime;
                    courseDetail[index].long=props.iLong;
                    courseDetail[index].teacher=props.iTeacher;
                    courseDetail[index].homeWork=props.iWork;
                    // console.log(courseDetail,props)
                    // console.log("change"+courseDetail[index].key+seeKey)
                    dispatch(actionCreators.changeCourseDetail(courseDetail,seeKey,key2))
                },
                setChangeIResult(data){
                    dispatch(actionCreators.setChangeIResult(data))
                },
                addCourse(props){
                    var courseDetail=JSON.parse(JSON.stringify(props.courseDetail))
                    var key1=props.seeKey
                    var newItem={};
                    newItem.key=JSON.stringify(props.iCourseName.length);
                    newItem.courseName=props.iCourseName;
                    newItem.place=props.iPlace;
                    newItem.time=props.iTime;
                    newItem.long=props.iLong;
                    newItem.teacher=props.iTeacher;
                    newItem.homeWork=props.iWork;
                    courseDetail=courseDetail.concat(newItem)
                    console.log(courseDetail)
                    dispatch(actionCreators.addCourse(courseDetail,newItem,key1))
                },
                setAddCourseIResult(data){
                    dispatch(actionCreators.setAddCourseIResult(data))
                }

            }
        }
const mapStateToProps=(state)=>{
    return {
        seeKey:state.getIn(['h1p3','seeKey']),
        courseDetail:state.getIn(['h1p3','courseDetail']),
        iTabPage:state.getIn(['h1p3','iTabPage']),
        deleteIResult:state.getIn(['h1p3','deleteIResult']),
        changeIResult:state.getIn(['h1p3','changeIResult']),

        iCourseName:state.getIn(['h1p3','iCourseName']),
        iPlace:state.getIn(['h1p3','iPlace']),
        iTime:state.getIn(['h1p3','iTime']),
        iLong:state.getIn(['h1p3','iLong']),
        iTeacher:state.getIn(['h1p3','iTeacher']),
        iWork:state.getIn(['h1p3','iWork']),
        addIResult:state.getIn(['h1p3','addIResult']),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(CourseDetail));