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
          <div className={"HeaderPageBox-bg"}>
            {name}
          </div>
          <div className="HeaderPageYXbox">
            {enName}
          </div>
          <div className="HeaderPageBoxDz">
            <i className="iconfont icon-positioning" style={{color: "#fe6b3e", marginRight: "3px", fontSize: '15px'}}/>
            {addr}
          </div>
        </div>
        {/*<Link style={styleLink} to={`/meetingdetails/${link}`} className="HeaderzPageBoxXiang">专题详情</Link>*/}
      </div>
    )
  }
}
