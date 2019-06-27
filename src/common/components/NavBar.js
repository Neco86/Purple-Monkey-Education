import React,{ Component } from 'react'
import { NavBarWrapper } from './style'

class NavBar extends Component{
render(){
         return(
            <NavBarWrapper>
                <i className='iconfont' onClick={()=>{this.props.func()}}>&#xe646;</i>
                <span>{this.props.title}</span>
            </NavBarWrapper>
        )
   
}
// componentDidMount(){
//     window.addEventListener("popstate", this.props.func,false);
//     window.history.pushState(null,null, '');
// }
// componentWillUnmount(){
//     window.removeEventListener("popstate", this.props.func,false);
// }
}
export default NavBar