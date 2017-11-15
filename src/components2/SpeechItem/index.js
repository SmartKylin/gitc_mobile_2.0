import React, {Component} from 'react'
import defaultAvatar from '../../images/default-avatar.jpg'
import zhibo from '../../images/zhibo1111.svg'

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
    let {speecher} = this.props
    if (speecher.stheme == '开幕致辞') {
      return
    }

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
    let {openPop, closePop, setLoginCb, canPop} = this.props
   
  
    return (
      <div
          className="speech-item"
          onClick={ this.props.icon ? "" : this.openGuestPop}>
        <div className="item-left">
          {
            this.props.icon ? <img  style={{fontSize:'8px',color:"#ccc"}} src={zhibo} alt=""/>:<img src={speecher.pic || defaultAvatar}/>
          }

          <div className="time">{speecher.stime || '待定'}</div>
        </div>
        <div className="item-right">
          <div className="theme">{speecher.stheme}</div>
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
              <PeoplePop
                closeGuestPop={this.closeGuestPop}
                speecher={speecher}
                openPop={openPop}
                closePop={closePop}
                setLoginCb={setLoginCb}
              />
            }
          </div>
          : null
        }
      </div>
    )
  }
}