import React,{ PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
// import { actionCreators } from './store'
import NavBar from '../../../../../common/components/NavBar'

class SearchPage extends PureComponent{
render(){
         return(
            <div>
                <NavBar
                title="返回"
                func={()=>{this.props.backFunc()}}
                />
                <div style={{height:"45px"}}/>
                {this.props.search}
                <div style={{height:"1000px",backgroundColor:"green"}}/>
                {this.props.search}
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
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(SearchPage));