import React,{ Component,Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import NavBar from '../../../../../common/components/NavBar'
import { actionCreators } from './store'
import { MyInfoWrapper } from './style'
import Input from './Input'

class MyInfo extends Component{
render(){
        const { changePage,moreInfo } = this.props;
         return(
            <MyInfoWrapper>
                {moreInfo.type==="type1"?
                <Fragment>
                    <div className="navBarWrapper">
                        <NavBar
                        title="我的信息"
                        func={()=>{changePage(0)}}
                        />
                        <div style={{height:"45px"}}/>
                        <div className="fix" onClick={()=>{changePage(3)}}>
                            编辑
                        </div>
                    </div>
                    <div className="inputWrapper">
                        <Input
                        title="姓名:"
                        value={moreInfo.username}
                        />
                        <Input
                        title="性别:"
                        value={moreInfo.sex}
                        />
                        <Input
                        title="年龄:"
                        value={moreInfo.age}
                        type="number"
                        />
                        <Input
                        title="身份证号:"
                        value={moreInfo.id}
                        type="number"
                        />
                        <div style={{height:"10px",backgroundColor:"#f9f9f9"}}/>
                        <div style={{height:"20px"}}/>
                        <Input
                        title="教育领域:"
                        value={moreInfo.eduArea}
                        />
                        <Input
                        title="从教年限:"
                        value={moreInfo.teachAge}
                        />
                        <Input
                        title="适龄下限:"
                        value={moreInfo.ageL}
                        type="number"
                        />
                        <Input
                        title="适龄上限:"
                        value={moreInfo.ageH}
                        type="number"
                        />
                        <div style={{height:"10px",backgroundColor:"#f9f9f9"}}/>
                        <div style={{height:"20px"}}/>
                        <Input
                        title="联系方式:"
                        value={moreInfo.tel}
                        type="number"
                        />
                    </div> 
                </Fragment>
                :null}
                {moreInfo.type==="type2"?
                <Fragment>
                    <div className="navBarWrapper">
                        <NavBar
                        title="我的信息"
                        func={()=>{changePage(0)}}
                        />
                        <div style={{height:"45px"}}/>
                        <div className="fix" onClick={()=>{changePage(2)}}>
                            编辑
                        </div>
                    </div>
                    <div className="inputWrapper">
                        <Input
                        title="机构名:"
                        value={moreInfo.username}
                        />
                        <div style={{height:"10px",backgroundColor:"#f9f9f9"}}/>
                        <div style={{height:"20px"}}/>
                        <Input
                        title="教育领域:"
                        value={moreInfo.eduArea}
                        />
                        <div style={{height:"10px",backgroundColor:"#f9f9f9"}}/>
                        <div style={{height:"20px"}}/>
                        <Input
                        title="店面地址:"
                        value={moreInfo.place}
                        />
                        <Input
                        title="详细地址:"
                        value={moreInfo.detailPlace}
                        />
                        <Input
                        title="联系方式:"
                        value={moreInfo.tel}
                        type="number"
                        />
                        <div style={{height:"10px",backgroundColor:"#f9f9f9"}}/>
                        <div style={{height:"20px"}}/>
                        <Input
                        title="适龄下限:"
                        value={moreInfo.ageL}
                        type="number"
                        />
                        <Input
                        title="适龄上限:"
                        value={moreInfo.ageH}
                        type="number"
                        />
                    </div> 
                </Fragment>
                :null} 
            </MyInfoWrapper>
        )
   
}
componentDidMount(){
    this.props.getMoreInfo(this.props.username)
}
}
const mapDispatchToProps=(dispatch)=>{
            return {
                changePage(data){
                    dispatch(actionCreators.changePage(data))
                },
                getMoreInfo(username){
                    dispatch(actionCreators.getMoreInfo(username))
                }
            }
        }
const mapStateToProps=(state)=>{
    return {
        username:state.getIn(['login','username']),
        moreInfo:state.getIn(['h1p4','moreInfo']),

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(MyInfo));