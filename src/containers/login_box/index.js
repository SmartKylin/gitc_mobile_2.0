import React, {Component} from 'react'
import './index.scss'
import {sendCode} from "../../services/code";
import {sign} from "../../services/user"
import {message} from 'antd'
import storage from '../../helper/storage'
import {TOKEN} from "../../helper/login";

let iconIphone = require('../../images/icon-phone.svg')

const TIME = 60
let inputStyle = {
  appearance: 'none',
  borderRadius: 0,
  fontSize:'14px'
}
export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      coding: false,
      time: TIME,
      mobileRight: false,
      mobile: '',
      code: ''
    }
  }
  // 发送验证码
  sendcode() {
    if (!this.state.mobileRight) {
      return
    }
    sendCode(this.mobile.value, {phone: this.mobile.value, token: TOKEN})
    .then(res => res.json())
    .then(data => {
      message.info(data.msg)
      if (data.status) {
        this.countDown()
      }
    })
    // this.countDown()
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
    this.setState({
      mobile: this.mobile.value
    })
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
  // 登陆或者注册
  signIn = (cb) => {
    let params = {}
    params.code = this.code.value;
    params.phone = this.mobile.value;
    params.token = TOKEN
    
    const sucesss = (data) => {
      message.info(data.msg)
      // 如果登陆成功，手机号存到localstorage
      if (data.status) {
        storage.set(storage.PHONE_KEY, this.mobile.value)
        storage.set(storage.DATA_KEY, data.data)
        this.closeLoginBox()
        cb && cb()
      }
    }
    sign(this.mobile.value, params)
    .then(res => res.json())
    .then(sucesss)
  }
  /*// 限制手机号长度
  trimLength = () => {
    if (this.mobile.value.length > 11) {
      this.mobile.value.length = this.mobile.value.length.slice(0, 11)
    }
  }*/
  // 关闭登录框，并清空数据
  closeLoginBox = (cb) => {
    this.setState({
      mobile: '',
      code: ''
    })
    this.props.closePop()
  }
  render () {
    return (
    <div className="loginbox">
      <div className="close--area">
        <div alt="" className="close--icon" onClick={this.closeLoginBox}></div>
      </div>
      <div className="form--wrap">
        <div className="mobile--area">
          <div className="mobile--wrap">
            <img src={iconIphone} alt="" className="icon--phone"/>
            {/*<input type="number"  onChange={(e) => this.validateMobile(e)} ref={mobile => this.mobile = mobile} onInput={() => this.trimLength()} value={this.mobile.value}/>*/}
            <input type="number"  onChange={(e) => this.validateMobile(e)} ref={mobile => this.mobile = mobile} value={this.state.mobile}/>
          </div>
        </div>
  
        <div className="code--area">
          <input type="text" style={inputStyle} ref={code => this.code = code} value={this.state.code} onChange={() => this.setState({code: this.code.value})}/>
          {
            this.state.coding ? <div className="send--code">重新发送{this.state.time}s</div> : <div className={'send--code ' + (this.state.mobileRight ? 'active' : '')} onClick={() => this.sendcode()}>发送验证码</div>
          }
        </div>
        <div className="btn--area">
          <div className="btn--ensure" onClick={() => this.signIn(this.props.loginSuccess)}>登录</div>
        </div>
      </div>
    </div>
    )
  }
}