import React, {Component} from 'react'
import './index.scss'

export default class extends Component {
  render () {
    let {name, enName, bgImg, changeCollapse, collapsed} = this.props
    return (
      <div className="accor-header" onClick={this.props.changeCollapse} style={{background: `url(${bgImg}) no-repeat center`}}>
        <div className="main-title">{name}</div>
        <div className="en-title">{enName} </div>
        <i className={collapsed ? 'iconfont icon-xiangshang' : 'iconfont icon-xiangxia'} />
      </div>
    )
  }
}