import React from 'react'
// import dahuiYihceng from '../../images/dahuiyicheng.png'
import './index.scss'
import {Link} from 'react-router-dom'
const styleLink = {
    color: '#FFF',
    width: '80px',
    height: '25px',
    lineHeight: '25px',
    textAlign: 'center',
    border: '1px solid',
    display: 'inline-block',
    borderRadius: '25px',
}
export default class HeaderPage extends React.Component {
  render() {
    let {name, enName, addr, link} = this.props
    return (
      <div className="HeaderPageBoxBox">
        <div className="HeaderzPageBox">
          <div className={name == "大数据&人工智能专场 (23日)"|| name == "大数据&人工智能专场 (24日)"?'HeaderPageBox-bgA':"HeaderPageBox-bg"}>
            {name}
          </div>
          <div className="HeaderPageYXbox">
            {enName}
          </div>
          <div className="HeaderPageBoxDz">
            <i className="iconfont icon-positioning" style={{color: "#30508e", marginRight: "3px", fontSize: '15px'}}/>
            {addr}
          </div>
        </div>
        <Link style={styleLink} to={`/meetingdetails/${link}`} className="HeaderzPageBoxXiang">专题详情</Link>
      </div>
    )
  }
}
