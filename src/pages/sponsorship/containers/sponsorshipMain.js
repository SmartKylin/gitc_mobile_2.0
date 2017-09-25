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


const initialState = {
  name: '',
  company: '',
  phone: '',
  position: '',
  email: '',
  intention: '',
  edit: '',
  // 表单是否全部验证通过
  validated: true,
  // 是否正在提交数据
  isPosting: false
}
export default class extends Component {
  
  constructor () {
    super()
    this.state = initialState
  }
  componentWillMount () {
    this.ary = []
  }
  dispatch = () => {
    console.log(this.ary);
    this.ary.map(fn => fn())
  }
  describe = (fn) => {
    this.ary.push(fn)
    return () => {
      this.ary.filter(l => l!==fn)
    }
  }
  // 改变input值
  changeValue = (name, value) => {
    this.setState({
      [name]:value
    })
  }
  // 提交赞助
  post = async () => {
    if (this.state.isPosting) {
      return
    }
    let {name, company, phone, position, email, intention} = this.state;
    phone = phone + '';
    console.log(this.state.validated);
    if (!this.state.validated) {
      // 未通过校验，不发请求
      return
    }
    await this.setState({
      isPosting: true
    })
    sponsor({name, company, phone, position, email, intention, ds_id: 3})
    .then(res => res.json())
    .then(data => {
      message.info(data.msg)
      // 提交成功后清空表单
      if (data.status) {
        this.setState(initialState)
        this.dispatch()
      }
    })
  }
  render() {
    return (
    <div style={boxStyle}>
      <Field title='姓名' changeValue={this.changeValue}  name={'name'} describe={this.describe}></Field>
      <Field title='公司' name={'company'} changeValue={this.changeValue} describe={this.describe}></Field>
      <Field title='手机' name={'phone'} changeValue={this.changeValue} describe={this.describe}></Field>
      <Field title={'职位'} name={'position'} changeValue={this.changeValue} describe={this.describe}></Field>
      <Field title={'邮箱'} type="email" name={'email'} changeValue={this.changeValue} describe={this.describe}></Field>
      <Field title={'合作意向'} textArea={true} name={'intention'} changeValue={this.changeValue} describe={this.describe}></Field>
      <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
        <div style={btnStyle} onClick={() => this.post()}>确定提交</div>
      </div>
    </div>
    )
  }
}