import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { actionCreators } from './store'
import { TryWrapper } from './style'
import Alert from '../../../../../common/components/Alert'
import NoItem from '../../../components/NoItem'

class HomePage1Page2 extends Component{
render(){
        const { tryList,agree,disAgree,agreeResult,disAgreeResult } = this.props;
         return(
            <TryWrapper>
                { tryList.map((item)=>(<div className="tryItem" key={item.key}>
                        <div className="top">
                            <img src={item.imgSrc} alt=""/>
                            <div className="right">
                                <div className="title">{item.title}</div>
                                <div>{item.type}</div>
                            </div>
                        </div>
                        {item.apply.map((item2)=>(<div className="bottom" key={item2.key}>
                                    <img src={item2.userImg} alt=""/>
                                    <span>{item2.username}</span>
                                    <div className="right">
                                        <div className="button1" onClick={()=>{agree(item.key,item2.key,tryList)}}>同意</div>
                                        <div className="button2" onClick={()=>{disAgree(item.key,item2.key,tryList)}}>拒绝</div>
                                    </div>
                                </div>))}
                    </div>)) }
                {tryList.length===0?
                    <div style={{overflow:"hidden",position:"relative",top:"20%"}}> 
                        <NoItem content={["暂无试听申请"]}/>
                    </div>
                    :null}
                {agreeResult?<Alert 
                    icon="&#xe657;" 
                    iconColor="#18fb28"  
                    content={["已同意试听申请"]}
                    func={()=>{this.props.setAgreeResult(false)}}
                    />:null}
                {disAgreeResult?<Alert 
                    icon="&#xe657;" 
                    iconColor="#18fb28"  
                    content={["已拒绝试听申请"]}
                    func={()=>{this.props.setDisAgreeResult(false)}}
                    />:null}
                
            </TryWrapper>
        )
   
}
componentDidMount(){
    this.props.getTry(this.props.username)
}
}
const mapDispatchToProps=(dispatch)=>{
            return {
                getTry(username){
                    dispatch(actionCreators.getTry(username))
                },
                agree(key1,key2,list){
                    var tryList=list;
                    for (var i in tryList)
                        if (tryList[i].key===key1)
                            for (var j in tryList[i].apply)
                                if (tryList[i].apply[j].key===key2)
                                    {
                                        tryList[i].apply.splice(j,1);
                                        if (tryList[i].apply.length===0)
                                            tryList.splice(i,1)
                                    }
                    dispatch(actionCreators.agree(key1,key2,tryList))
                },
                disAgree(key1,key2,list){
                    var tryList=list;
                    for (var i in tryList)
                        if (tryList[i].key===key1)
                            for (var j in tryList[i].apply)
                                if (tryList[i].apply[j].key===key2)
                                    {
                                        tryList[i].apply.splice(j,1);
                                        if (tryList[i].apply.length===0)
                                            tryList.splice(i,1)
                                    }
                    dispatch(actionCreators.disAgree(key1,key2,tryList))
                },
                setAgreeResult(data){
                    dispatch(actionCreators.setAgreeResult(data))
                },
                setDisAgreeResult(data){
                    dispatch(actionCreators.setDisAgreeResult(data))
                },
            }
        }
const mapStateToProps=(state)=>{
    return {
        username:state.getIn(['login','username']),
        tryList:state.getIn(['h1p2','tryList']),
        agreeResult:state.getIn(['h1p2','agreeResult']),
        disAgreeResult:state.getIn(['h1p2','disAgreeResult']),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(HomePage1Page2));