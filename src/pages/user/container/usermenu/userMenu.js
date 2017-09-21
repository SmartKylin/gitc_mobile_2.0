import React, {Component} from 'react'
import {Menu, Icon} from 'antd'
import 'antd/dist/antd.css'
import './index.scss'

import DocumentItem from '../../component/DocumentItem'
import Guest from '../../component/GuestItem'

const {SubMenu, MenuItemGroup} = Menu

export default class extends Component {
 /* constructor () {
    super()
    this.state = {
      openKeys: ['sub1'],
    }
  }*/
  state = {
    openKeys: ['sub2']
  }
  rootSubmenuKeys = ['sub1', 'sub2'];
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
    let subMenuStyle = {
      marginLeft: '-12px'
    }
    return (
     <div className="user">
       <Menu
       mode="inline"
       openKeys={this.state.openKeys}
       onOpenChange={this.onOpenChange}
       style={{background: '#fff', marginTop: '35px', borderRadius: '5px'}}
       >
         <SubMenu key="sub1" title={<span style={subMenuStyle}><Icon type="file-text" style={{color: '#336cfa', fontSize: '17px'}}/><span>我的收藏</span></span>}>
           <Menu.Item key="1">11月23日</Menu.Item>
           <Menu.Item key="2">前端开发等领域的技术热点</Menu.Item>
           <Menu.Item key="3">前端开发等领域的技术热点</Menu.Item>
           <Menu.Item key="4">前端</Menu.Item>
           <Menu.Item key="5">前端开发等领域的技术热点</Menu.Item>
           <Menu.Item key="6">前端开发等领域的技术热点</Menu.Item>
           <Menu.Item key="7">前端开发等领域的技术热点</Menu.Item>
         </SubMenu>
         <SubMenu key="sub2" title={<span style={subMenuStyle}><Icon type="file-add" style={{color: '#336cfa', fontSize: '17px'}}/><span>文档收藏</span></span>}>
           {
             [1,2, 3, 4].map((item, index) => (
                <Menu.Item key={index}><DocumentItem/></Menu.Item>
             ))
           }
         </SubMenu>
       </Menu>
     </div>
    )
  }
}