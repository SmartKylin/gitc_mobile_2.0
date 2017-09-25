import React, {Component} from 'react'
// import SponsorshipMain from './containers/sponsorshipMain'
import ChildBackground from 'containers/child_container'
// import CollectedModal from 'components/CollectedModal'
import './index.scss'
import $ from 'jquery'

const img1 = require('components/images/floor1.png')
const img3 = require('components/images/floor3.png')
const img4 = require('components/images/floor4.png')
export default class Map extends Component {
  constructor(...args) {
    super(...args)
    this.state = {
      add: '一'
    }
  }
  
  componentWillMount() {
    document.title = "场馆地图"
  }
  
  _heandeClick(e) {
    $('.map-btn div').removeClass('btn')
    $(e.target).addClass('btn');
    this.setState({
      add: $(e.target).attr("name")
    })
  }
  
  render() {
    return (
    <ChildBackground>
      <div className="map-box">
        <div className="map-img-box">
          <h4>GITC北京站 一一 {this.state.add}层平面图</h4>
          
          {this.state.add == "一" ? <img src={img1} alt="" className="map-img"/> : ""}
          {this.state.add == "三" ? <img src={img3} alt="" className="map-img"/> : ""}
          {this.state.add == "四" ? <img src={img4} alt="" className="map-img"/> : ""}
        </div>
        
        <div className="map-btn" onClick={this._heandeClick.bind(this)}>
          <div name="四">4F</div>
          <div name="三">3F</div>
          <div name="一" className="btn">1F</div>
        </div>
      </div>
    </ChildBackground>
    )
  }
}

