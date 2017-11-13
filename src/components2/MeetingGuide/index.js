import React, {Component} from 'react'
import Map from '../../components2/Map'
import MeetingImg from '../../images2/navigation_title.png'


export default class extends Component {
  render () {
    return (
      <div>
        <div className="light-dot-img">
          <img src={MeetingImg} alt=""/>
        </div>
        <Map/>
      </div>
    )
  }
}