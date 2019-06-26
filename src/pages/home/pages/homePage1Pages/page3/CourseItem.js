import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { actionCreators } from './store'
import Input from '../../../../../common/components/Input'
import { Button1Wrapper,Button2Wrapper } from './style'

class CourseItem extends Component{
render(){
        const { iCourseName,changeICourseName,
            iPlace,chanegIPlace,
            iTime,changeITime,
            iLong,changeILong,
            iTeacher,changeITeacher,
            iWork,changeIWork,type,error,iKey,iNext
             } = this.props;
         return(
            <div>
                <div className="inputWrapper">
                  <Input
                  title="课程名:"
                  value={iCourseName}
                  onChange={(e)=>{changeICourseName(e.target.value,iKey)}}
                  error={error}
                  />
                  <Input
                  title="上课地点:"
                  value={iPlace}
                  onChange={(e)=>{chanegIPlace(e.target.value)}}
                  />
                  <Input
                  title="上课时间:"
                  value={iTime}
                  onChange={(e)=>{changeITime(e.target.value)}}
                  />
                  <Input
                  title="上课时长:"
                  value={iLong}
                  onChange={(e)=>{changeILong(e.target.value)}}
                  />
                  <Input
                  title="任课教师:"
                  value={iTeacher}
                  onChange={(e)=>{changeITeacher(e.target.value)}}
                  />
                  <Input
                  title="作业:"
                  value={iWork}
                  onChange={(e)=>{changeIWork(e.target.value)}}
                  />
                </div>
                {type==="type1"?
                <div>
                    <Button1Wrapper>
                        {iNext?
                          <div 
                          className="button" 
                          style={{backgroundColor:"#c9f"}}
                          onClick={()=>{this.props.change?this.props.change():console.log();}}
                          >修改</div>
                          :
                          <div 
                          className="button" 
                          style={{backgroundColor:"#f0f0f0"}}
                          >修改</div>
                        }
                        
                        <div 
                        className="button" 
                        style={{backgroundColor:"#d9001b"}}
                        onClick={()=>{this.props.delete?this.props.delete():console.log();}}
                        >删除</div>
                    </Button1Wrapper>
                </div>:null}
                {type==="type2"?
                <div>
                    <Button2Wrapper>
                        {iNext?
                          <div 
                        className="button"
                        onClick={()=>{this.props.add?this.props.add():console.log();}}
                        >确认添加</div>
                        :<div 
                        className="button"
                        style={{backgroundColor:"#f0f0f0"}}
                        >确认添加</div>}
                    </Button2Wrapper>
                </div>:null}
              </div>
        )
}
}
const mapDispatchToProps=(dispatch)=>{
            return {
                changeICourseName(value,iKey){
                    dispatch(actionCreators.changeICourseName(value))
                    dispatch(actionCreators.changeError(value,iKey))
                    dispatch(actionCreators.changeINext())
                },
                chanegIPlace(value){
                    dispatch(actionCreators.chanegIPlace(value))
                    dispatch(actionCreators.changeINext())
                },
                changeITime(value){
                    dispatch(actionCreators.changeITime(value))
                    dispatch(actionCreators.changeINext())
                },
                changeILong(value){
                    dispatch(actionCreators.changeILong(value))
                    dispatch(actionCreators.changeINext())
                },
                changeITeacher(value){
                    dispatch(actionCreators.changeITeacher(value))
                    dispatch(actionCreators.changeINext())
                },
                changeIWork(value){
                    dispatch(actionCreators.changeIWork(value))
                    dispatch(actionCreators.changeINext())
                }
            }
        }
const mapStateToProps=(state)=>{
    return {
        iCourseName:state.getIn(['h1p3','iCourseName']),
        iPlace:state.getIn(['h1p3','iPlace']),
        iTime:state.getIn(['h1p3','iTime']),
        iLong:state.getIn(['h1p3','iLong']),
        iTeacher:state.getIn(['h1p3','iTeacher']),
        iWork:state.getIn(['h1p3','iWork']),
        iKey:state.getIn(['h1p3','iKey']),
        courseDetail:state.getIn(['h1p3','courseDetail']),
        error:state.getIn(['h1p3','error']),
        iNext:state.getIn(['h1p3','iNext']),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(CourseItem));