import React, {Component} from 'react'
import LoginBox from 'containers/login_box'
import Popup from 'components/popup'

export default class extends Component {
  render () {
    return (
      <Popup>
        <LoginBox/>
      </Popup>
    )
  }
}