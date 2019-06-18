import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import NavBar from '../../common/components/NavBar'
import { Wrapper,Button2 } from '../../common/style'
import { actionCreators as registerActionCreators } from '../register/store'
import { InputWrapper,SelectWrapper } from './style'
import Input from '../../common/components/Input'
import Select from '../../common/components/Select'
import Picker from '../../common/components/Picker'
import { actionCreators as groupRegisterActionCreators } from '../groupRegister/store'
import { actionCreators } from './store'
import Alert from '../../common/components/Alert'
class StudentRegister extends Component{
render(){
        const { backRegister,
            province,provinceChoose,eduArea,name,sex,age,eduAreaChoose,
            changeprovinceChoose,changeEduArea,changeName,changeSex,changeAge,
            next,studentRegisterFinish,result
         } = this.props;
         return(
            <Wrapper>
                <NavBar title="注册" func={()=>{backRegister()}}/>
                <InputWrapper>
                    <Input
                    title="孩子姓名:"
                    placeholder="请输入姓名"
                    value={name}
                    onChange={(e)=>{changeName(e)}}
                    />
                    <div style={{height:"45px"}}/>
                    <SelectWrapper className="sex">
                        <Select
                        title="孩子性别:"
                        placeholder="请输入性别"
                        value={sex}
                        onChange={(data)=>{changeSex(data)}}
                        list={["男","女"]}
                        />
                    </SelectWrapper>
                    <Input
                    title="孩子年龄:"
                    placeholder="请输入年龄"
                    value={age}
                    onChange={(e)=>{changeAge(e)}}
                    type="number"
                    />
                    <SelectWrapper className="classMind">
                        <Select
                        title="选课意向:"
                        placeholder="请选择选课意向"
                        value={eduAreaChoose}
                        onChange={(data)=>{changeEduArea(data)}}
                        list={eduArea}
                        />
                    </SelectWrapper>
                    <div style={{height:"45px"}}/>
                    <Picker
                    title="店面地址"
                    data={province}
                    value={provinceChoose}
                    onChange={(data)=>{changeprovinceChoose(data)}}
                    />
                </InputWrapper>
                <Button2
                style={{margin:'20px auto',backgroundColor:next?"#cc99ff":"#f0f0f0"}}
                onClick={next?()=>{studentRegisterFinish(this.props)}:null}
                >
                注册
                </Button2>
                {result?
                    <Alert
                    icon="&#xe657;"
                    iconColor="#1afa29"
                    content={["注册成功"]}
                    func={()=>{this.props.history.push('/login')}}
                    />
                :null}
            </Wrapper>
        ) 
    }
componentDidMount(){
    this.props.getClassMind()
    this.props.getClassPlace()
}
}
const mapDispatchToProps=(dispatch)=>{
            return {
                backRegister(){
                    dispatch(registerActionCreators.backRegister())
                },
                getClassMind(){
                    dispatch(groupRegisterActionCreators.getEducationArea())
                },
                getClassPlace(){
                    dispatch(groupRegisterActionCreators.getProvince())
                },
                changeName(e){
                    dispatch(actionCreators.changeName(e.target.value))
                    dispatch(actionCreators.changeNext())
                },
                changeAge(e){
                    dispatch(actionCreators.changeAge(e.target.value))
                    dispatch(actionCreators.changeNext())
                },
                changeSex(data){
                    dispatch(actionCreators.changeSex(data))
                    dispatch(actionCreators.changeNext())
                },
                changeprovinceChoose(data){
                    dispatch(actionCreators.changeprovinceChoose(data))
                    dispatch(actionCreators.changeNext())
                },
                changeEduArea(data){
                     dispatch(actionCreators.changeEduArea(data))
                     dispatch(actionCreators.changeNext())
                },
                studentRegisterFinish(data){
                    dispatch(actionCreators.studentRegisterFinish(data))
                },
            }
        }
const mapStateToProps=(state)=>{
    return {
        username:state.getIn(['register','username']),
        password:state.getIn(['register','password']),
        phoneNumber:state.getIn(['register','phoneNumber']),
        select:state.getIn(['register','select']),

        province:state.getIn(['studentRegister','province']),
        provinceChoose:state.getIn(['studentRegister','provinceChoose']),
        eduArea:state.getIn(['studentRegister','eduArea']),
        name:state.getIn(['studentRegister','name']),
        age:state.getIn(['studentRegister','age']),
        sex:state.getIn(['studentRegister','sex']),
        eduAreaChoose:state.getIn(['studentRegister','eduAreaChoose']),
        next:state.getIn(['studentRegister','next']),
        result:state.getIn(['studentRegister','result']),

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(StudentRegister));