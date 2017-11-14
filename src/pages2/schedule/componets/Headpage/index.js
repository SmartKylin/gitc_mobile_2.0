import React from 'react'
// import dahuiYihceng from '../../images/dahuiyicheng.png'
import './index.scss'

export default class HeaderPage extends React.Component {
  render() {
    let {name, enName, addr} = this.props
    
    return (
      <div className="HeaderPageBoxBox">
        <div className="HeaderzPageBox">
          <div className="HeaderPageBox-bg">
            {name}
          </div>
          <div className="HeaderPageYXbox">
            {enName}
          </div>
          <div className="HeaderPageBoxDz">
            <i className="iconfont icon-positioning" style={{color: "#30508e", marginRight: "3px", fontSize: '18px'}}/>
            {addr}
          </div>
        </div>
        <div className="HeaderzPageBoxXiang">详情>></div>
      </div>
    )
  }
}
