import React, {Component} from 'react'
import ChildBackground from 'containers/child_container'
import UserMenu from './container/usermenu/userMenu'
import storage from '../../helper/storage'
import {getDocumentList, getGuestList} from "../../services/collect";
import {TOKEN} from "../../helper/login";
import './index.scss'

export default class extends Component {
  render () {
    return (
      <ChildBackground>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <div alt="" className="avatar"/>
          <div style={{color: '#fff', fontSize: '16px',  marginLeft: '13px'}}>{this.phone}</div>
        </div>
        <UserMenu/>
      </ChildBackground>
    )
  }
  componentWillMount () {
    let phone = storage.get(storage.PHONE_KEY)
    /*if (!phone) {
      this.props.history.goBack()
    }*/
    this.phone = phone
    if (phone) {
      getDocumentList({phone, token: TOKEN})
      .then(res => res && res.json())
      .then(data => {
        console.log(data);
      })
      
      getGuestList({phone, token: TOKEN})
      .then(res => res && res.json())
      .then(data => {
        console.log(data);
      })
    }
  }
}
