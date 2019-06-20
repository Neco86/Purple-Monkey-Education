import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { actionCreators } from './store'
import NavBar from '../../../../../common/components/NavBar'
import { InformationWrapper,SearchDetailWrapper,SearchResultWrapper } from './style'
import Search from '../../../components/Search'

class Information extends Component{
render(){
        const { changePage,information,course,publish } = this.props;
         return(
            <InformationWrapper>
                <NavBar
                title="资料"
                func={()=>{changePage(2)}}
                />
                <div style={{height:"45px"}}/>
                <SearchDetailWrapper>
                    <div className="itemWrapper" style={{height:"120px",marginTop:"-20px"}}>
                        <div style={{display:"flex"}}>
                            <div style={{width:"80px"}}>
                                <div className="img">
                                    <img src={information.userImg} alt=""/>
                                </div>
                            </div>
                            <div style={{flex:"1"}}>
                                <div style={{margin:"25px 0 0 15px"}}>
                                    <div style={{fontSize:"16px"}}>{information.username}</div>
                                    <div style={{color:"#7f7f7f",marginTop:"5px"}}>{information.userIntro}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SearchDetailWrapper>
                <SearchResultWrapper style={{backgroundColor:"white",paddingTop:"1px",paddingBottom:"1px",borderBottom:"1px solid #f2f2f2"}}>
                    <div className="result">相关课程</div>
                    {course.map((item,index)=>(<Search key={index} item={item}/>))}
                </SearchResultWrapper>
                <SearchResultWrapper style={{backgroundColor:"white",paddingTop:"1px"}}>
                    <div className="result" style={{paddingBottom:"0px"}}>他的公告</div>
                    <div style={{padding:"15px",borderTop:"1px solid #f2f2f2"}}>
                        <div style={{marginBottom:"15px"}}>
                            {publish[0]}
                        </div>
                        <div style={{paddingBottom:"10px"}}>
                            <div style={{float:"left"}}>通知公告</div>
                            <div style={{float:"right"}}>
                                <span style={{display:"inline-block",marginRight:"5px"}}>{publish[1]}</span>
                                <span>{publish[2]}</span>
                            </div>
                        </div>
                    </div>
                </SearchResultWrapper>
            </InformationWrapper>
        )
   
}
componentDidMount(){
    this.props.getInformation(this.props.searchDetail.username)
}
}
const mapDispatchToProps=(dispatch)=>{
            return {
                changePage(page){
                    dispatch(actionCreators.changePage(page))
                },
                getInformation(username){
                    dispatch(actionCreators.getInformation(username))
                }
            }
        }
const mapStateToProps=(state)=>{
    return {
        searchDetail:state.getIn(['h1p1','searchDetail']),
        information:state.getIn(['h1p1','information']),
        course:state.getIn(['h1p1','course']),
        publish:state.getIn(['h1p1','publish']),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Information));