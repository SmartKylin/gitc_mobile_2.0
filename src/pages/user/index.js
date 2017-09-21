import React, {Component} from 'react'
import ChildBackground from 'containers/child_container'
import UserMenu from './container/usermenu/userMenu'
import {authCheck} from '@/helper/login'
import './index.scss'

export default class extends Component {
  render () {
    return (
      <ChildBackground>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <div alt="" className="avatar"/>
          <div style={{color: '#fff', fontSize: '16px',  marginLeft: '13px'}}>{this.iphone}</div>
        </div>
        <UserMenu/>
      </ChildBackground>
    )
  }
  componentWillMount () {
    let iphone = authCheck()
    if (!iphone) {
      // this.props.history.push('/')
    }
    this.iphone = iphone
  }
}
