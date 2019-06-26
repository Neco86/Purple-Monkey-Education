import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import NavBar from '../../../../../common/components/NavBar'
import Input from '../../../../../common/components/Input'
import Select from '../../../../../common/components/Select'
import Alert from '../../../../../common/components/Alert'
import { actionCreators } from './store'
import { AddNewCourseWrapper,SelectWrapper } from './style'
import { Button2 } from '../../../../../common/style'
class FixCourse extends Component{
render(){
        const { changePage,
            courseName,changeCourseName,
            eduArea,changeEduArea,
            money,changeMoney,
            month,changeMonth,
            ageL,changeAgeL,
            ageH,changeAgeH,
            pic,changePic,fixCourseFinish,
            next,fixCourseResult,setFixCourseResult,
            list
             } = this.props;
         return(
            <AddNewCourseWrapper>
                <NavBar title="修改课程信息" func={()=>{changePage(0)}}/>
                <div style={{height:"45px"}}/>
                <div className="inputWrapper">
                    <Input
                    title="课程名称:"
                    placeholder="请输入课程名称"
                    value={courseName}
                    onChange={(e)=>{changeCourseName(e)}}
                    />
                    <div style={{height:"45px"}}/>
                    <SelectWrapper>
                        <Select
                        title="教育领域:"
                        list={list}
                        placeholder="请选择教育领域"
                        value={eduArea}
                        onChange={(data)=>{changeEduArea(data)}}
                        />
                    </SelectWrapper>
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
                    title="缴费金额:"
                    placeholder="请输入缴费金额"
                    value={money}
                    onChange={(e)=>{changeMoney(e)}}
                    type="number"
                    />
                    <Input
                    title="缴费周期:"
                    placeholder="请输入缴费周期(月)"
                    value={month}
                    onChange={(e)=>{changeMonth(e)}}
                    type="number"
                    />
                    <div className="file">
                        <Input
                        title="简介图片:"
                        placeholder="请上传课程简介图片"
                        value={pic}
                        onChange={(e)=>{changePic(e)}}
                        type="file"
                        error="上传新图片或使用以前的图片"
                        />
                    </div>
                </div>
                <Button2
                style={{margin:'20px auto',backgroundColor:next?"#cc99ff":"#f0f0f0"}}
                onClick={next?()=>{fixCourseFinish(this.props)}:null}
                >
                确认修改
                </Button2>
                {fixCourseResult?
                    <Alert 
                        icon="&#xe657;"
                        iconColor="#1afa29"
                        content={["课程信息修改成功"]}
                        func={()=>{setFixCourseResult(false)}}
                        />:null}
            </AddNewCourseWrapper>
        )
   
}
componentDidMount(){
    this.props.getList()
    this.props.getFixCourse(this.props.fixKey)
}
componentWillUnmount(){
    this.props.clearAll()
}
}
const mapDispatchToProps=(dispatch)=>{
            return {
                changePage(page){
                    dispatch(actionCreators.changePage(page))
                    dispatch(actionCreators.changeNext())
                },
                changeCourseName(e){
                    dispatch(actionCreators.changeCourseName(e.target.value))
                    dispatch(actionCreators.changeNext())
                },
                changeEduArea(data){
                    dispatch(actionCreators.changeEduArea(data))
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
                changeMonth(e){
                    dispatch(actionCreators.changeMonth(e.target.value))
                    dispatch(actionCreators.changeNext())
                },
                changeMoney(e){
                    dispatch(actionCreators.changeMoney(e.target.value))
                    dispatch(actionCreators.changeNext())
                },
                changePic(e){
                    var reader = new FileReader();
                    reader.readAsDataURL(e.target.files[0]) 
                    reader.onload = function(e) {
                        dispatch(actionCreators.changePicValue(e.target.result))
                    }
                    dispatch(actionCreators.changePic(e.target.value))
                    dispatch(actionCreators.changeNext())
                },
                fixCourseFinish(data){
                    dispatch(actionCreators.fixCourseFinish(data))
                },
                setFixCourseResult(data){
                    dispatch(actionCreators.setFixCourseResult(data))
                    dispatch(actionCreators.clearAll())
                    dispatch(actionCreators.changePage(0))
                    dispatch(actionCreators.getMyCourseList())
                },
                getList(){
                    dispatch(actionCreators.getList())
                },
                getFixCourse(key){
                    dispatch(actionCreators.getFixCourse(key))
                },
                clearAll(){
                    dispatch(actionCreators.clearAll())
                }
            }
        }
const mapStateToProps=(state)=>{
    return {
        username:state.getIn(['login','username']),
        courseName:state.getIn(['h1p3','courseName']),
        eduArea:state.getIn(['h1p3','eduArea']),
        ageL:state.getIn(['h1p3','ageL']),
        ageH:state.getIn(['h1p3','ageH']),
        month:state.getIn(['h1p3','month']),
        money:state.getIn(['h1p3','money']),
        pic:state.getIn(['h1p3','pic']),
        next:state.getIn(['h1p3','next']),
        fixCourseResult:state.getIn(['h1p3','fixCourseResult']),
        picValue:state.getIn(['h1p3','picValue']),
        list:state.getIn(['h1p3','list']),
        fixKey:state.getIn(['h1p3','fixKey']),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(FixCourse));