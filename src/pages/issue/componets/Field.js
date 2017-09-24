import React, {Component} from 'react'
import classNames from "classnames"
import './index.scss'
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
  render () {

    return (
      <div style={FieldWrap}>
            <div>
                <span>{this.props.title}<span style={{color:"#ccc", fontSize: '13px'}}>{this.props.placeholder}</span></span>
                <i className={classNames({'required--star weizhi': this.props.required})}/><i className={classNames({'required--star weizhi': this.props.required})}/>
                {this.props.textArea ? null : <input type={this.props.type || 'text'} style={inputStyle} onInput={ (e) => this.changeValue(e)}/>}
            </div>
          {this.props.textArea ? <textarea style={{resize: 'none'}}  name="" id="" cols="30" rows={this.props.rows}  onInput={ (e) => this.changeValue(e)}></textarea> : null}

      </div>
    )
  }
}

