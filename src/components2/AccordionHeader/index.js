import React, {Component} from 'react'
import './index.scss'


const IconAry = ['', 'icon-yongcan', 'icon-fenhuichangxuanzhong', 'icon-yinshuiji', 'icon-icon', 'icon-shiwuzhaoling']

export default class extends Component {
  render () {
    let {name, enName, bgImg, changeCollapse, collapsed, index} = this.props
    return (
      <div className="accor-header" onClick={this.props.changeCollapse} style={{background: `url(${bgImg}) no-repeat center`}}>
        {
          index ?
          <div className="header-left">
            <i className={`iconfont ${IconAry[index]}`}/>
          </div>
          : null
        }
        <div className="header-right">
          <div className="main-title">{name}</div>
          <div className="en-title">{enName} </div>
        </div>
        <i className={collapsed ? 'iconfont icon-xiangshang' : 'iconfont icon-xiangxia'} />
      </div>
    )
  }
}