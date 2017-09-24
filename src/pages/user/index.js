import React, {Component} from 'react'
import ChildBackground from 'containers/child_container'
import UserMenu from './container/usermenu/userMenu'
import storage from '../../helper/storage'
import {getDocumentList, getGuestList} from "../../services/collect";
import {TOKEN} from "../../helper/login";
import './index.scss'

export default class extends Component {
  constructor () {
    super()
    this.state = {
      userData: {}
    }
  }
  componentWillMount () {
    document.title = "个人中心"
    let phone = storage.get(storage.PHONE_KEY)
    this.phone = phone
    
    if (phone) {
      // 获取文档列表和嘉宾列表
      getGuestList({phone, token: TOKEN})
      .then(res => res && res.json())
      .then(data => {
        this.setState({
          userData: data.data
        })
      })
    }
  }
  render () {
    return (
      <ChildBackground>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <div alt="" className="avatar"/>
          <div style={{color: '#fff', fontSize: '16px',  marginLeft: '13px'}}>{this.phone}</div>
        </div>
        <UserMenu userData={this.state.userData}/>
      </ChildBackground>
    )
  }
}
