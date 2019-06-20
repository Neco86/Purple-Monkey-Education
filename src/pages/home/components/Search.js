import React,{ PureComponent } from 'react'
import { SearchItemWrapper } from './style'

class Search extends PureComponent{
render(){
        const { item } = this.props;
         return(
            <SearchItemWrapper onClick={()=>{this.props.onClick(item.key)}}>
                <div className="left">
                    <img src={item.imgSrc} alt=""/>
                </div>
                <div className="right">
                    <div>{item.title}</div>
                    <div className="left">
                        {item.cost==="0"?"免费":item.cost+"紫猴币"}
                    </div>
                    <div className="right">
                        {item.person}人报名
                    </div>
                </div>
            </SearchItemWrapper>
        )
   
}
}
export default Search