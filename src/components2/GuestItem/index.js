import React, {Component} from 'react'
import defaultImg from '../../images/default-avatar.jpg'
import './index.scss'

export default class extends Component {
  render () {
    return (
      <div className="guest-item">
        <div className="img-wrapper">
          <img src={defaultImg} alt=""/>
        </div>
        <div className="name">站附近</div>
        <div className="company">小米</div>
        <div className="position">合伙人</div>
      </div>
    )
  }
}