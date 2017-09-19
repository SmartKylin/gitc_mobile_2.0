import React, {Component} from 'react'
import Field from '../components/Field'

let boxStyle = {
  height: '82%',
  borderRadius: '5px',
  overflow: 'hidden',
  background: '#fff',
  position: 'relative'
}

let btnStyle = {
  width: '112px',
  height: '29px',
  color: "#fff",
  background: '#336cfa',
  lineHeight: '29px',
  fontSize: '12px',
  textAlign: 'center',
  marginTop: '30px',
  borderRadius: '12px'
}
export default class extends Component {
  render() {
    return (
    <div style={boxStyle}>
      <Field title='姓名'></Field>
      <Field title='公司'></Field>
      <Field title='手机'></Field>
      <Field title={'职位'}></Field>
      <Field title={'邮箱'}></Field>
      <Field title={'赞助意向'}></Field>
      <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
        <div style={btnStyle}>确定提交</div>
      </div>
    </div>
    )
  }
}