import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { actionCreators } from './store'
import NavBar from '../../../../../common/components/NavBar'
import Input from '../../../../../common/components/Input'
import Select from '../../../../../common/components/Select'
import TextArea from '../../../../../common/components/TextArea'
import Alert from '../../../../../common/components/Alert'
import { Button2 } from '../../../../../common/style'
import { EditInputWrapper,SelectWrapper } from './style'

class AddPub extends Component{
render(){
        const { changePage,
            title,changeTitle,
            pubType,changePubType,
            content,changeContent,
            pubTypeList,next,editPubFinish,
            editResult
             } = this.props;
         return(
            <div>
                <NavBar
                title="发布公告"
                func={()=>{changePage(4)}}
                />
                <div style={{height:"45px"}}/>
                <EditInputWrapper>
                    <Input
                    title="标题:"
                    value={title}
                    placeholder="请输入标题"
                    onChange={(e)=>{changeTitle(e.target.value)}}
                    />
                    <div style={{height:'55px'}}/>
                    <SelectWrapper>
                        <Select
                        title="公告类型:"
                        list={pubTypeList}
                        value={pubType}
                        placeholder="请选择公告类型"
                        onChange={(data)=>{changePubType(data)}}
                        />
                    </SelectWrapper>
                    <TextArea
                    title="公告内容:"
                    value={content}
                    placeholder="请输入公告内容"
                    onChange={(e)=>{changeContent(e.target.value)}}
                    />
                </EditInputWrapper>
                <Button2
                style={{margin:'20px auto',backgroundColor:next?"#cc99ff":"#f0f0f0"}}
                onClick={next?()=>{editPubFinish(this.props)}:null}
                >
                发布公告
                </Button2>
                {editResult?
                    <Alert
                    icon="&#xe657;"
                    iconColor="#1afa29"
                    content={["公告修改成功"]}
                    func={()=>{this.props.finish()}}
                    />:null}
            </div>
        )
   
}
componentDidMount(){
    this.props.getPubTypeList()
    this.props.clearAll()
}
}
const mapDispatchToProps=(dispatch)=>{
            return {
                changePage(data){
                    dispatch(actionCreators.changePage(data))
                },
                changeTitle(data){
                    dispatch(actionCreators.changeTitle(data))
                    dispatch(actionCreators.changeNext())
                },
                changePubType(data){
                    dispatch(actionCreators.changePubType(data))
                    dispatch(actionCreators.changeNext())
                },
                changeContent(data){
                    dispatch(actionCreators.changeContent(data))
                    dispatch(actionCreators.changeNext())
                },
                setDefalutEditPubPage(){
                    dispatch(actionCreators.setDefalutEditPubPage())
                },
                getPubTypeList(){
                    dispatch(actionCreators.getPubTypeList())
                },
                editPubFinish(data){
                    dispatch(actionCreators.editPubFinish(data))
                },
                finish(){
                    dispatch(actionCreators.setEditPubResult(false))
                    dispatch(actionCreators.changePage(5))                    
                },
                clearAll(){
                    dispatch(actionCreators.clearAll())   
                }
            }
        }
const mapStateToProps=(state)=>{
    return {
        username:state.getIn(['login','username']),
        detailKey:state.getIn(['h1p4','detailKey']),

        title:state.getIn(['h1p4','title']),
        pubType:state.getIn(['h1p4','pubType']),
        content:state.getIn(['h1p4','content']),
        pubTypeList:state.getIn(['h1p4','pubTypeList']),
        next:state.getIn(['h1p4','next']),
        editResult:state.getIn(['h1p4','editResult']),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(AddPub));