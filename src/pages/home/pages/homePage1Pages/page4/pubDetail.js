import React,{ PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { actionCreators } from './store'
import { PubDetailWrapper } from './style'
import NavBar from '../../../../../common/components/NavBar'

class PubDetail extends PureComponent{
render(){
        const { changePage,detail } = this.props;
         return(
            <PubDetailWrapper>
                <div className="navBarWrapper">
                    <NavBar
                    title="我的公告"
                    func={()=>{changePage(4)}}
                    />
                    <div style={{height:"45px"}}/>
                    <div className="fix" onClick={()=>{changePage(6)}}>
                        编辑
                    </div>
                    <div className="item">
                        <div className="top">
                            <div className="title">{detail.title}</div>
                            <div>
                                <div className="left">{detail.type}</div>
                                <div className="right">{detail.time}</div>
                            </div>
                        </div>
                        <div className="bottom">
                            {detail.content}
                        </div>
                    </div>
                </div>
            </PubDetailWrapper>
        )
   
}
componentDidMount(){
    this.props.getPubDetail(this.props.username,this.props.detailKey)
}
}
const mapDispatchToProps=(dispatch)=>{
            return {
                changePage(data){
                    dispatch(actionCreators.changePage(data))
                },
                getPubDetail(username,key){
                    dispatch(actionCreators.getPubDetail(username,key))
                }
            }
        }
const mapStateToProps=(state)=>{
    return {
        username:state.getIn(['login','username']),
        detailKey:state.getIn(['h1p4','detailKey']),
        detail:state.getIn(['h1p4','detail']),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(PubDetail));