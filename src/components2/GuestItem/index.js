import React, {Component} from 'react'
import defaultImg from '../../images/default-avatar.jpg'
import './index.scss'

export default class extends Component {
  
  render () {
    let data = this.props.data
    return (
      <div className="guest-item">
        <div className="img-wrapper">
          <img src={data.pic || defaultImg} alt=""/>
        </div>
        <div className="name">{data.name}</div>
        <div className="company">{data.company}</div>
        <div className="position">{data.position}</div>
      </div>
    )
  }
}