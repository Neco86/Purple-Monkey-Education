import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import NavBar from '../../common/components/NavBar'
import { Wrapper,Button2 } from '../../common/style'
import { actionCreators as registerActionCreators } from '../register/store'
import Input from '../../common/components/Input'
import { InputWrapper,SelectWrapper } from './style'
import Select from '../../common/components/Select'
import { actionCreators } from './store'
import Picker from '../../common/components/Picker'
import TextArea from '../../common/components/TextArea'
import Alert from '../../common/components/Alert'
class GroupRegister extends Component{
render(){
        const { backRegister,educationArea,
            groupName,changeGroupName,groupNameBottom,
            chooseEduArea,changeEduArea,
            place,changePlace,province,
            detailPlace,tel,ageL,ageH,
            changeDetailPlace,changeTel,changeAgeL,changeAgeH,
            next,intro,changeIntro,groupRegisterFinish,result
         } = this.props;
         return(
            <Wrapper>
                <NavBar title="注册" func={()=>{backRegister()}}/>
                <InputWrapper>
                    <Input
                    title="机构名:"
                    placeholder="请输入机构名"
                    error={groupNameBottom?"机构名已存在":""}
                    value={groupName}
                    onChange={(e)=>{changeGroupName(e)}}
                    />
                    <div style={{height:'55px'}}/>
                    <SelectWrapper>
                        <Select
                        title="教育领域:"
                        placeholder="请选择教育领域"
                        list={educationArea}
                        value={chooseEduArea}
                        onChange={(data)=>{changeEduArea(data)}}
                        />
                    </SelectWrapper>
                    <Picker
                    style={{zIndex:"1"}}
                    title="店面地址:"
                    data={province}
                    value={place}
                    onChange={(data)=>{changePlace(data);}}
                    />
                    <Input
                    title="详细地址:"
                    placeholder="请输入店面详细地址"
                    value={detailPlace}
                    onChange={(e)=>{changeDetailPlace(e)}}
                    />
                    <Input
                    title="联系方式:"
                    placeholder="请输入您的联系方式"
                    value={tel}
                    onChange={(e)=>{changeTel(e)}}
                    type="number"
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
                    <TextArea
                    title="简介:"
                    placeholder="请输入简介"
                    value={intro}
                    onChange={(e)=>{changeIntro(e)}}
                    />
                </InputWrapper>
                <Button2
                style={{margin:'20px auto',backgroundColor:next?"#cc99ff":"#f0f0f0"}}
                onClick={next?()=>{groupRegisterFinish(this.props)}:null}
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
    this.props.getEducationArea()
    this.props.getProvince()
    }
}
const mapDispatchToProps=(dispatch)=>{
            return {
                backRegister(){
                    dispatch(registerActionCreators.backRegister())
                },
                changeGroupName(e){
                    dispatch(actionCreators.changeGroupName(e.target.value))
                    dispatch(actionCreators.changeNext())
                },
                getEducationArea(){
                    dispatch(actionCreators.getEducationArea())
                },
                changeEduArea(data){
                    dispatch(actionCreators.changeEduArea(data))
                    dispatch(actionCreators.changeNext())
                },
                changePlace(data){
                    dispatch(actionCreators.changePlace(data))
                    dispatch(actionCreators.changeNext())
                },
                getProvince(){
                    dispatch(actionCreators.getProvince())
                },
                changeDetailPlace(e){
                    dispatch(actionCreators.changeDetailPlace(e.target.value))
                    dispatch(actionCreators.changeNext())
                },
                changeTel(e){
                    dispatch(actionCreators.changeTel(e.target.value))
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
                changeIntro(e){
                    dispatch(actionCreators.changeIntro(e.target.value))
                    dispatch(actionCreators.changeNext())
                },
                groupRegisterFinish(data){
                    dispatch(actionCreators.groupRegisterFinish(data))
                }
            }
        }
const mapStateToProps=(state)=>{
    return {
        username:state.getIn(['register','username']),
        password:state.getIn(['register','password']),
        phoneNumber:state.getIn(['register','phoneNumber']),
        select:state.getIn(['register','select']),

        educationArea:state.getIn(['groupRegister','educationArea']),
        groupName:state.getIn(['groupRegister','groupName']),
        groupNameBottom:state.getIn(['groupRegister','groupNameBottom']),
        chooseEduArea:state.getIn(['groupRegister','chooseEduArea']),
        place:state.getIn(['groupRegister','place']),
        province:state.getIn(['groupRegister','province']),
        next:state.getIn(['groupRegister','next']),
        detailPlace:state.getIn(['groupRegister','detailPlace']),
        tel:state.getIn(['groupRegister','tel']),
        ageL:state.getIn(['groupRegister','ageL']),
        ageH:state.getIn(['groupRegister','ageH']),
        intro:state.getIn(['groupRegister','intro']),
        result:state.getIn(['groupRegister','result']),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(GroupRegister));