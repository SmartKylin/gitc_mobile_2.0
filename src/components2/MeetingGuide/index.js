import React, {Component} from 'react'
import Map from '../../components2/Map'
import MeetingImg from '../../images2/navigation_title.png'
import Title from "../../components/Title";


export default class extends Component {
  render () {
    return (
      <div>
        <div className="light-dot-img">
         {/* <img src={MeetingImg} alt=""/>*/}
         <Title name='会议地址'/>
        </div>
        <Map/>
      </div>
    )
  }
}