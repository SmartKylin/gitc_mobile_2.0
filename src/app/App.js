import React, { Component } from 'react';
import './App.scss';
import RouterMap from '../router'
// import Menu from 'containers/menu'
import {authCheck} from "../helper/login";

import Popup from 'components/popup'
import LoginBox from 'containers/login_box'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loginBoxDisplay: 'none',
      // menuVisible: 'hidden'
    }
  }
  closePop = () => {
    this.setState({
      loginBoxDisplay: 'none'
    })
    console.log('closePop' + this.path);
    /*if (this.path) {
     windosw
    }*/
  }
  openPop = (path) => {
    console.log("openpop" + path);
    this.setState({
      loginBoxDisplay: 'flex'
    })
    if (path) {
      this.path = path
    }
  }
  render() {
    return (
      <div className="App">
        <RouterMap openPop={this.openPop}/>
        <Popup display={this.state.loginBoxDisplay}>
          <LoginBox closePop={this.closePop}/>
        </Popup>
      </div>
    );
  }
  componentWillMount () {
    authCheck()
  }
}

export default App;
