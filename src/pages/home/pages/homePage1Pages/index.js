import React,{ PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { HomePageWrapper } from './style'
import TabBars from '../../components/TabBars'
import { actionCreators as P1actionCreators } from './page1/store'
import HomePage1Page1 from './page1'
import HomePage1Page2 from './page2'
import HomePage1Page3 from './page3'
import HomePage1Page4 from './page4'
import Search from '../../components/Search'

class HomePage1 extends PureComponent{
render(){
        const { goSearch,search,backFunc } = this.props;
         return(
            <HomePageWrapper>
              {!goSearch?
                <div className="tabBar">
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
                    selectedTab="tab1"
                    />
                </div>
                :
                <Search
                search={search}
                backFunc={()=>{backFunc()}}
                />
              }
            </HomePageWrapper>
        )
   
}
}
const mapDispatchToProps=(dispatch)=>{
            return {
                backFunc(){
                    dispatch(P1actionCreators.changeGoSearch(false))
                }
            }
        }
const mapStateToProps=(state)=>{
    return {
        goSearch:state.getIn(['h1p1','goSearch']),
        search:state.getIn(['h1p1','search']),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(HomePage1));