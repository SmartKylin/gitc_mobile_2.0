import React, {Component} from 'react'
import Field from '../components/Field'

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
  render() {
    return (
    <div style={boxStyle}>
      <Field title='姓名'></Field>
      <Field title='公司'></Field>
      <Field title='手机'></Field>
      <Field title={'职位'}></Field>
      <Field title={'邮箱'}></Field>
      <Field title={'合作意向'} disabled={true} textArea={true}></Field>
      <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
        <div style={btnStyle}>确定提交</div>
      </div>
    </div>
    )
  }
}