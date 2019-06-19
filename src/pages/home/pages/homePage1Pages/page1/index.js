import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
// import { actionCreators } from './store'
import { SearchWrapper,TabWrapper } from './style'
import Input from '../../../../../common/components/Input'
import Tab from '../../../components/Tab'
import NewsPage from './newsPage'
import VideosPage from './videosPage'

class HomePage1Page1 extends Component{
constructor(props) {
        super(props);
        this.state = {
          searching: false
        };
      }
render(){
         return(
            <div>
                <SearchWrapper className="search" style={{zIndex:"3"}}>
                    <Input
                    title={<i className="iconfont">&#xe611;</i>}
                    placeholder="搜索课程/教师/机构"
                    value=""
                    onChange={()=>{}}
                    onFocus={()=>{this.setState({searching:true})}}
                    onBlur={()=>{this.setState({searching:false})}}
                    />
                </SearchWrapper>
                <div style={{paddingTop:"50px",width:"100%"}}>
                    {this.state.searching?<div style={{height:"100%",width:"100%",backgroundColor:"black",position:"fixed",zIndex:"999",opacity:"0.3"}}/>:null}
                    <TabWrapper style={{zIndex:"2"}}>
                        <Tab
                        titles={["新闻","视频"]}
                        page1={()=>(<NewsPage/>)}
                        page2={()=>(<VideosPage/>)}
                        tabPage={0}
                        />
                    </TabWrapper>
                </div>
            </div>
        )
   
}
}
const mapDispatchToProps=(dispatch)=>{
            return {
                addClassBack(history){
                    // dispatch(actionCreators.addClassBack())
                }
            }
        }
const mapStateToProps=(state)=>{
    return {
        // tabBarPage:state.getIn(['home','tabBarPage']),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(HomePage1Page1));