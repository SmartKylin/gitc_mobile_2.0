import React, {Component} from 'react'
import ChildBackground from 'containers/child_container'
import TicketList from './containers/ticketList'

export default class extends Component {
  render () {
    return (
      <ChildBackground>
        <TicketList/>
      </ChildBackground>
    )
  }
}