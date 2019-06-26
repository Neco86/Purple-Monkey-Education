import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { actionCreators } from './store'
import NavBar from '../../../../../common/components/NavBar'
import { TablePageWrapper } from './style'

class TablePage extends Component{
render(){
        const { changePage,day1,day2,day3,day4,day5,day6,day7 } = this.props;
         return(
            <TablePageWrapper style={{height:"100%"}}>
                <NavBar title="日历" func={()=>{changePage(0)}}/>
                <div style={{height:"45px"}}/>
                <div style={{height:"calc(100% - 45px)"}} className="itemWrapper">
                    <div className="item">
                        {day1.map((item,index)=>(
                            <div className="course" key={index}>
                                <div>{item[0]}</div>
                                <div>{item[1]}</div>
                                <div>{item[2]}</div>
                            </div>
                            ))}
                        
                    </div>
                    <div className="item">
                        {day2.map((item,index)=>(
                            <div className="course" key={index}>
                                <div>{item[0]}</div>
                                <div>{item[1]}</div>
                                <div>{item[2]}</div>
                            </div>
                            ))}
                        
                    </div>
                    <div className="item">
                        {day3.map((item,index)=>(
                            <div className="course" key={index}>
                                <div>{item[0]}</div>
                                <div>{item[1]}</div>
                                <div>{item[2]}</div>
                            </div>
                            ))}
                        
                    </div>
                    <div className="item">
                        {day4.map((item,index)=>(
                            <div className="course" key={index}>
                                <div>{item[0]}</div>
                                <div>{item[1]}</div>
                                <div>{item[2]}</div>
                            </div>
                            ))}
                        
                    </div>
                    <div className="item">
                        {day5.map((item,index)=>(
                            <div className="course" key={index}>
                                <div>{item[0]}</div>
                                <div>{item[1]}</div>
                                <div>{item[2]}</div>
                            </div>
                            ))}
                        
                    </div>
                    <div className="item">
                        {day6.map((item,index)=>(
                            <div className="course" key={index}>
                                <div>{item[0]}</div>
                                <div>{item[1]}</div>
                                <div>{item[2]}</div>
                            </div>
                            ))}
                        
                    </div>
                    <div className="item" style={{marginRight:"0"}}>
                        {day7.map((item,index)=>(
                            <div className="course" key={index}>
                                <div>{item[0]}</div>
                                <div>{item[1]}</div>
                                <div>{item[2]}</div>
                            </div>
                            ))}
                        
                    </div>
                </div>
            </TablePageWrapper>
        )
   
}
componentDidMount(){
    this.props.getTableList(this.props.username)
}
}
const mapDispatchToProps=(dispatch)=>{
            return {
                changePage(page){
                    dispatch(actionCreators.changePage(page))
                },
                getTableList(username){
                    dispatch(actionCreators.getTableList(username))
                }
            }
        }
const mapStateToProps=(state)=>{
    return {
        username:state.getIn(['login','username']),
        day1:state.getIn(['h1p3','day1']),
        day2:state.getIn(['h1p3','day2']),
        day3:state.getIn(['h1p3','day3']),
        day4:state.getIn(['h1p3','day4']),
        day5:state.getIn(['h1p3','day5']),
        day6:state.getIn(['h1p3','day6']),
        day7:state.getIn(['h1p3','day7'])
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(TablePage));