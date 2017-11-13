import React, {Component} from 'react'
import './index.scss'

let BMap = window.BMap
export default class extends Component {
  componentDidMount () {
    let map = new BMap.Map("container")
    let point = new BMap.Point(116.404, 39.915);
    map.centerAndZoom(point, 15);
  }
  render() {
    return (
      <div className="map-page" id="container">
      
      </div>
    )
  }
}