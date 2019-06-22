import React,{ PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { actionCreators } from './store'
import { SearchDetailWrapper } from './style'
import NavBar from '../../../../../common/components/NavBar'
import Tab from '../../../components/Tab'
import NoItem from '../../../components/NoItem'

class SearchDetail extends PureComponent{
render(){
        const { changePage,searchDetail,comments,dir } = this.props;
         return(
            <SearchDetailWrapper>
                <NavBar
                title="课程详情"
                func={()=>{changePage(1)}}
                />
                <div style={{height:"45px"}}/>
                <img src={searchDetail.imgSrc} alt="" style={{height:"210px",width:"100%"}}/>
                <Tab
                titles={["详情","目录"]}
                tabPage={0}
                onChange={(tab,index)=>{}}
                page1={()=>(<div>
                                <div className="itemWrapper" style={{height:"75px"}}>
                                    <div style={{fontSize:"16px"}}>{searchDetail.title}</div>
                                    <div style={{marginTop:"10px"}}>
                                        <span style={{marginRight:"25px",color:"#cc99ff"}}>{searchDetail.cost==="0"?"免费":searchDetail.cost+"紫猴币"}</span>
                                        <span style={{marginRight:"25px",color:"#aaaaaa"}}>{searchDetail.person+"人报名"}</span>
                                        <span style={{marginRight:"25px",color:"#aaaaaa"}}>{"综合评分"+searchDetail.grade}</span>
                                    </div>
                                </div>
                                <div className="itemWrapper" style={{height:"140px"}} onClick={()=>{this.props.changePage(3)}}>
                                    <div style={{fontSize:"16px"}}>{searchDetail.type==="type1"?"教育机构介绍":"教师介绍"}</div>       
                                    <div style={{display:"flex"}}>
                                        <div style={{width:"80px"}}>
                                            <div className="img">
                                                <img src={searchDetail.userImg} alt=""/>
                                            </div>
                                        </div>
                                        <div style={{flex:"1"}}>
                                            <div style={{margin:"25px 0 0 15px"}}>
                                                <div style={{fontSize:"16px"}}>{searchDetail.username}</div>
                                                <div style={{color:"#7f7f7f",marginTop:"5px"}}>{searchDetail.userIntro}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="itemWrapper">
                                   <div style={{fontWeight:"500"}}>
                                        {"全部评论 ("+comments.length+")"}
                                   </div>
                                   {(comments.length===0)?
                                    <div style={{height:"180px"}}>
                                        <NoItem content={["评论区空空如也","快来发表第一条评论吧"]}/>
                                    </div>
                                    :
                                    <div style={{padding:"15px"}}>
                                        {comments.map((item,index)=>
                                            (<div key={index} style={{marginTop:"15px"}}>
                                                <img src={item.userImg} alt="" style={{width:"20px",height:"20px",borderRadius:"50%"}}/>
                                                <span style={{display:"inline-block",position:"relative",top:"-4px",left:"5px"}}>{item.username}</span>
                                                <span style={{float:"right",color:"#aaa"}}>{item.time[1]}</span>
                                                <span style={{float:"right",marginRight:"5px",color:"#aaa"}}>{item.time[0]}</span>
                                                <div style={{marginTop:"10px"}}>
                                                    {item.comment}
                                                </div>
                                            </div>)
                                            )}
                                    </div>
                                    }
                                </div>
                            </div>)}
                page2={()=>(<div>
                                {(dir.length===0)?
                                    <div style={{height:"180px"}}>
                                        <NoItem content={["课程目录为空","请等待课程发布者发布课程"]}/>
                                    </div>
                                    :
                                    <div>
                                        {dir.map((item,index)=>(
                                             <div key={index} style={{padding:"10px 0 0 10px",backgroundColor:"white",display:"flex"}}>
                                                <div style={{width:"30px",textAlign:"center",color:"#aaa"}}>
                                                    {index+1<10?"0"+(index+1):index+1}
                                                </div>
                                                <div style={{flex:"1",borderBottom:"1px solid #f2f2f2"}}>
                                                    <div>{item.title}</div>
                                                    <div style={{margin:"10px 0 0 15px",color:"#7f7f7f"}}>
                                                        <span style={{marginRight:"15px"}}>{item.time[0]}</span>
                                                        <span style={{marginRight:"15px"}}>{item.time[1]}</span>
                                                        <span>{item.time[2]}</span>
                                                    </div>
                                                    <div style={{margin:"10px 0 0 15px",color:"#aaaaaa"}}>
                                                        {item.des}
                                                    </div>
                                                    <div style={{margin:"10px 0 10px 15px",color:"#c9f"}}>
                                                        <div onClick={()=>{console.log(item.fileSrc)}}>{item.fileName}</div>
                                                    </div>
                                                </div>
                                             </div>
                                            ))}
                                    </div>
                                }
                            </div>)}
                />
            </SearchDetailWrapper>
        )
    }
componentDidMount(){
    this.props.getSearchDetail(this.props.searchClickKey)
}
}
const mapDispatchToProps=(dispatch)=>{
            return {
                getSearchDetail(key){
                    dispatch(actionCreators.getSearchDetail(key))
                },
                changePage(page){
                    dispatch(actionCreators.changePage(page))
                },
            }
        }
const mapStateToProps=(state)=>{
    return {
        searchClickKey:state.getIn(['h1p1','searchClickKey']),
        searchDetail:state.getIn(['h1p1','searchDetail']),
        comments:state.getIn(['h1p1','comments']),
        dir:state.getIn(['h1p1','dir']),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(SearchDetail));