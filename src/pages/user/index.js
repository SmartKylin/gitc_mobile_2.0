import React, {Component} from 'react'
import ChildBackground from 'containers/child_container'
import UserMenu from './container/usermenu/userMenu'
import './index.scss'

export default class extends Component {
  render () {
    return (
      <ChildBackground>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <div alt="" className="avatar"/>
          <div style={{color: '#fff', fontSize: '16px',  marginLeft: '13px'}}>18201440272</div>
        </div>
        <UserMenu></UserMenu>
      </ChildBackground>
    )
  }
}
