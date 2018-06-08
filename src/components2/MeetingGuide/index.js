import React, {Component} from 'react'
import Map from '../../components2/Map'
import Title from "../Title/index";
import './index.scss'

export default class extends Component {
  render () {
    return (
      <div className="location-box">
        <Title Title="会议地址" EnglishName="LOCATION"/>
        <Map/>
        <div className="location-box-address">
          <ul>
            <li>时间:  2018-07-05 ~ 2018-07-06</li>
            <li>地点：宝华中心</li>
            <li>乘车路线：XXXXXXXXXX</li>
          </ul>
        </div>
      </div>
    )
  }
}