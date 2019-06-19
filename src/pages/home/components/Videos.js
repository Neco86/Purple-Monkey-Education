import React,{ PureComponent } from 'react'
import { VideosWrapper } from './style'

class Videos extends PureComponent{
render(){
        const { title,userImg,imgSrc,username,commentCount,onClick } = this.props;
         return(
            <VideosWrapper onClick={()=>{onClick()}}>
                <div className="videosTop">
                    <div className="img">
                        <img src={imgSrc} alt=""/>
                    </div>
                    <div className="title">
                        {title}
                    </div>
                    <div className="iconfont">
                        &#xe600;
                    </div>
                </div>
                <div className="videosBottom">
                    <div className="left">
                        <div className="img">
                            <img src={userImg} alt=""/>
                        </div>
                        <span>{username}</span>
                    </div>
                    <div className="right">
                        <i className='iconfont'>&#xe607;</i>
                        <span>{commentCount}</span>
                    </div>
                </div>
            </VideosWrapper>
        )
   
}
}
export default Videos