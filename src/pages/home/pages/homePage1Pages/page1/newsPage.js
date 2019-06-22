import React,{ PureComponent } from 'react'
import { NewsPageWrapper } from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import News from '../../../components/News'
import NoItem from '../../../components//NoItem'

class NewsPage extends PureComponent{
render(){
        const { newsList } = this.props; 
         return(
            <NewsPageWrapper>
                {
                newsList.size===0?
                <NoItem
                content={["暂无新闻","请等待管理员上传"]}
                />
                :
                <div>
                    {newsList.map((item,index)=>(
                        <News
                        key={item.key}
                        title={item.title}
                        imgSrc={item.imgSrc}
                        userImg={item.userImg}
                        username={item.username}
                        time={item.time}
                        commentCount={item.commentCount}
                        onClick={()=>{this.props.setNewsClickKey(item.key)}}
                        />
                    ))}
                </div>
                }
            </NewsPageWrapper>
        )
   
    }
componentDidMount(){
    this.props.getNewsList()
}
}
const mapDispatchToProps=(dispatch)=>{
            return {
                getNewsList(){
                    dispatch(actionCreators.getNewsList())
                },
                setNewsClickKey(key){
                    dispatch(actionCreators.setNewsClickKey(key))
                    dispatch(actionCreators.changePage(4))
                }
            }
        }
const mapStateToProps=(state)=>{
    return {
        newsList:state.getIn(['h1p1','newsList']),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(NewsPage);