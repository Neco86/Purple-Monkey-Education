import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { actionCreators } from './store'
import NavBar from '../../../../../common/components/NavBar'
import Alert from '../../../../../common/components/Alert'
import NoItem from '../../../components/NoItem'
import { PubWrapper } from './style'

class Publish extends Component{
render(){
        const { changePage,pubList,deleteItem,username,deleteResult,
            setDeleteItemResult,seeDetail
         } = this.props;
         return(
            <PubWrapper>
                <NavBar
                title="我的公告"
                func={()=>{changePage(0)}}
                />
                <div style={{height:"45px"}}/>
                {pubList.length===0?
                    <NoItem
                    content={["暂无公告","快来发布第一条公告吧"]}
                    />:null}
                {
                    pubList.map((item)=>(
                        <div className="item" key={item.key}>
                            <div className="top">
                                <div className="title">{item.title}</div>
                                <div>
                                    <div className="left">{item.type}</div>
                                    <div className="right">{item.time}</div>
                                </div>
                            </div>
                            <div className="bottom">
                                <div className="iconfont left" onClick={()=>{seeDetail(item.key,username);changePage(5);}}>&#xe60f;查看公告</div>
                                <div className="iconfont right" onClick={()=>{deleteItem(item.key,username,pubList)}}>&#xe63c;删除公告</div>
                            </div>
                        </div>
                        ))
                }
                {deleteResult?
                    <Alert
                    icon="&#xe657;"
                    iconColor="#1afa29"
                    content={["公告删除成功"]}
                    func={()=>{setDeleteItemResult(false)}}
                    />:null}
                <div className="add iconfont" onClick={()=>{changePage(7)}}>
                    &#xe74a;
                </div>
            </PubWrapper>
        )
   
}
componentDidMount(){
    this.props.getPubList(this.props.login)
}
}
const mapDispatchToProps=(dispatch)=>{
            return {
                changePage(data){
                    dispatch(actionCreators.changePage(data))
                },
                getPubList(username){
                    dispatch(actionCreators.getPubList(username))
                },
                deleteItem(key,username,list){
                    var pubList=JSON.parse(JSON.stringify(list))
                    for (var i in pubList)
                        if (pubList[i].key===key)
                            pubList.splice(i,1)
                    // console.log(pubList)
                    dispatch(actionCreators.deleteItem(key,username,pubList))
                },
                setDeleteItemResult(data){
                    dispatch(actionCreators.setDeleteItemResult(data))
                },
                seeDetail(key,username){
                    dispatch(actionCreators.seeDetail(key,username))
                }
            }
        }
const mapStateToProps=(state)=>{
    return {
        username:state.getIn(['login','username']),
        pubList:state.getIn(['h1p4','pubList']),
        deleteResult:state.getIn(['h1p4','deleteResult']),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Publish));