import React, {Component} from 'react'
import {Menu, Icon} from 'antd'
import 'antd/dist/antd.css'
import './index.scss'

import DocumentItem from '../../component/DocumentItem'
import CollectionItem from '../../component/CollectionItem'

import Guest from '../../component/GuestItem'

const {SubMenu, MenuItemGroup} = Menu

export default class extends Component {
 /* constructor () {
    super()
    this.state = {
      openKeys: ['sub1'],
    }
  }*/
  
  
 /* state = {
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
  }*/
  render() {
    let subMenuStyle = {
      marginLeft: '-12px'
    }
    return (
     <div className="user">
       <Menu
       mode="inline"
       /*openKeys={this.state.openKeys}
       onOpenChange={this.onOpenChange}*/
       
       style={{background: '#fff', marginTop: '35px', borderRadius: '5px',paddingBottom:'3px'}}
       >
         <SubMenu key="sub1" title={<span style={subMenuStyle}><Icon type="file-text" style={{color: '#336cfa', fontSize: '17px'}}/><span>我的收藏</span></span>}>
           {
             [1,2, 3, 4].map((item, index) => (
             <Menu.Item key={index + 6}><CollectionItem item={index}/></Menu.Item>
             ))
           }
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