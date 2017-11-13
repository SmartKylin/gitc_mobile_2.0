import React, {Component} from 'react'
import defaultAvatar from '../../images/default-avatar.jpg'
import GuestDetailPop from '../../components/AgendaPople/GuestDetailPop'
import './index.scss'
import PeoplePop from '../../components2/PeoplePop'
import {allowScroll, forbiddenScroll} from "../../helper/scrollSetting";

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      popVisible: false
    }
  }
  openGuestPop = () => {
    this.setState({
      popVisible: true
    })
    this.top = document.documentElement.scrollTop || document.body.scrollTop
    forbiddenScroll()
  }
  
  closeGuestPop = (e) => {
    e.stopPropagation()
    
    allowScroll(this.top)
    this.setState({
      popVisible: false
    })
  }
  
  render() {
    let {speecher} = this.props
    let {popVisible} = this.state
    console.log(popVisible, 'spper');
    return (
      <div className="speech-item" onClick={this.openGuestPop}>
        <div className="item-left">
          <img src={speecher.pic || defaultAvatar} alt=""/>
          <div className="time">{speecher.stime || '待定'}</div>
        </div>
        <div className="item-right">
          <div className="theme">{speecher.meet}</div>
          <div className="speecher">
            {!this.props.style?<div className="name">{speecher.name}</div>:""}

            <div className="company-position">
            
            {/*  <div className="company">{speecher.company}</div>
              <div>{speecher.position}</div>*/}
              
              {!this.props.style?<span className="company">{speecher.company}</span>:""}
              <span>{speecher.position}</span>
            </div>
          </div>
        </div>
        {
          popVisible
          ? <div className="popup">
            {
              <PeoplePop closeGuestPop={this.closeGuestPop} speecher={speecher}/>
            }
          </div>
          : null
        }
      </div>
    )
  }
}