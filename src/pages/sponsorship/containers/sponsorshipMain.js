import React, {Component} from 'react'
import Field from '../components/Field'
import {sponsor} from "../../../services/sponsor";
import {message} from 'antd'

let boxStyle = {
  height: '89%',
  borderRadius: '5px',
  overflow: 'hidden',
  background: '#fff',
  position: 'relative'
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
    let {name, company, phone, position, email, intention} = this.state
    return (
    <div style={boxStyle}>
      <Field title='姓名' model={name} changeValue={this.changeValue}  name={'name'}></Field>
      <Field title='公司' model={company}  name={'company'} changeValue={this.changeValue}></Field>
      <Field title='手机' model={phone}  name={'phone'} changeValue={this.changeValue}></Field>
      <Field title={'职位'} model={position} name={'position'} changeValue={this.changeValue}></Field>
      <Field title={'邮箱'} type="email" model={email}  name={'email'} changeValue={this.changeValue}></Field>
      <Field title={'合作意向'} textArea={true} model={intention}  name={'intention'} changeValue={this.changeValue}></Field>
      <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
        <div style={btnStyle} onClick={() => this.post()}>确定提交</div>
      </div>
    </div>
    )
  }
}