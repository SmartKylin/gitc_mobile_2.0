import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import { message } from 'antd';
// import * as Actions from '../../redux/action'
import Actions from '../../redux/action';
import { connect } from 'react-redux';

// @connect(
//   state => ({
//     phone: state.phone
//   }),
//   {...Actions}
// )

class Menu extends Component {
  handleClick = path => {
    let { phone, closeMenu, setLoginCb, openLoginPop } = this.props;
    closeMenu();

    if (phone) {
      this.props.history.push(path);
    } else {
      message.info('您还没有登录');
      openLoginPop && openLoginPop();

      let cb = () => {
        this.props.history.push(path);
      };

      setLoginCb(cb);
    }
  };
  signOut = () => {
    // let phone = storage.get(storage.PHONE_KEY)
    // if (phone) {
    //   storage.remove(storage.PHONE_KEY)
    //   message.success('注销成功')
    // }
    if (this.props.phone) {
      this.props.loginOut();
    }
    this.props.closeMenu();
    this.props.history.push('/home');
  };

  render() {
    let { phone } = this.props;
    return (
      <div
        style={{
          with: '100%',
          height: 'calc(100vh)',
          backgroundColor: 'rgba(0, 0, 0, .9)',
          visibility: this.props.visibility,
          position: 'absolute',
          top: '0',
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: '999'
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            padding: '0 15px',
            marginTop: '17px',
            marginBottom: '7px'
          }}
        >
          <div
            className="close--menu--icon"
            onClick={() => this.props.closeMenu()}
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontSize: '17px'
          }}
          className="nav--group"
        >
          <Link to={'/home'} onClick={() => this.props.closeMenu()}>
            首页
          </Link>
          <a href="javascript:" onClick={() => this.handleClick('/ticket')}>
            我的门票
          </a>
          <a href="javascript:" onClick={() => this.handleClick('/user')}>
            个人中心
          </a>

          {/*<a href="#">大会会刊</a>*/}
          {/*<Link to={"/dataagenda"} onClick={() => this.props.closeMenu()}>全部日程</Link>*/}
          <Link to={'/president'} onClick={() => this.props.closeMenu()}>
            大会主席团
          </Link>
          <Link to={'/expert'} onClick={() => this.props.closeMenu()}>
            专家顾问团
          </Link>
          <Link to={'/speecher'} onClick={() => this.props.closeMenu()}>
            演讲嘉宾
          </Link>
          <Link to={'/agenda'} onClick={() => this.props.closeMenu()}>
            大会日程
          </Link>
          <Link to={'/light'} onClick={() => this.props.closeMenu()}>
            亮点环节
          </Link>
          <Link to={'/topic'} onClick={() => this.props.closeMenu()}>
            大会专题
          </Link>

          {/*<Link to={"/login"} onClick={() => this.props.closeMenu()}>大会商店</Link>*/}
          {/*<Link to={"/activity"} onClick={() => this.props.closeMenu()}>现场活动</Link>*/}
          {/*<Link to={"/login"} onClick={() => this.props.closeMenu()}>大会相册</Link>*/}
          {/*<Link to={"/conferencenews"} onClick={() => this.props.closeMenu()}>大会新闻</Link>*/}

          <Link to={'/'} onClick={() => this.props.closeMenu()}>
            精彩内容
          </Link>
          <Link to={'/service'} onClick={() => this.props.closeMenu()}>
            服务信息
          </Link>
          <Link to={'/map'} onClick={() => this.props.closeMenu()}>
            场馆地图
          </Link>

          {/*<Link to={"/map"} onClick={() => this.props.closeMenu()}>场馆地图</Link>*/}
          {/*<Link to={"/issue"} onClick={() => this.props.closeMenu()}>议题提交</Link>*/}
          {/*<Link to={"/sponsorship"} onClick={() => this.props.closeMenu()}>赞助合作</Link>*/}
          {/* <Link to={"/awards"} onClick={() => this.props.closeMenu()}>奖项评选</Link>*/}
          {phone && (
            <a
              style={{ fontSize: '20px' }}
              href="javascript:;"
              onClick={this.signOut}
            >
              注销
            </a>
          )}
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    phone: state.phone
  }),
  { ...Actions }
)(Menu);
