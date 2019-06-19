import React,{ PureComponent } from 'react'
import { VideosPageWrapper } from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import Videos from '../../../components/Videos'
import NoItem from '../../../components/NoItem'

class VideosPage extends PureComponent{
render(){
        const { videosList } = this.props; 
         return(
            <VideosPageWrapper>
                {
                videosList.size===0?
                <NoItem
                content={["暂无视频","请等待管理员上传"]}
                />
                :
                <div>
                    {videosList.map((item,index)=>(
                        <Videos
                        key={item.key}
                        title={item.title}
                        imgSrc={item.imgSrc}
                        userImg={item.userImg}
                        username={item.username}
                        commentCount={item.commentCount}
                        onClick={()=>{console.log("clicked videos "+item.key);}}
                        />
                    ))}
                </div>
                }
            </VideosPageWrapper>
        )
   
    }
componentDidMount(){
    this.props.getVideosList()
}
}
const mapDispatchToProps=(dispatch)=>{
            return {
                getVideosList(){
                    dispatch(actionCreators.getVideosList())
                }
            }
        }
const mapStateToProps=(state)=>{
    return {
        videosList:state.getIn(['h1p1','videosList']),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(VideosPage);