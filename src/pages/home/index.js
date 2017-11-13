import React, {Component} from 'react'
import BannerImg from '../../images2/banner.png'
import {Link} from 'react-router-dom'
import './index.scss'
import agenda_title from '../../images2/大会日程.png'
import contact_us from '../../images2/contact-us.png'
// import {Accordion, List} from 'antd-mobile'
import {getDate1, getLightDot} from "../../services/home";
import Accor from '../../components2/Accordion'
import LightImg from '../../images2/light_dot.png'
import HighLight from '../../components2/Highlight'
import MeetingImg from '../../images2/navigation_title.png'
import Map from '../../components2/Map'

import 'antd-mobile/dist/antd-mobile.css'


const generateNineAry = () => {
  let ary = []
  for (let i = 0; i < 9; i++) {
    ary.push(require(`../../images2/nine_0${i+1}.png`))
  }
  return ary
}
let  nine_imgs = generateNineAry()

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      agendaData: [],
      highlightData: [],
    }
  }
  async componentWillMount () {
    let res = await getDate1()
    .then(res => res.json())
    await this.setState({
      agendaData: res.data
    })
    let data = await getLightDot().then(res => res.json())
    await this.setState({
      highlightData: data.data
    })
    console.log(this.state.highlightData);
  }
  
  render () {
    let {agendaData, highlightData} = this.state
    return (
      <div className="entry-page">
        <div className="banner-wrapper">
          <img src={BannerImg} alt=""/>
        </div>
        
        {/*九宫格*/}
        <div className="nine-square">
          {
            nine_imgs.map((item, index) => (
              <Link to={''} key={index}>
                <img src={item} alt=""/>
              </Link>
            ))
          }
        </div>
        {/*大会议程*/}
        <div className="agenda-wrapper">
          <img src={agenda_title} alt=""/>
        </div>
        <div className="accordion-wrapper">
          <div className="accordion">
            {
              agendaData.map((item, ind) => (
              <Accor key={ind} agenda={item}/>
              ))
            }
          </div>
        </div>
        {/*大会亮点*/}
        <div className="light-dot-img">
          <img src={LightImg} alt=""/>
        </div>

        <div className="accordion-wrapper">
          <div className="accordion">
            {
              highlightData.map((item, ind) => (
               <HighLight key={ind} light={item}/>
              ))
            }
          </div>
        </div>
        {/*参会指南*/}
        <div className="light-dot-img">
          <img src={MeetingImg} alt=""/>
        </div>
        
        <Map/>
        {/*联系我们*/}
        <div className="contact-us">
          <img src={contact_us} alt=""/>
        </div>
       
      </div>
    )
  }
}