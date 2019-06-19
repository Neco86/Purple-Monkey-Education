import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { actionCreators } from './store'
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
        const { search,changeSearch,onKeyPress,tabPage,changeTabPage } = this.props;
         return(
            <div>
                <SearchWrapper className="search" style={{zIndex:"3"}}>
                    <Input
                    title={<i className="iconfont">&#xe611;</i>}
                    placeholder="搜索课程/教师/机构"
                    value={search}
                    onChange={(e)=>{changeSearch(e)}}
                    onFocus={()=>{this.setState({searching:true})}}
                    onBlur={()=>{this.setState({searching:false})}}
                    onKeyPress={(e)=>(e.charCode===13?onKeyPress(this,search):null)}
                    />
                </SearchWrapper>
                <div style={{paddingTop:"50px",width:"100%"}}>
                    {this.state.searching?<div style={{height:"100%",width:"100%",backgroundColor:"black",position:"fixed",zIndex:"999",opacity:"0.3"}}/>:null}
                    <TabWrapper style={{zIndex:"2"}}>
                        <Tab
                        titles={["新闻","视频"]}
                        page1={()=>(<NewsPage/>)}
                        page2={()=>(<VideosPage/>)}
                        tabPage={tabPage}
                        onChange={(tab,index)=>{changeTabPage(index)}}
                        />
                    </TabWrapper>
                </div>
            </div>
        )
   
}
}
const mapDispatchToProps=(dispatch)=>{
        return {
            changeSearch(e){
                dispatch(actionCreators.changeSearch(e.target.value))
            },
            onKeyPress(that,search){//回车
                if (search!=="")
                    {
                        that.setState({searching:false})
                        dispatch(actionCreators.changeGoSearch(true))
                    }
            },
            changeTabPage(index){
               dispatch(actionCreators.changeTabPage(index))
            }
    }
}
const mapStateToProps=(state)=>{
    return {
        search:state.getIn(['h1p1','search']),
        goSearch:state.getIn(['h1p1','goSearch']),
        tabPage:state.getIn(['h1p1','tabPage']),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(HomePage1Page1));