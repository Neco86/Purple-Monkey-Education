import React,{ PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
// import { actionCreators } from './store'
import { SearchWrapper } from './style'
import Input from '../../../../../common/components/Input'

class HomePage2Page1 extends PureComponent{
render(){
         return(
            <div>
                <SearchWrapper className="search">
                    <Input
                    title={<i className="iconfont">&#xe611;</i>}
                    placeholder="搜索课程/教师/机构"
                    value=""
                    onChange={()=>{}}
                    />
                </SearchWrapper>
                <div style={{paddingTop:"55px",height:"100%"}}>
                    Homepage2 page1
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
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(HomePage2Page1));