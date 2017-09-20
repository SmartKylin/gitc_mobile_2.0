import React, {Component} from 'react'
import './index.scss'
import {sendCode} from "../../services/code";
import {message} from 'antd'

// import IconClose from 'images/close-black.svg'
let iconIphone = require('../../images/icon-phone.svg')


const TIME = 60
let inputStyle = {
  appearance: 'none',
  borderRadius: 0
}
export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      coding: false,
      time: TIME,
      mobileRight: false
    }
  }
  // 发送验证码
  sendCode() {
    if (!this.state.mobileRight) {
      return
    }
    sendCode(this.mobile.value, {phone: this.mobile.value})
    .then(res => res.json())
    .then(data => {
      message.info(data.msg)
    })
    this.countDown()
  }
  // 倒计时
  countDown() {
    this.setState({
      coding: true
    })
    this.oldMobile = this.mobile.value
    this.timer = setInterval(() => {
      let time = this.state.time;
      if (time <= 0) {
        clearInterval(this.timer)
        this.setState({
          coding: false,
          time: TIME
        });
        return
      }
      time--;
      this.setState({
        time
      })
    }, 1000)
  }
  // 验证手机号
  validateMobile() {
    let reg = /^1[3|4|5|7|8][0-9]{9}$/;
    let mobile = this.mobile.value;
    let mobileRight =  reg.test(mobile)
    this.setState({
      mobileRight
    });
    if (mobileRight) {
      if (this.mobile.value !== this.oldMobile) {
        this.setState({
          coding: false
        })
      }
    }
  }
  /*// 限制手机号长度
  trimLength = () => {
    if (this.mobile.value.length > 11) {
      this.mobile.value.length = this.mobile.value.length.slice(0, 11)
    }
  }*/
  render () {
    return (
    <div className="loginbox">
      <div className="close--area">
        <div alt="" className="close--icon" onClick={() => this.props.closePop()}></div>
      </div>
      <div className="form--wrap">
        <div className="mobile--area">
          <div className="mobile--wrap">
            <img src={iconIphone} alt="" className="icon--phone"/>
            {/*<input type="number"  onChange={(e) => this.validateMobile(e)} ref={mobile => this.mobile = mobile} onInput={() => this.trimLength()} value={this.mobile.value}/>*/}
            <input type="number"  onChange={(e) => this.validateMobile(e)} ref={mobile => this.mobile = mobile}/>
          </div>
        </div>
  
        <div className="code--area">
          <input type="text" style={inputStyle}/>
          {/*<div className="code--txt">输入验证码</div>*/}
          {
            this.state.coding ? <div className="send--code">重新发送{this.state.time}s</div> : <div className={'send--code ' + (this.state.mobileRight ? 'active' : '')} onClick={() => this.sendCode()}>发送验证码</div>
          }
        </div>
        <div className="btn--area">
          <div className="btn--ensure">确定</div>
        </div>
      </div>
    </div>
    )
  }
}