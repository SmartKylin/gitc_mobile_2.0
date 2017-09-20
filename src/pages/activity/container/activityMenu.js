import React, {Component} from 'react'
import {Menu, Icon} from 'antd'
import 'antd/dist/antd.css'
import './index.scss'

const {SubMenu, MenuItemGroup} = Menu

export default class extends Component {
  /* constructor () {
     super()
     this.state = {
       openKeys: ['sub1'],
     }
   }*/
  state = {
    openKeys: ['sub1']
  }
  rootSubmenuKeys = ['sub1', 'sub2'];
  state = {
    openKeys: ['sub1'],
  };
  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  }
  render() {
    return (
    <div className="user">
      <Menu
      mode="inline"
      openKeys={this.state.openKeys}
      onOpenChange={this.onOpenChange}
      style={{background: '#fff', marginTop: '35px', borderRadius: '5px'}}
      >
        <SubMenu key="sub1" title={<span><Icon type="file-text" style={{color: '#336cfa', fontSize: '17px'}}/><span>戳这里有礼哦品</span></span>}>
          <Menu.Item key="1">
            <div style={{borderBottom: '1px solid #ccc', color: '#ccc', boxSizing: 'content-box'}}>11月23日</div>
          </Menu.Item>
          <Menu.Item key="2">前端开发等领域的技术热点</Menu.Item>
          <Menu.Item key="3">前端开发等领域的技术热点</Menu.Item>
          <Menu.Item key="4">11月24日</Menu.Item>
          <Menu.Item key="5">前端开发等领域的技术热点</Menu.Item>
          <Menu.Item key="6">前端开发等领域的技术热点</Menu.Item>
          <Menu.Item key="7">前端开发等领域的技术热点</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="file-add" style={{color: '#336cfa', fontSize: '17px'}}/><span>最棒的现场活动</span></span>}>
          <Menu.Item key="8">前端开发等领域的技术热点</Menu.Item>
          <Menu.Item key="9">前端开发等领域的技术热点</Menu.Item>
          <Menu.Item key="10">前端开发等领域的技术热点</Menu.Item>
          <Menu.Item key="11">前端开发等领域的技术热点</Menu.Item>
          <Menu.Item key="12">前端开发等领域的技术热点</Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" title={<span><Icon type="file-text" style={{color: '#336cfa', fontSize: '17px'}}/><span>戳这里有礼哦品</span></span>}>>戳这里有大奖</SubMenu>
        <SubMenu key="sub4" title={<span><Icon type="file-text" style={{color: '#336cfa', fontSize: '17px'}}/><span>戳这里有礼哦品</span></span>}>>戳这里有大奖</SubMenu>
      </Menu>
    </div>
    )
  }
}