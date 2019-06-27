import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import NavBar from '../../../../../../common/components/NavBar'
import Input from '../../../../../../common/components/Input'
import Select from '../../../../../../common/components/Select'
import Alert from '../../../../../../common/components/Alert'
import Picker from '../../../../../../common/components/Picker'
// import TextArea from '../../../../../../common/components/TextArea'
import { Wrapper,Button2 } from '../../../../../../common/style'
import { actionCreators as p4actionCreators } from '../store'
import { InputWrapper,SelectWrapper } from './style'
import { actionCreators } from './store'


class EditGroup extends Component{
render(){
        const { changePage,educationArea,
            groupName,changeGroupName,groupNameBottom,
            chooseEduArea,changeEduArea,
            place,changePlace,province,
            detailPlace,tel,ageL,ageH,
            changeDetailPlace,changeTel,changeAgeL,changeAgeH,
            next,editGroupFnish,result
         } = this.props;
         return(
            <Wrapper>
                <NavBar title="信息编辑" func={()=>{changePage(1)}}/>
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
                </InputWrapper>
                <Button2
                style={{margin:'20px auto',backgroundColor:next?"#cc99ff":"#f0f0f0"}}
                onClick={next?()=>{editGroupFnish(this.props)}:null}
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
    this.props.getEducationArea()
    this.props.getProvince()
    this.props.setDefault()
    }
}
const mapDispatchToProps=(dispatch)=>{
            return {
                finish(){
                    dispatch(actionCreators.setEditGroupResult(false))

                    dispatch(p4actionCreators.changePage(1))
                },
                changePage(data){
                    dispatch(p4actionCreators.changePage(data))
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
                editGroupFnish(data){
                    dispatch(actionCreators.editGroupFnish(data))
                },
                setDefault(){
                    dispatch(actionCreators.setDefault())
                }
            }
        }
const mapStateToProps=(state)=>{
    return {
        username:state.getIn(['login','username']),


        educationArea:state.getIn(['h1p4EditGroup','educationArea']),
        groupName:state.getIn(['h1p4EditGroup','groupName']),
        groupNameBottom:state.getIn(['h1p4EditGroup','groupNameBottom']),
        chooseEduArea:state.getIn(['h1p4EditGroup','chooseEduArea']),
        place:state.getIn(['h1p4EditGroup','place']),
        province:state.getIn(['h1p4EditGroup','province']),
        next:state.getIn(['h1p4EditGroup','next']),
        detailPlace:state.getIn(['h1p4EditGroup','detailPlace']),
        tel:state.getIn(['h1p4EditGroup','tel']),
        ageL:state.getIn(['h1p4EditGroup','ageL']),
        ageH:state.getIn(['h1p4EditGroup','ageH']),
        intro:state.getIn(['h1p4EditGroup','intro']),
        result:state.getIn(['h1p4EditGroup','result']),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(EditGroup));