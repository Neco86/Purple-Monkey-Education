import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import NavBar from '../../common/components/NavBar'
import { Wrapper,Button2 } from '../../common/style'
import { actionCreators as registerActionCreators } from '../register/store'
import { InputWrapper,SelectWrapper } from './style'
import Input from '../../common/components/Input'
import Select from '../../common/components/Select'
import TextArea from '../../common/components/TextArea'
import { actionCreators } from './store'
import { actionCreators as GroupActionCreators } from '../groupRegister/store'
import Alert from '../../common/components/Alert'

class TeacherRegister extends Component{
render(){
        const { backRegister,
            name,changeName,sex,changeSex,age,changeAge,
            personID,changePersonID,personIDBottom,eduArea,
            chooseEduArea,changeEduArea,teacheAge,changeTeachAge,
            ageL,changeAgeL,ageH,changeAgeH,tel,changeTel,intro,changeIntro,
            next,teacherRegisterFinish,result
         } = this.props;
         return(
            <Wrapper>
                <NavBar title="注册" func={()=>{backRegister()}}/>
                <InputWrapper>
                    <Input
                    title="姓名:"
                    placeholder="请输入姓名"
                    value={name}
                    onChange={(e)=>{changeName(e)}}
                    />
                    <div style={{height:"45px"}}/>
                    <SelectWrapper className='sex'>
                        <Select
                        title="性别:"
                        placeholder="请选择性别"
                        value={sex}
                        onChange={(data)=>{changeSex(data)}}
                        list={["男","女"]}
                        />
                    </SelectWrapper> 
                    <Input
                    title="年龄:"
                    placeholder="请输入年龄"
                    value={age}
                    onChange={(e)=>{changeAge(e)}}
                    type="number"
                    />
                    <Input
                    title="身份证号:"
                    placeholder="请输入身份证号"
                    value={personID}
                    onChange={(e)=>{changePersonID(e)}}
                    type="number"
                    error={personIDBottom?"身份证号已注册":""}
                    />
                    <div style={{height:"45px"}}/>
                    <SelectWrapper className='eduArea'>
                        <Select
                        title="教育领域:"
                        placeholder="请选择教育领域"
                        value={chooseEduArea}
                        onChange={(data)=>{changeEduArea(data)}}
                        list={eduArea}
                        />
                    </SelectWrapper> 
                    <Input
                    title="从教年限:"
                    placeholder="请输入从教年限"
                    value={teacheAge}
                    onChange={(e)=>{changeTeachAge(e)}}
                    />
                    <Input
                    title="适龄下限:"
                    placeholder="请输入教育适龄下限"
                    value={ageL}
                    onChange={(e)=>{changeAgeL(e)}}
                    type="number"
                    />
                    <Input
                    title="适龄上限:"
                    placeholder="请输入教育适龄上限"
                    value={ageH}
                    onChange={(e)=>{changeAgeH(e)}}
                    type="number"
                    />
                    <Input
                    title="联系方式:"
                    placeholder="请输入联系方式"
                    value={tel}
                    onChange={(e)=>{changeTel(e)}}
                    type="number"
                    />
                    <TextArea
                    title="简介:"
                    placeholder="请输入简介"
                    value={intro}
                    onChange={(e)=>{changeIntro(e)}}
                    />
                </InputWrapper>
                <Button2
                style={{margin:'20px auto',backgroundColor:next?"#cc99ff":"#f0f0f0"}}
                onClick={next?()=>{teacherRegisterFinish(this.props)}:null}
                >
                注册
                </Button2>
                {result?
                    <Alert
                    icon="&#xe657;"
                    iconColor="#1afa29"
                    content={["注册成功","请等待管理员审核"]}
                    func={()=>{this.props.history.push('/login')}}
                    />
                :null}
            </Wrapper>
        )
   
    }
componentDidMount(){
    this.props.getEduArea()
}
}
const mapDispatchToProps=(dispatch)=>{
            return {
                backRegister(){
                    dispatch(registerActionCreators.backRegister())
                },
                changeName(e){
                    dispatch(actionCreators.changeName(e.target.value))
                    dispatch(actionCreators.changeNext())
                },
                changeSex(data){
                    dispatch(actionCreators.changeSex(data))
                    dispatch(actionCreators.changeNext())
                },
                changeAge(e){
                    dispatch(actionCreators.changeAge(e.target.value))
                    dispatch(actionCreators.changeNext())
                },
                changePersonID(e){
                    dispatch(actionCreators.changePersonID(e.target.value))
                    dispatch(actionCreators.changeNext())
                },
                getEduArea(){
                    dispatch(GroupActionCreators.getEducationArea())
                },
                changeEduArea(data){
                    dispatch(actionCreators.changeEduArea(data))
                    dispatch(actionCreators.changeNext())
                },
                changeTeachAge(e){
                    dispatch(actionCreators.changeTeachAge(e.target.value))
                    dispatch(actionCreators.changeNext())
                },
                changeAgeL(e){
                    dispatch(actionCreators.changeAgeL(e.target.value))
                    dispatch(actionCreators.changeNext())
                },
                changeAgeH(e){
                    dispatch(actionCreators.changeAgeH(e.target.value))
                    dispatch(actionCreators.changeNext())
                },
                changeTel(e){
                    dispatch(actionCreators.changeTel(e.target.value))
                    dispatch(actionCreators.changeNext())
                },
                changeIntro(e){
                    dispatch(actionCreators.changeIntro(e.target.value))
                    dispatch(actionCreators.changeNext())
                },
                teacherRegisterFinish(data){
                    dispatch(actionCreators.teacherRegisterFinish(data))
                }
            }
        }
const mapStateToProps=(state)=>{
    return {
        username:state.getIn(['register','username']),
        password:state.getIn(['register','password']),
        phoneNumber:state.getIn(['register','phoneNumber']),
        select:state.getIn(['register','select']),

        name:state.getIn(['teacherRegister','name']),
        sex:state.getIn(['teacherRegister','sex']),
        age:state.getIn(['teacherRegister','age']),
        personID:state.getIn(['teacherRegister','personID']),
        personIDBottom:state.getIn(['teacherRegister','personIDBottom']),
        eduArea:state.getIn(['teacherRegister','eduArea']),
        chooseEduArea:state.getIn(['teacherRegister','chooseEduArea']),
        teacheAge:state.getIn(['teacherRegister','teacheAge']),
        ageL:state.getIn(['teacherRegister','ageL']),
        ageH:state.getIn(['teacherRegister','ageH']),
        tel:state.getIn(['teacherRegister','tel']),
        intro:state.getIn(['teacherRegister','intro']),
        next:state.getIn(['teacherRegister','next']),
        result:state.getIn(['teacherRegister','result']),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(TeacherRegister));