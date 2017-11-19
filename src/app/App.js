import React, { Component } from 'react';
import './App.scss';
import RouterMap from '../router';

import Popup from 'components/popup'
import LoginBox from 'containers/login_box'
import Perf from 'react-addons-perf'
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {initWeixinSDK, weixinShare} from "../helper/weixin";
import {getWeixinConfig, getLoginStatus} from '../services/user'

import Actions from '../redux/action'
import {connect} from 'react-redux'

@connect(
  state => ({
    phone: state.phone,
    loginShow: state.loginShow,
    loginCb: state.loginCb
  }),
  {...Actions}
)

class App extends Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      loginBoxDisplay: 'none',
      cb: null
    }
  }
  componentDidMount(){
    window.Perf = Perf
    let share = {href: window.location.href}
    // const url = encodeURIComponent(window.location.href)
    const url = window.location.href
    
    share.title = "GITC2017全球互联网技术大会参会小助手"
    getWeixinConfig({url})
    .then(res => res.json())
    .then(data => {
      initWeixinSDK(data.data)
      weixinShare(share)
    })
  
  }
  async componentWillMount () {
    let {phone, loginOut} = this.props
    if(phone) {
      let res = await getLoginStatus({phone}).then(res=> res.json())
      if(!res.status) {
        loginOut()
      }
    }
  }
  render() {
    let {loginShow} = this.props
    return (
      <div className="App">
        <RouterMap/>
        <Popup display={loginShow? 'flex' : 'none'}>
          <LoginBox/>
        </Popup>
      </div>
    );
  }
}

export default App;
