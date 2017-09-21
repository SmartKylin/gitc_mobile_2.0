import React, {Component} from 'react'
import LoginBox from 'containers/login_box'
import Popup from 'components/popup'
import ChildContainer from 'containers/child_container'

export default class extends Component {
  constructor () {
    super()
    this.state = {
      display: 'flex'
    }
  }
  closePop = () => {
    this.setState({
      display: 'none'
    })
  }
  render () {
    return (
      <ChildContainer>
        <Popup display={this.state.display}>
          <LoginBox closePop={this.state.closePop}/>
        </Popup>
      </ChildContainer>
    )
  }
}