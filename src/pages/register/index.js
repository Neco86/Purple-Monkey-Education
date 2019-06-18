import React,{ PureComponent,Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { actionCreators } from './store'
import { Wrapper,Button2 } from '../../common/style'
import NavBar from '../../common/components/NavBar'
import Input from '../../common/components/Input'
import Select from '../../common/components/Select'
import { InputWrapper } from './style'
import StudentRegister from '../studentRegister'
import TeacherRegister from '../teacherRegister'
import GroupRegister from '../groupRegister'
class Register extends PureComponent{

render(){
        const { history,username,changeUserName,usernameBottom,
                password,changePassWord,doublePassword,changeDoublePassWord,
                phoneNumber,changePhoneNumber,changeSelect,select,next,handleNext,
                pageNumber
         } = this.props;
         const getPage1=()=>{
            return (
                <Fragment>
                    <NavBar title="注册" func={()=>{history.push('/')}}/>
                    <InputWrapper>
                        <Input 
                        title="用户名:" 
                        placeholder="请输入用户名" 
                        error={usernameBottom?"用户名已存在":""} 
                        value={username} 
                        onChange={(e)=>{changeUserName(e)}}
                        />
                        <Input 
                        title="密码:" 
                        placeholder="请输入密码" 
                        value={password} 
                        onChange={(e)=>{changePassWord(e)}}
                        type="password"
                        />
                        <Input 
                        title="确认密码:" 
                        placeholder="请再次输入密码" 
                        error={password===doublePassword?"":"两次输入的密码不一致"}
                        type="password"
                        value={doublePassword} 
                        onChange={(e)=>{changeDoublePassWord(e)}}
                        />
                        <Input 
                        title="手机号:" 
                        placeholder="请输入手机号" 
                        value={phoneNumber} 
                        onChange={(e)=>{changePhoneNumber(e)}}
                        type="number"
                        />
                        <Select 
                        title="账号类型:" 
                        placeholder="请选择账号类型" 
                        list={["教育机构","个人教师","学生家长"]}
                        value={select}
                        onChange={(data)=>{changeSelect(data)}}
                        />
                    </InputWrapper>
                    <Button2 
                    style={{margin:"120px auto 0 auto",backgroundColor:next?"#cc99ff":"#f0f0f0"}}
                    onClick={next?()=>{handleNext(select)}:null}
                    >
                        下一步
                    </Button2>
                </Fragment>)
         }
         return(
            <Wrapper>
                {pageNumber===1?getPage1():null}
                {pageNumber===2?<StudentRegister/>:null}
                {pageNumber===3?<TeacherRegister/>:null}
                {pageNumber===4?<GroupRegister/>:null}
            </Wrapper>
        )
   
}
}
const mapDispatchToProps=(dispatch)=>{
            return {
                changeUserName(e){
                    dispatch(actionCreators.changeUserName(e.target.value))
                    dispatch(actionCreators.changeNext())
                },
                changePassWord(e){
                    dispatch(actionCreators.changePassWord(e.target.value))
                    dispatch(actionCreators.changeNext())
                },
                changeDoublePassWord(e){
                    dispatch(actionCreators.changeDoublePassWord(e.target.value))
                    dispatch(actionCreators.changeNext())
                },
                changePhoneNumber(e){
                    dispatch(actionCreators.changePhoneNumber(e.target.value))
                    dispatch(actionCreators.changeNext())
                },
                changeSelect(data){
                    dispatch(actionCreators.changeSelect(data))
                    dispatch(actionCreators.changeNext())
                },
                handleNext(data){
                    var pageNumber=1;
                    switch(data){
                        case "学生家长":
                            pageNumber=2;break;
                        case "个人教师":
                            pageNumber=3;break;
                        case "教育机构":
                            pageNumber=4;break;
                        default:
                            pageNumber=1;
                    }
                    // console.log(pageNumber);
                    dispatch(actionCreators.handleNext(pageNumber))
                }
            }
        }
const mapStateToProps=(state)=>{
    return {
        username:state.getIn(['register','username']),
        usernameBottom:state.getIn(['register','usernameBottom']),
        password:state.getIn(['register','password']),
        doublePassword:state.getIn(['register','doublePassword']),
        phoneNumber:state.getIn(['register','phoneNumber']),
        select:state.getIn(['register','select']),
        next:state.getIn(['register','next']),
        pageNumber:state.getIn(['register','pageNumber']),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Register));