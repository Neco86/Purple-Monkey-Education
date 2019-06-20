import React,{ Component } from 'react'
import { TabBar } from 'antd-mobile';

class TabBars extends Component{
render(){
         return(
            <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0}}>
              <TabBar
                unselectedTintColor="#515151"
                tintColor="#cc99ff"
                barTintColor="white"
              >
                <TabBar.Item
                  title={this.props.titles[0]}
                  key={this.props.titles[0]}
                  icon={this.props.icon1()}
                  selectedIcon={this.props.icon1()}
                  selected={this.props.selectedTab === 'tab1'}
                  onPress={() => {this.props.page1OnPress()}}
                >
                    {this.props.page1()}
                </TabBar.Item>
                <TabBar.Item
                  title={this.props.titles[1]}
                  key={this.props.titles[1]}
                  icon={this.props.icon2()}
                  selectedIcon={this.props.icon2()}
                  selected={this.props.selectedTab === 'tab2'}
                  onPress={() => {this.props.page2OnPress()}}
                >
                    {this.props.page2()}
                </TabBar.Item>
                <TabBar.Item
                  title={this.props.titles[2]}
                  key={this.props.titles[2]}
                  icon={this.props.icon3()}
                  selectedIcon={this.props.icon3()}
                  selected={this.props.selectedTab === 'tab3'}
                  onPress={() => {this.props.page3OnPress()}}
                >
                    {this.props.page3()}
                </TabBar.Item>
                <TabBar.Item
                  title={this.props.titles[3]}
                  key={this.props.titles[3]}
                  icon={this.props.icon4()}
                  selectedIcon={this.props.icon4()}
                  selected={this.props.selectedTab === 'tab4'}
                  onPress={() => {this.props.page4OnPress()}}
                >
                    {this.props.page4()}
                </TabBar.Item>
              </TabBar>
            </div>
        )
   
}
}
export default TabBars;