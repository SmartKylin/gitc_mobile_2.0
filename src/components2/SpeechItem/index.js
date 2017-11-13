import React, {Component} from 'react'
import defaultAvatar from '../../images/default-avatar.jpg'
import './index.scss'

export default class extends Component {
  render() {
    return (
      <div className="speech-item">
        <div className="item-left">
          <img src={defaultAvatar} alt=""/>
          <div className="time">9:00-10:00</div>
        </div>
        <div className="item-right">
          <div className="theme">开幕式致辞</div>
          <div className="speecher">
            <div className="name">吴华鹏</div>
            <div className="comoponey-position">科大讯飞|北京研究院</div>
          </div>
        </div>
      </div>
    )
  }
}