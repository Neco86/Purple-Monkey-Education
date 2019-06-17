import React,{ PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import NavBar from '../../common/components/NavBar'
import { Wrapper } from '../../common/style'
import { actionCreators } from '../register/store'

class TeacherRegister extends PureComponent{
render(){
        const { backRegister } = this.props;
         return(
            <Wrapper>
                <NavBar title="注册" func={()=>{backRegister()}}/>
                TeacherRegister
            </Wrapper>
        )
   
}
}
const mapDispatchToProps=(dispatch)=>{
            return {
                backRegister(){
                    dispatch(actionCreators.backRegister())
                }
            }
        }
const mapStateToProps=(state)=>{
    return {
        // tabBarPage:state.getIn(['home','tabBarPage']),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(TeacherRegister));