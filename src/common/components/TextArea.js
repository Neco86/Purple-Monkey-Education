import React,{ PureComponent } from 'react'
import { TextAreaWrapper } from './style'

class TextArea extends PureComponent{
render(){
         return(
            <TextAreaWrapper>
                <div className="left">
                    {this.props.title}
                </div>
                <div className="right">
                    <textarea 
                    rows="3" 
                    onChange={(e)=>{this.props.onChange(e)}}
                    value={this.props.value}
                    />
                </div>
            </TextAreaWrapper>
        )
   
}
}
export default TextArea