import React,{ PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import NavBar from '../../../../../common/components/NavBar'
import Alert from '../../../../../common/components/Alert'
import { actionCreators } from './store'
import { SettingWrapper } from './style'
import { actionCreators as loginActionCreators } from '../../../../login/store'

class Setting extends PureComponent{
render(){
        const { changePage,logOut,handleLogOut,setLogOut } = this.props;
         return(
            <SettingWrapper>
                <NavBar
                title="设置"
                func={()=>{changePage(0)}}
                />
                <div style={{height:"45px"}}/>
                <div className="item">
                    <div className="left">
                        仅Wi-Fi观看
                    </div>
                    <div className="right iconfont">
                        &#xe632;
                    </div>
                </div>
                <div className="item">
                    <div className="left">
                        优先观看清晰度
                    </div>
                    <div className="right">
                        超清
                    </div>
                </div>
                <div style={{height:"10px"}}/>
                <div className="item">
                    <div className="left">
                        清除缓存
                    </div>
                    <div className="right">
                        2.88Kb
                    </div>
                </div>
                <div style={{height:"10px"}}/>
                <div className="item">
                    <div className="center" onClick={()=>{setLogOut(true)}}>
                        注销
                    </div>
                </div>
                {logOut?
                    <Alert
                    icon="&#xe657;"
                    iconColor="#1afa29"
                    content={["注销成功"]}
                    func={()=>{handleLogOut(this.props.history)}}
                    />:null}
            </SettingWrapper>
        )
   
}
}
const mapDispatchToProps=(dispatch)=>{
            return {
                changePage(data){
                    dispatch(actionCreators.changePage(data))
                },
                setLogOut(data){
                    dispatch(actionCreators.setLogOut(data))
                },
                handleLogOut(history){
                    dispatch(actionCreators.setLogOut(false))
                    dispatch(loginActionCreators.handleLogOut())
                    history.push("/")
                }
            }
        }
const mapStateToProps=(state)=>{
    return {
        logOut:state.getIn(['h1p4','logOut']),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Setting));