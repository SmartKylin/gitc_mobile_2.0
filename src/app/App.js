import React, { Component } from 'react';
import './App.scss';
import RouterMap from '../router';
// import storage from '../helper/storage'

import Popup from 'components/popup'
import LoginBox from 'containers/login_box'
import Perf from 'react-addons-perf'
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {initWeixinSDK, weixinShare} from "../helper/weixin";
import {getWeixinConfig, getLoginStatus} from '../services/user'
import storage from '../helper/storage'


class App extends Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      loginBoxDisplay: 'none',
      cb: null
    }
  }
  closePop = () => {
    this.setState({
      loginBoxDisplay: 'none'
    })
  }
  openPop = () => {
    // console.log("openpop" + path);
    this.setState({
      loginBoxDisplay: 'flex'
    })
  }
  setLoginCb = (fn) => {
    this.setState({
      cb: fn
    })
  }
  componentDidMount(){
    window.Perf = Perf
    // let share = {href: window.location.origin}
    let share = {href: 'http://wz.thegitc.com'}
    // const url = encodeURIComponent(window.location.href)
    // const url = encodeURIComponent('http://wz.thegitc.com')
    const url = window.location.href
    // const url = window.location.origin
    // console.log(window.location.href, 'fjdksjfksd');
  
    share.title = "GITC2018全球互联网技术大会参会小助手"
    getWeixinConfig({url})
    .then(res => res.json())
    .then(data => {
      initWeixinSDK(data.data)
      weixinShare(share)
  
    })
  
  }
  async componentWillMount () {
    let phone = storage.get(storage.PHONE_KEY)
    this.phone = phone
    if(phone) {
      let res = await getLoginStatus({phone}).then(res=> res.json())
      if(!res.status) {
        storage.remove(storage.PHONE_KEY)
      }
    }
  }
  render() {
    return (
      <div className="App">
        <RouterMap openPop={this.openPop} closePop={this.closePop} setLoginCb={this.setLoginCb}/>
        <Popup display={this.state.loginBoxDisplay}>
          <LoginBox closePop={this.closePop} loginSuccess={this.state.cb}/>
        </Popup>
      </div>
    );
  }
}

export default App;
