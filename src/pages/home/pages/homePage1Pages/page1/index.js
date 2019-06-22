import React,{ Component,Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { actionCreators } from './store'
import { SearchWrapper,TabWrapper,FullScreenWrapper } from './style'
import Input from '../../../../../common/components/Input'
import Tab from '../../../components/Tab'
import NewsPage from './newsPage'
import VideosPage from './videosPage'
import SreachPage from './searchPage'
import SreachDetail from './searchDetailPage'
import Information from './informationPage'
import NewsDetail from './newsDetailPage'
import VideosDetail from './videosDetailPage'

class HomePage1Page1 extends Component{
constructor(props) {
        super(props);
        this.state = {
          searching: false
        };
      }
getHome(){
    const { search,changeSearch,onKeyPress,tabPage,changeTabPage } = this.props;
    return <Fragment>
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
                    {this.state.searching?<FullScreenWrapper style={{backgroundColor:"black",opacity:"0.3",top:"55px"}}/>:null}
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
            </Fragment>
}
render(){
        const { page } = this.props;
         return(
            <div>
                {page===0?this.getHome():null}
                {page===1?<FullScreenWrapper><SreachPage/></FullScreenWrapper>:null}
                {page===2?<FullScreenWrapper><SreachDetail/></FullScreenWrapper>:null}
                {page===3?<FullScreenWrapper><Information/></FullScreenWrapper>:null}
                {page===4?<FullScreenWrapper><NewsDetail/></FullScreenWrapper>:null}
                {page===5?<FullScreenWrapper><VideosDetail/></FullScreenWrapper>:null}
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
                        that.setState({searching:false})//关闭透明背景
                        dispatch(actionCreators.changePage(1))//跳转search
                    }
            },
            changeTabPage(index){
               dispatch(actionCreators.changeTabPage(index))
            },
    }
}
const mapStateToProps=(state)=>{
    return {
        search:state.getIn(['h1p1','search']),
        page:state.getIn(['h1p1','page']),
        tabPage:state.getIn(['h1p1','tabPage']),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(HomePage1Page1));