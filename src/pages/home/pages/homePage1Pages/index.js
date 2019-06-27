import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { HomePageWrapper } from './style'
import TabBars from '../../components/TabBars'
import { actionCreators  } from './store'
import HomePage1Page1 from './page1'
import HomePage1Page2 from './page2'
import HomePage1Page3 from './page3'
import HomePage1Page4 from './page4'

class HomePage1 extends Component{
render(){
        const { selectedTab,changeTab1,changeTab2,changeTab3,changeTab4 } = this.props;
         return(
            <HomePageWrapper>
                    <TabBars
                    titles={["首页","试听","课程","我的"]}
                    icon1={
                        ()=>(<i 
                          className='iconfont' 
                          style={{
                              display:'inline-block',
                              width:'22px',
                              height:'22px'
                          }}
                          >&#xe61a;</i>)
                    }
                    icon2={
                        ()=>(<i 
                          className='iconfont' 
                          style={{
                              display:'inline-block',
                              width:'22px',
                              height:'22px'
                          }}
                          >&#xe603;</i>)
                    }
                    icon3={
                        ()=>(<i 
                          className='iconfont' 
                          style={{
                              display:'inline-block',
                              width:'22px',
                              height:'22px'
                          }}
                          >&#xe62c;</i>)
                    }
                    icon4={
                        ()=>(<i 
                          className='iconfont' 
                          style={{
                              display:'inline-block',
                              width:'22px',
                              height:'22px'
                          }}
                          >&#xe629;</i>)
                    }
                    page1={()=>(<HomePage1Page1/>)}
                    page2={()=>(<HomePage1Page2/>)}
                    page3={()=>(<HomePage1Page3/>)}
                    page4={()=>(<HomePage1Page4/>)}
                    selectedTab={selectedTab}
                    page1OnPress={()=>{changeTab1()}}
                    page2OnPress={()=>{changeTab2()}}
                    page3OnPress={()=>{changeTab3()}}
                    page4OnPress={()=>{changeTab4()}}
                    />
            </HomePageWrapper>
        )
   
}
componentDidMount(){
    // window.addEventListener("popstate",()=>{},false);
    // window.onpopstate=()=>{}
    // window.addEventListener("popstate",()=>{window.history.pushState(null, null, "/#/home");},false);
    // window.history.pushState(null, null, '/#/home');
}
componentWillUnmount(){
    // window.removeEventListener("popstate",()=>{},false);
}
}
const mapDispatchToProps=(dispatch)=>{
            return {
                changeTab1(){
                  dispatch(actionCreators.changeTab1())
                },
                changeTab2(){
                  dispatch(actionCreators.changeTab2())
                },
                changeTab3(){
                  dispatch(actionCreators.changeTab3())
                },
                changeTab4(){
                  dispatch(actionCreators.changeTab4())
                },
            }
        }
const mapStateToProps=(state)=>{
    return {
        selectedTab:state.getIn(['h1','selectedTab']),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(HomePage1));