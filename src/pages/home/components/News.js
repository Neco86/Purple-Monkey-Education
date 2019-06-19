import React,{ PureComponent } from 'react'
import { NewsWrapper } from './style'

class News extends PureComponent{
render(){
        const { title,userImg,imgSrc,username,time,commentCount,onClick } = this.props;
         return(
            <NewsWrapper onClick={()=>{onClick()}}>
                <div className="newsTop">
                    <div className="left">
                        {title}
                    </div>
                    <div className="right">
                        <div className="img">
                            <img src={imgSrc} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="newsBottom">
                    <div className="img">
                         <img src={userImg} alt=""/>   
                    </div>
                    <span>{username}</span>
                    <span>{time[0]}</span>
                    <span>{time[1]}</span>
                    <span>{commentCount}评论</span>
                </div>
            </NewsWrapper>
        )
   
}
}
export default News