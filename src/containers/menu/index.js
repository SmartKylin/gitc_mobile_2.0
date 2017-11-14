import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.scss'
import storage from '../../helper/storage'
import {message} from 'antd'

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
  signOut = () => {
    let phone = storage.get(storage.PHONE_KEY)
    if (phone) {
      storage.remove(storage.PHONE_KEY)
      message.success('注销成功')
    }
    this.props.closeMenu()
    this.props.history.push('/home')
  }
  
  render () {
    return (
      <div style={{with: '100%', height: '568px', backgroundColor: 'rgba(0, 0, 0, .9)', visibility: this.props.visibility, position: 'absolute', top: '0', left: 0, right: 0, bottom: 0, zIndex: '999'}}>
        <div style={{display: 'flex', justifyContent: 'flex-end', padding: '0 15px', marginTop: '17px', marginBottom: '7px'}}>
          <div className="close--menu--icon" onClick={() => this.props.closeMenu()}></div>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '17px'}} className="nav--group">
          <Link to={"/home"} onClick={() => this.props.closeMenu()}>首页</Link>
          <a href="javascript:" onClick={() => this.handleClick('/ticket')}>我的门票</a>
          <a href="javascript:" onClick={() => this.handleClick('/user')}>个人中心</a>
          {/*<a href="#">大会会刊</a>*/}
          
          {/*<Link to={"/dataagenda"} onClick={() => this.props.closeMenu()}>全部日程</Link>*/}
          {/*<Link to={"/login"} onClick={() => this.props.closeMenu()}>大会商店</Link>*/}
          {/*<Link to={"/activity"} onClick={() => this.props.closeMenu()}>现场活动</Link>*/}
          {/*<Link to={"/login"} onClick={() => this.props.closeMenu()}>大会相册</Link>*/}
          {/*<Link to={"/conferencenews"} onClick={() => this.props.closeMenu()}>大会新闻</Link>*/}
          <Link to={"/"} onClick={() => this.props.closeMenu()}>精彩内容</Link>
          <Link to={"/map"} onClick={() => this.props.closeMenu()}>场馆地图</Link>
          {/*<Link to={"/issue"} onClick={() => this.props.closeMenu()}>议题提交</Link>*/}
          {/*<Link to={"/sponsorship"} onClick={() => this.props.closeMenu()}>赞助合作</Link>*/}
         {/* <Link to={"/awards"} onClick={() => this.props.closeMenu()}>奖项评选</Link>*/}
            {
                storage.get(storage.PHONE_KEY) && <a href="javascript:;" onClick={this.signOut}>注销</a>
            }
        </div>
      </div>
    )
  }
}