import React,{ PureComponent,Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { actionCreators } from './store'
import { CourseWrapper,FullScreenWrapper } from './style'
import Tab from '../../../components/Tab'
import MyCourse from './myCoursePage'
import CourseTable from './courseTablePage'
import Alert from '../../../../../common/components/Alert'
import AddNewCourse from './addNewCoursePage'
import FixCourse from './fixCoursePage'
import CourseDetail from './courseDetailPage'

class HomePage1Page3 extends PureComponent{
render(){
    const { tabPage,changeTabPage,selectedTab,deleteResult,setDeleteResult,page,changePage } = this.props;
         return(
            <CourseWrapper>
                {page===0?
                <Fragment>
                    <Tab 
                    titles={["我的课程","课程表"]}
                    page1={()=>(<MyCourse/>)}
                    page2={()=>(<CourseTable/>)}
                    tabPage={tabPage}
                    onChange={(tab,index)=>{changeTabPage(index)}}
                    />
                    {tabPage===0&&selectedTab==="tab3"?
                    <div className="add iconfont" onClick={()=>{changePage(1)}}>&#xe74a;</div>
                    :null}
                    {deleteResult?
                        <Alert 
                        icon="&#xe657;"
                        iconColor="#1afa29"
                        content={["课程删除成功"]}
                        func={()=>{setDeleteResult(false)}}
                        />:null}
                </Fragment>:null}
                {page===1?<FullScreenWrapper><AddNewCourse/></FullScreenWrapper>:null}
                {page===2?<FullScreenWrapper><FixCourse/></FullScreenWrapper>:null}
                {page===3?<FullScreenWrapper><CourseDetail/></FullScreenWrapper>:null}
            </CourseWrapper>
        )
   
}
}
const mapDispatchToProps=(dispatch)=>{
            return {
                changeTabPage(index){
                    dispatch(actionCreators.changeTabPage(index))
                },
                setDeleteResult(data){
                    dispatch(actionCreators.setDeleteResult(data))
                },
                changePage(page){
                    dispatch(actionCreators.changePage(page))
                }
            }
        }
const mapStateToProps=(state)=>{
    return {
        selectedTab:state.getIn(['h1','selectedTab']),
        tabPage:state.getIn(['h1p3','tabPage']),
        deleteResult:state.getIn(['h1p3','deleteResult']),
        page:state.getIn(['h1p3','page'])
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(HomePage1Page3));