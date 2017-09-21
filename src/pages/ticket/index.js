import React, {Component} from 'react'
import ChildBackground from 'containers/child_container'
import TicketList from './containers/ticketList'
import {authCheck} from "../../helper/login";

export default class extends Component {
  render () {
    return (
      <ChildBackground>
        <TicketList/>
      </ChildBackground>
    )
  }
  /*componentWillMount () {
    let iphone = authCheck()
    if (!iphone) {
      this.props.history.push('/')
    } else {
      this.iphone = iphone
    }
  }*/
}