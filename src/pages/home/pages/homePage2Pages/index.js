import React,{ PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { HomePageWrapper } from './style'
import TabBars from '../../components/TabBars'
// import { actionCreators } from './store'
import HomePage2Page1 from './page1'
import HomePage2Page2 from './page2'
import HomePage2Page3 from './page3'
import HomePage2Page4 from './page4'

class HomePage2 extends PureComponent{
render(){
         return(
            <HomePageWrapper>
                <div className="tabBar">
                    <TabBars
                    titles={["首页","分类","课程表","我的"]}
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
                          >&#xe638;</i>)
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
                    page1={()=>(<HomePage2Page1/>)}
                    page2={()=>(<HomePage2Page2/>)}
                    page3={()=>(<HomePage2Page3/>)}
                    page4={()=>(<HomePage2Page4/>)}
                    selectedTab="tab1"
                    />
                </div>
            </HomePageWrapper>
        )
   
}
}
const mapDispatchToProps=(dispatch)=>{
            return {
                addClassBack(history){
                    // dispatch(actionCreators.addClassBack())
                }
            }
        }
const mapStateToProps=(state)=>{
    return {
        // tabBarPage:state.getIn(['home','tabBarPage']),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(HomePage2));