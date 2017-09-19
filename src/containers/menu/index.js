import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.scss'

export default class extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div style={{with: '100%', height: '475px', backgroundColor: 'rgba(0, 0, 0, .85)', visibility: this.props.visibility, position: 'absolute', top: 0, left: 0, right: 0, zIndex: '10'}}>
        <div style={{display: 'flex', justifyContent: 'flex-end', padding: '0 15px', marginTop: '17px', marginBottom: '7px'}}>
          <div className="close--menu--icon" onClick={() => this.props.closeMenu()}></div>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '17px'}} className="nav--group">
          <Link to={"/home"}>首页</Link>
          <Link to={"/sponsorship"}>我的门票</Link>
          <Link to={"/user"}>个人中心</Link>
          <Link to={"/login"}>大会商店</Link>
          <Link to={"/login"}>现场活动</Link>
          <Link to={"/login"}>大会相册</Link>
          <Link to={"/login"}>场馆地图</Link>
          <Link to={"/login"}>议题提交</Link>
          <Link to={"/sponsorship"}>赞助合作</Link>
        </div>
      </div>
    )
  }
}