import React,{ Component } from 'react'
import { BgWrapper,Button1 } from '../../common/style'
import { Wrapper,InputWrapper } from './style'
import Img from '../../statics/logo.png'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { actionCreators } from './store'
import NavBar from '../../common/components/NavBar'
import Alert from '../../common/components/Alert'
import { Redirect } from 'react-router-dom'

class Login extends Component{
render(){
        const { username,password,changeUsername,changePassword,login,history,type,reLogin } = this.props;
         return(
            <BgWrapper>
                <div style={{positon:"fixed",top:"0"}}>
                    <NavBar
                    title=""
                    func={()=>{history.push("/")}}
                    />
                </div>
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
                {type==="error1"?
                <Alert 
                icon="&#xe668;" 
                iconColor="#d81e06" 
                content={["用户名或密码错误","请重新输入"]}
                func={()=>{reLogin()}}
                />:null}
                {type==="error2"?
                <Alert 
                icon="&#xe602;" 
                iconColor="#f4ea2a" 
                content={["您的注册申请","正等待管理员审核"]}
                func={()=>{reLogin()}}
                />:null}
                {type==="error3"?
                <Alert 
                icon="&#xe668;" 
                iconColor="#d81e06" 
                content={["注册审核未通过","请重新注册"]}
                func={()=>{reLogin()}}
                />:null}
                {type==="type1"||type==="type2"?<Redirect to='/home'/>:null}
            </BgWrapper>
        )
   
}
componentDidMount(){
    // window.history.pushState(null, "", '/#/login');
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
                },
                reLogin(){
                    dispatch(actionCreators.reLogin())
                }
            }
        }
const mapStateToProps=(state)=>{
    return {
        username:state.getIn(['login','username']),
        password:state.getIn(['login','password']),
        type:state.getIn(['login','type']),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Login));