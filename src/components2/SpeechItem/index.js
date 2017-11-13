import React, {Component} from 'react'
import defaultAvatar from '../../images/default-avatar.jpg'
import GuestDetailPop from '../../components/AgendaPople/GuestDetailPop'
import './index.scss'

export default class extends Component {
  render() {
    let {speecher} = this.props
    // console.log(speecher, 'spper');
    return (
      <div className="speech-item">
        <div className="item-left">
          <img src={speecher.pic || defaultAvatar} alt=""/>
          <div className="time">{speecher.stime || '待定'}</div>
        </div>
        <div className="item-right">
          <div className="theme">{speecher.meet}</div>
          <div className="speecher">
            {!this.props.style?<div className="name">{speecher.name}</div>:""}

            <div className="company-position">
              {!this.props.style?<span className="company">{speecher.company}</span>:""}
              <span>{speecher.position}</span>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}