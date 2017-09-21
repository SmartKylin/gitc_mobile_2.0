import React, {Component} from 'react'
import rightTrue from '../../../images/right-blue.svg'
import rightFalse from '../../../images/right-gray.svg'

export default class extends Component{
  render () {
    return (
      <div style={{display: 'flex', alignItems: 'center'}}>
        <img src={this.props.access ? rightTrue : rightFalse} alt="" style={{width: '12px', height: '12px'}}/>
        <div style={{fontSize: '12px'}}>{this.props.title}</div>
      </div>
    )
  }
}