import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { actionCreators } from './store'
import NavBar from '../../../../../common/components/NavBar'
import Input from '../../../../../common/components/Input'
import { Tabs,  Badge } from 'antd-mobile'
import { CourseDetailWrapper } from './style'

class CourseDetail extends Component{
render(){
        const tabs = [
          { title: <Badge>第一次课</Badge> },
          { title: <Badge>第二次课</Badge> },
          { title: <Badge>添加</Badge> }
        ];
        const { changePage,courseDetail } = this.props;
        const height = courseDetail.length*50+50;
         return(
            <CourseDetailWrapper height={height+"px"}>
                <NavBar title="课程详细信息" func={()=>{changePage(0)}}/>
                <div style={{height:"45px"}}/>
                <div className="tab">
                    <div className="left"/>
                    <Tabs tabs={tabs}
                      initialPage={0}
                      onChange={(tab, index) => { }}
                      tabBarPosition="left"
                      tabDirection="vertical"
                    >
                      
                      <div>page1</div>
                      <div>page2</div>
                      <div>page3</div>
                    </Tabs>
                </div>
            </CourseDetailWrapper>
        )
   
}
componentDidMount(){
    this.props.getPage3CourseDetail(this.props.seeKey)
}
}
const mapDispatchToProps=(dispatch)=>{
            return {
                changePage(page){
                    dispatch(actionCreators.changePage(page))
                },
                getPage3CourseDetail(key){
                    dispatch(actionCreators.getPage3CourseDetail(key))
                }
            }
        }
const mapStateToProps=(state)=>{
    return {
        seeKey:state.getIn(['h1p3','seeKey']),
        courseDetail:state.getIn(['h1p3','courseDetail']),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(CourseDetail));