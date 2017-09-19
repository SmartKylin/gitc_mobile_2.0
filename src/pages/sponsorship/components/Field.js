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
  }
  render () {
    return (
      <div style={FieldWrap}>
        <div>
          <span>{this.props.title}：</span>
          {this.props.textArea ? null : <input type="text" style={inputStyle}/>}
        </div>
        {this.props.textArea ? <textarea name="" id="" cols="30" rows="8" maxLength={200} style={{resize: 'none'}}></textarea> : null}
      </div>
    )
  }
  componentWillMount () {
    // console.log(this.props.title);
  }
}