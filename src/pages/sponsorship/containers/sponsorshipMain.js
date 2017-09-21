import React, {Component} from 'react'
import Field from '../components/Field'
import {sponsor} from "../../../services/sponsor";
import {message} from 'antd'

let minHeight = parseInt(document.documentElement? document.documentElement.clientHeight : document.body.clientHeight) -80
let boxStyle = {
  height: '89%',
  borderRadius: '5px',
  overflow: 'hidden',
  background: '#fff',
  position: 'relative',
  paddingBottom: '10px',
  minHeight
}

let btnStyle = {
  width: '112px',
  height: '30px',
  color: "#fff",
  background: '#336cfa',
  lineHeight: '30px',
  fontSize: '12px',
  textAlign: 'center',
  marginTop: '30px',
  borderRadius: '15px'
}
export default class extends Component {
  constructor () {
    super()
    this.state = {
      name: '',
      company: '',
      phone: '',
      position: '',
      email: '',
      intention: '',
      edit: ''
    }
  }
  // 改变input值
  changeValue = (name, value) => {
    this.setState({
      [name]:value
    })
  }
  // 提交赞助
  post = () => {
    let {name, company, phone, position, email, intention} = this.state;
    phone = phone + '';
    sponsor({name, company, phone, position, email, intention})
    .then(res => res.json())
    .then(data => {
      message.info(data.msg)
    })
  }
  render() {
    return (
    <div style={boxStyle}>
      <Field title='姓名' changeValue={this.changeValue}  name={'name'}></Field>
      <Field title='公司' name={'company'} changeValue={this.changeValue}></Field>
      <Field title='手机' name={'phone'} changeValue={this.changeValue}></Field>
      <Field title={'职位'} name={'position'} changeValue={this.changeValue}></Field>
      <Field title={'邮箱'} type="email" name={'email'} changeValue={this.changeValue}></Field>
      <Field title={'合作意向'} textArea={true} name={'intention'} changeValue={this.changeValue}></Field>
      <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
        <div style={btnStyle} onClick={() => this.post()}>确定提交</div>
      </div>
    </div>
    )
  }
}