import React,{ PureComponent } from 'react'
import { Tabs,  Badge } from 'antd-mobile'
import { TabWrapper } from './style'

class Tab extends PureComponent{
render(){
    const tabs = [
      { title: <Badge>{this.props.titles[0]}</Badge> },
      { title: <Badge>{this.props.titles[1]}</Badge> }
    ];
         return(
            <TabWrapper>
                <Tabs tabs={tabs}
                  initialPage={this.props.tabPage}
                  // onChange={(tab, index) => { console.log('onChange', index, tab); }}
                  // onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                  {this.props.page1()}
                  {this.props.page2()}
                </Tabs>
            </TabWrapper>
        )
   
}
}
export default Tab;