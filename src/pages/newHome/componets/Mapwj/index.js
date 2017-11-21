import React, { Component } from 'react';
import './index.scss';
import MeetingImg from './images/navigation_title1.png';
import Map from '../../../../components2/Map/index';

export default class extends Component {
  render() {
    return (
      <div>
        {/*参会指南*/}
        <div className="light-dot-img">
          <img src={MeetingImg} alt="" />
        </div>

        <Map />
      </div>
    );
  }
}
