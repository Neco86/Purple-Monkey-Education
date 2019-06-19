import React,{ PureComponent } from 'react'
import { NoItemWrapper } from './style'

class NoItem extends PureComponent{
render(){
         return(
            <NoItemWrapper>
                <div className="no">
                    <i className='iconfont'>&#xe60a;</i>
                    {this.props.content.map((item,index)=>(<div key={index}>{item}</div>))}
                </div>
            </NoItemWrapper>
        )
   
}
}
export default NoItem