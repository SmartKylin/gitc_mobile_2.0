import React, {Component} from 'react'
import SponsorshipMain from './containers/sponsorshipMain'
import ChildBackground from 'containers/child_container'
// import CollectedModal from 'components/CollectedModal'

export default class extends Component {
  componentWillMount () {
    document.title = "赞助合作"
  }
  render () {
    return (
      <ChildBackground>
        <SponsorshipMain/>
        {/*<CollectedModal/>*/}
      </ChildBackground>
    )
  }
}