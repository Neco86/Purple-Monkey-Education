import React,{ PureComponent } from 'react'
import { PickerWrapper } from './style'
import { PickerView } from 'antd-mobile';

class Picker extends PureComponent{
render(){
         return(
            <PickerWrapper>
                <div className="left">
                    {this.props.title}
                </div>
                <div className="right">
                    <PickerView
                      data={this.props.data}
                      value={this.props.value}
                      onChange={(data)=>{this.props.onChange(data)}}
                    />
                </div>
            </PickerWrapper>
        )
   
}
}
export default Picker