import React,{ PureComponent } from 'react'
import { SelectWrapper } from './style'

class Select extends PureComponent{
    state = {
        show: "none",
        value:this.props.placeholder
      }
render(){
         return(
            <SelectWrapper>
                <label htmlFor={this.props.title}>{this.props.title}</label>
                <div style={{position:'relative',flex:'1'}}>
                    <span>{this.props.error}</span>
                    <div 
                    className="choose" 
                    onClick={()=>{this.setState({show:"block"})}}
                    style={{color:this.props.placeholder===this.state.value?"grey":"black"}}
                    >
                        {this.props.value===""?this.state.value:this.props.value}
                        <i className='iconfont'>&#xe646;</i>
                    </div>
                    <ul id={this.props.title} style={{display:this.state.show}}>
                        {
                            this.props.list.map((item,index)=>(
                                <li
                                onClick={()=>{this.setState({show:"none"});this.setState({value:item});this.props.onChange(item)}}
                                key={index}
                                >{item}</li>
                                ))
                        }
                    </ul>
                </div>
            </SelectWrapper>
        )
   
}
}
export default Select