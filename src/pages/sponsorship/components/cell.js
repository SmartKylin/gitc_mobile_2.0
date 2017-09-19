import React, {Component} from 'react'

let cellWrap = {
  padding: '0 13px',
  background: '#fff',
  height: '43px',
  lineHeight: '43px',
  fontSize: '13px',
  display: 'flex',
  borderBottom: '1px solid #e3e3e3'
}


export default class extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div style={cellWrap}>
        <span>{this.props.title}：</span>
        <input type="text"/>
      </div>
    )
  }
  componentWillMount () {
    console.log(this.props.title);
  }
}