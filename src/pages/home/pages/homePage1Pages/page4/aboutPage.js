import React,{ PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import NavBar from '../../../../../common/components/NavBar'
import { actionCreators } from './store'
import { BgWrapper } from '../../../../../common/style'
import Img from '../../../../../statics/logo.png'
import { AboutWrapper } from './style' 

class About extends PureComponent{
render(){
        const { changePage } = this.props;
         return(
            <BgWrapper>
                <AboutWrapper>
                    <NavBar
                    title="关于紫猴"
                    func={()=>{changePage(0)}}
                    />
                    <div style={{height:"45px"}}/>
                    <img src={Img} alt=""/>
                    <div className="contentWrapper">
                        <div className="content">
                            紫屁股猴是中国著名的神话人物之一，出自古典名著《弱鸡注》。祖籍河北石家庄，由盘古的灰渍泥孕育而生，因臀部发紫被称为"紫腚猴"，简称"紫猴"，又因民间俗语“紫腚行"而被赋予幸运之意。
                        </div>
                        <div className="content">
                            紫猴教育是一款全面的、专业的、权威的教育课程发布及订阅平台，在这里，您可以轻松的发布您的课程，或订阅您想学习的课程，并在约定的时间及地点完成教学或学习任务。
                        </div>
                        <div className="content">
                            感谢您选择紫猴教育平台。你紫腚，你能行，大家紫腚，大家都能行。紫猴教育祝您在工作或学习过程中一切顺利。
                        </div>
                    </div>
                </AboutWrapper>
            </BgWrapper>
        )
   
}
}
const mapDispatchToProps=(dispatch)=>{
            return {
                changePage(data){
                    dispatch(actionCreators.changePage(data))
                }
            }
        }
const mapStateToProps=(state)=>{
    return {
        // tabBarPage:state.getIn(['home','tabBarPage']),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(About));