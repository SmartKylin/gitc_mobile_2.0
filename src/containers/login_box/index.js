import React, {Component} from 'react'
import './index.scss'
let iconIphone = require('../../images/icon-phone.svg')

const TIME = 10
export default class extends Component {
  constructor () {
    super()
    this.state = {
      coding: false,
      time: TIME
    }
  }
  countDown() {
    this.setState({
      coding: true
    })
    let _this = this
    this.timer = setInterval(() => {
      let time = this.state.time;
      if (time <= 0) {
        clearInterval(this.timer)
        _this.setState({
          coding: false,
          time: TIME
        })
        return
      }
      time--;
      this.setState({
        time
      })
    }, 1000)
  }
  render () {
    return (
    <div className="loginbox">
      <div className="mobile--area">
        <div className="mobile--wrap">
          <img src={iconIphone} alt="" className="icon--phone"/>
          <input type="number"/>
        </div>
        {
          this.state.coding ? <div className="send--code">重新发送{this.state.time}s</div> : <div className="send--code active" onClick={() => this.countDown()}>发送验证码</div>
        }
      </div>
      <div className="code--area">
        <input type="text"/>
        <div className="code--txt">输入验证码</div>
      </div>
      <div className="btn--area">
        <div className="btn--ensure">确定</div>
      </div>
    </div>
    )
  }
}