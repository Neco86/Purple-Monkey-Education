import React,{ PureComponent } from 'react'
import { InputWrapper } from './style'

class Input extends PureComponent{
render(){
         return(
            <InputWrapper>
                <label htmlFor={this.props.title}>{this.props.title}</label>
                <div style={{position:'relative',flex:'1'}}>
                    <input 
                    id={this.props.title} 
                    value={this.props.value}
                    onChange={()=>{}}
                    type={this.props.type}
                    disabled="false"
                    />
                    <span>{this.props.error}</span>
                </div>
            </InputWrapper>
        )
   
}
}
export default Input