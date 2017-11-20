import React, {Component} from 'react'
import ChildBackground from 'containers/child_container'
import UserMenu from './container/usermenu/userMenu'
// import storage from '../../helper/storage'
// import {TOKEN} from "../../helper/login";
import './index.scss'
import {connect} from 'react-redux'

// @connect(
//   state => ({phone: state.phone}), null
// )

class User extends Component {
  componentWillMount () {
    document.title = "个人中心"
    // let phone = storage.get(storage.PHONE_KEY)
  }
  render () {
    return (
      <ChildBackground>
        <div style={{display: 'flex', alignItems: 'center', paddingBottom: '.1rem'}}>
          <div alt="" className="avatar"/>
          <div style={{color: '#fff', fontSize: '16px',  marginLeft: '13px'}}>{this.props.phone}</div>
        </div>
        <UserMenu/>
      </ChildBackground>
    )
  }
}


export default connect(state => ({phone: state.phone}), null)(User)
