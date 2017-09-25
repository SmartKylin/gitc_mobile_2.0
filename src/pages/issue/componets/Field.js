import React, {Component} from 'react'
import classNames from "classnames"
import './index.scss'
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
  changeValue = (e) => {
    let value = e.target.value
    this.setState({
      value
    })
    this.props.changeValue(this.props.name, value)
  }
  validate = (e) => {
      let {name, changeValue} = this.props
      if( name =="name" && e.target.value == ''){
          message.info("姓名不能为空!")
          changeValue('flag', false)
      }
      if( name =="company" && e.target.value == ''){
          message.info("公司不能为空!")
          changeValue('flag', false)
      }
      if( name =="position" && e.target.value == ''){
          message.info("职位不能为空!")
          changeValue('flag', false)
      }
      if( name=="phone" && !(/^1[34578]\d{9}$/.test(e.target.value))){
          message.info("手机号码有误，请重填");
          changeValue('flag', false)
      }
      if( name=="email" && !(/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(e.target.value))){
          message.info("邮箱格式有误，请重填");
          changeValue('flag', false)
      }
      if( name =="addr" && e.target.value == ''){
          message.info("地址不能为空!")
          changeValue('flag', false)
      }
      if( name =="photonew" && e.target.value == ''){
          message.info("请上传照片")
          changeValue('flag', false)
      }
      if( name =="summary" && e.target.value == ''){
          message.info("个人简介不能为空")
          changeValue('flag', false)
      }
      if( name =="theme" && e.target.value == ''){
          message.info("演讲主题不能为空!")
          changeValue('flag', false)
      }
      if( name =="content" && e.target.value == ''){
          message.info("内容简介不能为空!")
          changeValue('flag', false)
      }
  }
  render () {

    return (
      <div style={FieldWrap}>
            <div className="weizhidingwei">
                <span>{this.props.title}<span style={{color:"#ccc", fontSize: '13px'}}>{this.props.placeholder}</span></span>
                <i className={classNames({'required--star weizhi': this.props.required})}/><i className={classNames({'required--star weizhi': this.props.required})}/>
                {this.props.textArea ? null : <input type={this.props.type || 'text'} style={inputStyle} onInput={ (e) => this.changeValue(e)} onBlur={this.validate}/>}
            </div>
          {this.props.textArea ? <textarea style={{resize: 'none'}}  name="" id="" cols="30" rows={this.props.rows}  onInput={ (e) => this.changeValue(e)} onBlur={this.validate}></textarea> : null}

      </div>
    )
  }
}

