import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.scss'
import {authCheck} from "../../helper/login";

export default class extends Component {
  handleClick = path => {
    let iphone = authCheck()
    console.log(iphone);
    this.props.closeMenu()
    if (iphone) {
      this.props.history.push(path)
    } else {
      this.props.openPop(path)
    }
  }
  render () {
    return (
      <div style={{with: '100%', height: '568px', backgroundColor: 'rgba(0, 0, 0, .9)', visibility: this.props.visibility, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: '10'}}>
        <div style={{display: 'flex', justifyContent: 'flex-end', padding: '0 15px', marginTop: '17px', marginBottom: '7px'}}>
          <div className="close--menu--icon" onClick={() => this.props.closeMenu()}></div>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '17px'}} className="nav--group">
          <Link to={"/home"} onClick={() => this.props.closeMenu()}>首页</Link>
          {/*<Link to={"/ticket"} onClick={() => this.props.closeMenu()}>我的门票</Link>*/}
          {/*<Link to={"/user"} onClick={() => this.handleClickUser()}>个人中心</Link>*/}
          <a href="javascript:;" onClick={() => this.handleClick('/ticket')}>我的门票</a>
          <a href="javascript:;" onClick={() => this.handleClick('/user')}>个人中心</a>
          <Link to={"/login"} onClick={() => this.props.closeMenu()}>大会商店</Link>
          <Link to={"/activity"} onClick={() => this.props.closeMenu()}>现场活动</Link>
          <Link to={"/login"} onClick={() => this.props.closeMenu()}>大会相册</Link>
          <Link to={"/login"} onClick={() => this.props.closeMenu()}>场馆地图</Link>
          <Link to={"/issue"} onClick={() => this.props.closeMenu()}>议题提交</Link>
          <Link to={"/sponsorship"} onClick={() => this.props.closeMenu()}>赞助合作</Link>
        </div>
      </div>
    )
  }
  componentWillMount () {
    authCheck()
  }
}