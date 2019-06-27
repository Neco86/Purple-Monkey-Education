import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import NavBar from '../../../../../../common/components/NavBar'
import Input from '../../../../../../common/components/Input'
import Select from '../../../../../../common/components/Select'
import Alert from '../../../../../../common/components/Alert'
// import TextArea from '../../../../../../common/components/TextArea'
import { Wrapper,Button2 } from '../../../../../../common/style'
import { actionCreators as p4actionCreators } from '../store'
import { actionCreators as GroupActionCreators } from '../editGroup/store'
import { InputWrapper,SelectWrapper } from './style'
import { actionCreators } from './store'



class EditTeacher extends Component{
render(){
        const { changePage,
            name,changeName,sex,changeSex,age,changeAge,
            personID,changePersonID,personIDBottom,eduArea,
            chooseEduArea,changeEduArea,teacheAge,changeTeachAge,
            ageL,changeAgeL,ageH,changeAgeH,tel,changeTel,
            next,eidtTeacherFinish,result
         } = this.props;
         return(
            <Wrapper>
                <NavBar title="信息编辑" func={()=>{changePage(1)}}/>
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
                </InputWrapper>
                <Button2
                style={{margin:'20px auto',backgroundColor:next?"#cc99ff":"#f0f0f0"}}
                onClick={next?()=>{eidtTeacherFinish(this.props)}:null}
                >
                确认修改
                </Button2>
                {result?
                    <Alert
                    icon="&#xe657;"
                    iconColor="#1afa29"
                    content={["信息修改成功"]}
                    func={()=>{this.props.finish()}}
                    />
                :null}
            </Wrapper>
        )
   
    }
componentDidMount(){
    this.props.getEduArea()
    this.props.setDefault()
}
}
const mapDispatchToProps=(dispatch)=>{
            return {
                finish(){
                    dispatch(actionCreators.setEditTecherResult(false))
                    dispatch(p4actionCreators.changePage(1))
                },
                changePage(data){
                    dispatch(p4actionCreators.changePage(data))
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
                eidtTeacherFinish(data){
                    dispatch(actionCreators.eidtTeacherFinish(data))
                },
                setDefault(){
                    dispatch(actionCreators.setDefault())
                }
            }
        }
const mapStateToProps=(state)=>{
    return {
        username:state.getIn(['login','username']),

        name:state.getIn(['h1p4EditTeacher','name']),
        sex:state.getIn(['h1p4EditTeacher','sex']),
        age:state.getIn(['h1p4EditTeacher','age']),
        personID:state.getIn(['h1p4EditTeacher','personID']),
        personIDBottom:state.getIn(['h1p4EditTeacher','personIDBottom']),
        eduArea:state.getIn(['h1p4EditTeacher','eduArea']),
        chooseEduArea:state.getIn(['h1p4EditTeacher','chooseEduArea']),
        teacheAge:state.getIn(['h1p4EditTeacher','teacheAge']),
        ageL:state.getIn(['h1p4EditTeacher','ageL']),
        ageH:state.getIn(['h1p4EditTeacher','ageH']),
        tel:state.getIn(['h1p4EditTeacher','tel']),
        next:state.getIn(['h1p4EditTeacher','next']),
        result:state.getIn(['h1p4EditTeacher','result']),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(EditTeacher));