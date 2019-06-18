import React,{ PureComponent } from 'react'
import { AlertWrapper,AlertBg } from './style'

class Alert extends PureComponent{
render(){
         return(
            <AlertWrapper onClick={()=>{this.props.func()}}>
                <AlertBg/>
                <div className="alert">
                    <i 
                    className='iconfont' 
                    style={{color:this.props.iconColor,fontSize:'30px'}}>
                        {this.props.icon}
                    </i>
                    {this.props.content.map((item,index)=>(<div key={index}>{item}</div>))}
                </div>
            </AlertWrapper>
        )
   
}
}
export default Alert