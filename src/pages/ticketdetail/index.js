import React, {Component} from 'react'
import ChildContainer from 'containers/child_container'
import ticketBg from '../../images/ticket-bg.png'
import './index.scss'

export default class extends Component {
  render() {
    return (
      <ChildContainer>
        <div style={{background: 'rgba(0, 0, 0, 0)', position: 'absolute'}}>
          <img src={ticketBg} alt="" className="ticket--bg"/>
        </div>
      </ChildContainer>
    )
  }
}
