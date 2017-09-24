import React, {Component} from 'react'
import {message} from 'antd'

let FieldWrap = {
  margin: '0 13px',
  padding: '12px 0',
  background: '#fff',
  fontSize: '13px',
  display: 'flex',
  flexDirection: 'column',
  borderBottom: '1px solid #e3e3e3',
  flex: 1
}

let inputStyle = {
  flex: 6
}
export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
  }
  // 校验输入
  inputValidate = (e) => {
    const emailReg = /^[\w.-]+@[0-9a-zA-Z]+(\.[a-zA-Z]{2,4}){1,2}$/;
    const phoneReg = /^1[3|4|5|7|8][0-9]{9}$/;
    let value = e.target.value
    let {changeValue} = this.props
    switch (this.props.name) {
      case 'phone':
        if (!phoneReg.test(value)) {
          changeValue('validated', false)
          message.info('手机号格式不正确~')
        }
        return;
      case 'email':
        if (!emailReg.test(value)) {
          changeValue('validated', false)
          message.info('邮箱格式不正确~')
        }
        return;
    }
  }
  // 设置父级容器的state
  changeValue = (e) => {
    let value = e.target.value
    this.setState({
      value
    })
    this.props.changeValue(this.props.name, value)
  }
  render () {
    return (
      <div style={FieldWrap}>
        <div>
          <span>{this.props.title}：</span>
          {this.props.textArea ? null : <input type={this.props.type || 'text'} style={inputStyle} onInput={ (e) => this.changeValue(e)} onBlur={this.inputValidate}/>}
        </div>
        {this.props.textArea ? <textarea name="" id="" cols="30" rows="8" maxLength={200} style={{resize: 'none'}} onInput={ (e) => this.changeValue(e)}></textarea> : null}
      </div>
    )
  }
  componentWillMount () {
    console.log(this.props.model);
  }
}