import React,{ PureComponent } from 'react'
import { BgWrapper,Button1 } from '../../common/style'
import { Wrapper,InputWrapper } from './style'
import Img from '../../statics/logo.png'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { actionCreators } from './store'

class Login extends PureComponent{
render(){
        const { username,password,changeUsername,changePassword,login } = this.props;
         return(
            <BgWrapper>
                <Wrapper>
                    <img src={Img} alt=""/>
                    <InputWrapper>
                        <input
                        placeholder="请输入用户名"
                        value={username}
                        onChange={(e)=>{changeUsername(e)}}
                        />
                        <input
                        placeholder="请输入密码"
                        type="password"
                        value={password}
                        onChange={(e)=>{changePassword(e)}}
                        />
                    </InputWrapper>
                    <Button1 style={{margin:"30px auto"}} onClick={()=>{login(username,password)}}>登录</Button1>
                </Wrapper>
            </BgWrapper>
        )
   
}
}
const mapDispatchToProps=(dispatch)=>{
            return {
                changeUsername(e){
                    dispatch(actionCreators.changeUsername(e.target.value))
                },
                changePassword(e){
                    dispatch(actionCreators.changePassword(e.target.value))
                },
                login(username,password){
                    if (username!==""&&password!=="")
                        dispatch(actionCreators.login(username,password))
                }
            }
        }
const mapStateToProps=(state)=>{
    return {
        username:state.getIn(['login','username']),
        password:state.getIn(['login','password']),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Login));