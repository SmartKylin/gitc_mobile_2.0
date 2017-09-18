import React, {Component} from 'react'
import Popup from 'component/popup'
import LoginBox from './containers/login_box'
import './index.scss'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Popup>
          <LoginBox></LoginBox>
        </Popup>
      </div>
    )
  }
}