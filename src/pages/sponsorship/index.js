import React, {Component} from 'react'
import SponsorshipMain from './containers/sponsorshipMain'
import ChildBackground from 'containers/child_container'

export default class extends Component {
  render () {
    return (
      <ChildBackground>
        <SponsorshipMain/>
      </ChildBackground>
    )
  }
}