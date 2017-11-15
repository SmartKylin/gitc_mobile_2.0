import React, {Component} from 'react'
import defaultImg from '../../images/default-avatar.jpg'
import PeoplePop from '../../components2/PeoplePop'
import './index.scss'
import {allowScroll, forbiddenScroll} from "../../helper/scrollSetting";

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      popVisible: false
    }
  }
  
  openGuestPop = () => {
    if (!this.props.hasPop) {
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
  
  
  render () {
    let {data, hasPop, openPop, closePop, setLoginCb} = this.props
    let {popVisible} = this.state
    return (
      <div
        className="guest-item"
        onClick={this.openGuestPop}
      >
        <div className="img-wrapper">
          <img src={data.pic || defaultImg} alt=""/>
        </div>
        <div className="name">{data.name}</div>
        <div className="company">{data.company}</div>
        <div className="position">{data.position}</div>
        {
          hasPop
          ? <div>
            {
              popVisible
              ? <div className="popup">
                {
                  <PeoplePop
                  closeGuestPop={this.closeGuestPop}
                  speecher={data}
                  openPop={openPop}
                  closePop={closePop}
                  setLoginCb={setLoginCb}
                  />
                }
              </div>
              : null
            }
          </div>
          : null
          
        }
      </div>
    )
  }
}