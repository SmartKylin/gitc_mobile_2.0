import React, {Component} from 'react'

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
          <span>{this.props.title}：</span>
          {this.props.textArea ? null : <input type={this.props.type || 'text'} style={inputStyle} onInput={ (e) => this.changeValue(e)}/>}
        </div>
        {this.props.textArea ? <textarea name="" id="" cols="30" rows="8" maxLength={200} style={{resize: 'none'}} onInput={ (e) => this.changeValue(e)}></textarea> : null}
      </div>
    )
  }
  componentWillMount () {
  }
}