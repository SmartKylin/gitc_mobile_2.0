import React from 'react';
import './index.scss';
import Menu from 'containers/menu';
// import {Link} from 'react-router-dom'
import { message } from 'antd';

import { connect } from 'react-redux';
import Actions from '../../redux/action';

// @connect(
//   state => ({
//     phone: state.phone
//   }),
//   {...Actions}
// )
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuVisible: 'hidden',
      falg: false,
      styleTop: false,
      falgTop: true
    };
  }
  closeMenu = () => {
    this.setState({
      menuVisible: 'hidden'
    });
  };

  gradient = () => {
    this.setState({
      falg: true
    });
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    let scrollTop = this.getScrollTop();
    if (scrollTop > 0) {
      this.setState({
        styleTop: true
      });
    } else {
      this.setState({
        styleTop: false
      });
    }
  };

  getScrollTop = () => {
    let scrollTop = 0;
    if (document.documentElement && document.documentElement.scrollTop) {
      scrollTop = document.documentElement.scrollTop;
    } else if (document.body) {
      scrollTop = document.body.scrollTop;
    }
    return scrollTop;
  };

  handleClick = path => {
    let { phone, history, openLoginPop, setLoginCb } = this.props;
    // console.log(phone);

    if (phone) {
      history.push(path);
    } else {
      message.info('您还没有登录');
      openLoginPop();
      let cb = () => {
        history.push(path);
      };
      setLoginCb(cb);
    }
  };
  render() {
    let styleTop = {
      background: 'rgba(0,0,0,0.5)'
    };
    return (
      <div className="HeaderBox">
        <div
          className="HeaderInner"
          style={this.state.styleTop ? styleTop : {}}
        >
          <div className="HeaderBoxLogo" />
          <div className="HeaderBoxGPBox">
            <a
              href={'https://www.bagevent.com/event/768490'}
              className={this.state.falg ? 'gradientA' : 'gradient'}
              onClick={this.gradient}
            >
              现场购票
            </a>
            {/*<Link    to={'/ticket'}><a >我的门票</a></Link>*/}

            <a
              className={this.state.falg ? 'gradientA' : 'gradient'}
              href="javascript:"
              onClick={() => this.handleClick('/ticket')}
            >
              我的门票
            </a>

            {/*    <Link  className={this.state.falg ? 'gradientA': 'gradient'}  to={'/ticket'}><a >现场购票</a></Link>
              <a  href={'https://www.bagevent.com/event/768490'} className={this.state.falg ? 'gradientA': 'gradient'} onClick={this.gradient}>我的门票</a>*/}
            <div
              className="HeaderBoxGPBox-sangang"
              onClick={() => this.setState({ menuVisible: true })}
            />
            <Menu
              visibility={this.state.menuVisible}
              closeMenu={this.closeMenu}
              history={this.props.history}
              // openPop={this.props.openPop}
              // setLoginCb={this.props.setLoginCb}
            />
          </div>
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
)(Header);
