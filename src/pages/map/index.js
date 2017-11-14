import React, {Component} from 'react'
// import SponsorshipMain from './containers/sponsorshipMain'
import ChildBackground from 'containers/child_container'
// import CollectedModal from 'components/CollectedModal'
import './index.scss'
import $ from 'jquery'
import {getListImgs} from '../../services/getListNews'

// const img1 = require('components/images/map1.jpg')
const img1 = require('../../images/1层地图.jpg')
const img3 = require('../../images/3层地图.jpg')
// const img3 = require('components/images/map2.jpg')
const img4 = require('components/images/map3.jpg')

export default class Map extends Component {
  constructor(...args) {
    super(...args)
    this.state = {
      add: '一',
      imgSize:100,
      addColor:'#fff',
      imgPop:'none'
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
  addClick(e){
    e.stopPropagation()
    if(this.state.imgSize>=240){
      
      return false
    }else{
      this.setState({
        imgSize:this.state.imgSize+50
      })
    }
  }
  cutClick(e){
    e.stopPropagation()
    if(this.state.imgSize<=100){
    
      return false
    }else{
      this.setState({
        imgSize:this.state.imgSize-50
      })
    }
  }
  openImg(){
    this.setState({
      imgPop:'block'
    })
  }
  closeImg(){
    this.setState({
      imgPop:'none'
    })
  }
  render() {
    return (
    <ChildBackground>
      <div className="map-box">
        <div className="map-img-box">
          <h4>GITC北京站 一一 {this.state.add}层平面图</h4>
          
          {this.state.add == "一" ? <img src={img1} alt="" className="map-img" onClick={this.openImg.bind(this)}/> : ""}
          {this.state.add == "三" ? <img src={img3} alt="" className="map-img" onClick={this.openImg.bind(this)}/> : ""}
          {this.state.add == "四" ? <img src={img4} alt="" className="map-img" onClick={this.openImg.bind(this)}/> : ""}
        </div>
        
        <div className="map-btn" onClick={this._heandeClick.bind(this)}>
          <div name="四">4F</div>
          <div name="三">3F</div>
          <div name="一" className="btn">1F</div>
        </div>
      </div>
      <div className="img-pop" style={{display:this.state.imgPop}} onClick={this.closeImg.bind(this)}>
        <div className="img-container">
        {this.state.add == "一" ? <img src={img1} alt="" className="map-img img-size" style={{width:`${this.state.imgSize}%`,height:`${this.state.imgSize}%`}}/>: ""}
        {this.state.add == "三" ? <img src={img3} alt="" className="map-img img-size" style={{width:`${this.state.imgSize}%`,height:`${this.state.imgSize}%`}}/>: ""}
        {this.state.add == "四" ? <img src={img4} alt="" className="map-img img-size" style={{width:`${this.state.imgSize}%`,height:`${this.state.imgSize}%`}}/>: ""}
        </div>
        <div className="map-scal">
          <div  className="btn-link" onClick={this.addClick.bind(this)} style={{background:this.state.imgSize>='250'?'#ccc':"#fff"}}>+</div>
          <div className="divbottom" onClick={this.cutClick.bind(this)} style={{background:this.state.imgSize<='100'?'#ccc':"#fff"}}>-</div>
        </div>
      </div>
    </ChildBackground>
    )
  }
}

