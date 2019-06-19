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
                    placeholder={this.props.placeholder}
                    value={this.props.value}
                    onChange={(e)=>{this.props.onChange(e)}}
                    type={this.props.type}
                    onFocus={()=>{this.props.onFocus()}}
                    onBlur={()=>{this.props.onBlur()}}
                    onKeyPress={(e)=>{this.props.onKeyPress(e)}}
                    />
                    <span>{this.props.error}</span>
                </div>
            </InputWrapper>
        )
   
}
}
export default Input