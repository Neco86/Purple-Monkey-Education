import React,{ PureComponent } from 'react'
import { connect } from 'react-redux'
import { Wrapper } from '../../common/style'
import HomePage1 from './pages/homePage1Pages'
import HomePage2 from './pages/homePage2Pages'

class Home extends PureComponent{
render(){
        const { type } = this.props;
         return(
            <Wrapper>
                {type==="type1"?<HomePage1/>:null}
                {type==="type2"?<HomePage2/>:null}
            </Wrapper>
        )
   
    }
}
const mapStateToProps=(state)=>{
    return {
        type:state.getIn(['login','type']),
    }
}
export default connect(mapStateToProps,null)(Home);