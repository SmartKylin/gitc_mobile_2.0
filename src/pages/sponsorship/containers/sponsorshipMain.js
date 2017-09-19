import React, {Component} from 'react'
import Cell from '../components/cell'

let boxStyle = {
  padding: '2px 13px 30px 13px',
}
export default class extends Component {
  render () {
    return (
      <div style={boxStyle}>
        <Cell title='公司'></Cell>
      </div>
    )
  }
}