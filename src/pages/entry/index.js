import React,{ PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import { BgWrapper,Button1 } from '../../common/style'
import Img from '../../statics/logo.png'
import { Wrapper } from './style'
class Entry extends PureComponent{
render(){
        const { history } = this.props;
         return(
            <BgWrapper>
                <Wrapper>
                    <img src={Img} alt=""/>
                    <Button1 style={{margin:"30px auto"}} onClick={()=>{history.push('/register')}}>注册</Button1>
                    <Button1 style={{margin:"0 auto"}} onClick={()=>{history.push('/login')}}>登录</Button1>
                </Wrapper>
            </BgWrapper>
        )
   
}
}

export default withRouter(Entry);