import React,{ PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import NavBar from '../../../../../common/components/NavBar'
import Input from '../../../../../common/components/Input'
import Select from '../../../../../common/components/Select'
import Alert from '../../../../../common/components/Alert'
import { actionCreators } from './store'
import { AddNewCourseWrapper,SelectWrapper } from './style'
import { Button2 } from '../../../../../common/style'
class AddNewCourse extends PureComponent{
render(){
        const { changePage,
            courseName,changeCourseName,
            eduArea,changeEduArea,
            money,changeMoney,
            month,changeMonth,
            ageL,changeAgeL,
            ageH,changeAgeH,
            pic,changePic,addCourseFinish,
            next,addCourseResult,setAddCourseResult
             } = this.props;
         return(
            <AddNewCourseWrapper>
                <NavBar title="添加新课程" func={()=>{changePage(0)}}/>
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
                        list={["xx","yy"]}
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
                        />
                    </div>
                </div>
                <Button2
                style={{margin:'20px auto',backgroundColor:next?"#cc99ff":"#f0f0f0"}}
                onClick={next?()=>{addCourseFinish(this.props)}:null}
                >
                添加新课程
                </Button2>
                {addCourseResult?
                    <Alert 
                        icon="&#xe657;"
                        iconColor="#1afa29"
                        content={["新课程添加成功"]}
                        func={()=>{setAddCourseResult(false)}}
                        />:null}
            </AddNewCourseWrapper>
        )
   
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
                addCourseFinish(data){
                    dispatch(actionCreators.addCourseFinish(data))
                },
                setAddCourseResult(data){
                    dispatch(actionCreators.setAddCourseResult(data))
                    dispatch(actionCreators.clearAll())
                    dispatch(actionCreators.changePage(0))
                    dispatch(actionCreators.getMyCourseList())
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
        addCourseResult:state.getIn(['h1p3','addCourseResult']),
        picValue:state.getIn(['h1p3','picValue']),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(AddNewCourse));