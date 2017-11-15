import React, {Component} from 'react'
import './index.scss'

const IconAry = ['', 'icon-yongcan', 'icon-fenhuichangxuanzhong', 'icon-yinshuiji', 'icon-icon', 'icon-shiwuzhaoling']

export default class extends Component {
  
  render () {
    let {name, enName, bgImg, changeCollapse, collapsed, index, iconName} = this.props
    return (
      <div
        className="accor-header"
        onClick={changeCollapse}
        style={bgImg ? {background: `url(${bgImg}) no-repeat center`} : {backgroundColor: '#fff'}}
      >
        {
          index ?
          <div className="header-left">
            <i className={`iconfont ${IconAry[index]}`}/>
          </div>
          : null
        }
        {
          iconName ?
          <div className="header-left">
            <i className={`iconfont ${IconAry[index]}`}/>
          </div>
          : null
        }
        <div className="header-right">
          <div className="main-title">{name}</div>
          {
            enName
            ? <div className="en-title">{enName} </div>
            : null
          }
        </div>
        <i className={collapsed ? 'iconfont icon-xiangshang' : 'iconfont icon-xiangxia'} />
      </div>
    )
  }
}