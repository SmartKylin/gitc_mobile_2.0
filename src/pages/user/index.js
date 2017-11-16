import React, {Component} from 'react'
import ChildBackground from 'containers/child_container'
import UserMenu from './container/usermenu/userMenu'
import storage from '../../helper/storage'
import {TOKEN} from "../../helper/login";
import './index.scss'

export default class extends Component {
  
  componentWillMount () {
    document.title = "个人中心"
    let phone = storage.get(storage.PHONE_KEY)
    this.phone = phone
  }
  render () {
    let {openPop, closePop, setLoginCb} = this.props.history
    return (
      <ChildBackground>
        <div style={{display: 'flex', alignItems: 'center', paddingBottom: '.1rem'}}>
          <div alt="" className="avatar"/>
          <div style={{color: '#fff', fontSize: '16px',  marginLeft: '13px'}}>{this.phone}</div>
        </div>
        <UserMenu
          openPop={openPop}
          closePop={closePop}
          setLoginCb={setLoginCb}
        />
      </ChildBackground>
    )
  }
}
