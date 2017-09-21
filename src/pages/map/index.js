import React, { Component } from 'react'
// import SponsorshipMain from './containers/sponsorshipMain'
import ChildBackground from 'containers/child_container'
// import CollectedModal from 'components/CollectedModal'
import './index.scss'
const MAP = require('components/images/map.png')
export default class Map extends Component {
  constructor(...args) {
    super(...args)
  }
  render() {
    return (
      <ChildBackground>
        <div className="map-box">
          <img src={MAP} alt="" className="map-img" />
          <div className="map-btn">
            <div>3F</div>
            <div>2F</div>
            <div>1F</div>
          </div>
        </div>
      </ChildBackground>
    )
  }
}

