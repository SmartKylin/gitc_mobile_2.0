import React, {Component} from 'react'
import SponsorshipMain from './containers/sponsorshipMain'
import ChildBackground from 'containers/child_container'
import CollectedModal from 'components/CollectedModal'

export default class extends Component {
  render () {
    return (
      <ChildBackground>
        <SponsorshipMain/>
        <CollectedModal/>
      </ChildBackground>
    )
  }
}