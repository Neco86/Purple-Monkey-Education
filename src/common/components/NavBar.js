import React,{ PureComponent } from 'react'
import { NavBarWrapper } from './style'

class NavBar extends PureComponent{
render(){
         return(
            <NavBarWrapper>
                <div onClick={()=>{this.props.func()}}>
                    <i className='iconfont'>&#xe646;</i>
                    <span>{this.props.title}</span>
                </div>
            </NavBarWrapper>
        )
   
}
}
export default NavBar