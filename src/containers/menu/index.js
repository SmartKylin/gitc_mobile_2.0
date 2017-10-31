import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.scss'
import storage from '../../helper/storage'

export default class extends Component {
  handleClick = path => {
    let phone = storage.get(storage.PHONE_KEY)
    console.log(phone);
    this.props.closeMenu()
    
    if (phone) {
      this.props.history.push(path)
    } else {
      this.props.openPop()
      let cb = () => {
        this.props.history.push(path)
      }
      this.props.setLoginCb(cb)
    }
  }
  render () {
    return (
      <div style={{with: '100%', height: '568px', backgroundColor: 'rgba(0, 0, 0, .9)', visibility: this.props.visibility, position: 'absolute', top: '-20px', left: 0, right: 0, bottom: 0, zIndex: '10'}}>
        <div style={{display: 'flex', justifyContent: 'flex-end', padding: '0 15px', marginTop: '17px', marginBottom: '7px'}}>
          <div className="close--menu--icon" onClick={() => this.props.closeMenu()}></div>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '17px'}} className="nav--group">
          <Link to={"/home"} onClick={() => this.props.closeMenu()}>首页</Link>
          {/*<Link to={"/ticket"} onClick={() => this.props.closeMenu()}>我的门票</Link>*/}
          {/*<Link to={"/user"} onClick={() => this.handleClickUser()}>个人中心</Link>*/}
          {/*<a href="javascript:" onClick={() => this.handleClick('/ticket')}>我的门票</a>*/}
          <a href="javascript:" onClick={() => this.handleClick('/user')}>个人中心</a>
          <a href="#">大会会刊</a>
          <Link to={"/dataagenda"} onClick={() => this.props.closeMenu()}>全部日程</Link>
          {/*<Link to={"/login"} onClick={() => this.props.closeMenu()}>大会商店</Link>*/}
          <Link to={"/activity"} onClick={() => this.props.closeMenu()}>现场活动</Link>
          {/*<Link to={"/login"} onClick={() => this.props.closeMenu()}>大会相册</Link>*/}
          <Link to={"/conferencenews"} onClick={() => this.props.closeMenu()}>大会新闻</Link>
          <Link to={"/map"} onClick={() => this.props.closeMenu()}>场馆地图</Link>
          <Link to={"/issue"} onClick={() => this.props.closeMenu()}>议题提交</Link>
          <Link to={"/sponsorship"} onClick={() => this.props.closeMenu()}>赞助合作</Link>
        </div>
      </div>
    )
  }
}