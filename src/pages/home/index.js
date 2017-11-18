import React, {Component} from 'react'
import BannerImg from '../../images2/banner.png'
import './index.scss'
import agenda_title from '../../images2/大会日程.png'
import contact_us from '../../images2/fouterhome_03.png'
// import {Accordion, List} from 'antd-mobile'
// import 'antd-mobile/dist/antd-mobile.css'

import {getAgenda, getLightDot} from "../../services/home";
import Accor from '../../components2/Accordion'
import LightImg from '../../images2/light_dot.png'
import HighLight from '../../components2/Highlight'
import NineSquare from '../../components2/NineSquare'
import MeetingGuide from '../../components2/MeetingGuide'
import AllPeople from '../../components2/AllPeople'


import PointDiv from '../newHome/componets/PointDiv'

const generateImgAry = () => {
  let ary = [];
  for (let i = 1; i < 17; i++) {
    ary.push(require(`../../images2/accordion_bg${i}.png`))
  }
  return ary
}

let imgAry = generateImgAry()


export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      agendaData: [],
      highlightData: [],
    }
  }

  async componentWillMount () {
    document.title = "GITC"
    let res = await getAgenda()
    .then(res => res.json())
    await this.setState({
      agendaData: res.data
    })
    let data = await getLightDot().then(res => res.json())
    await this.setState({
      highlightData: data.data
    })

  }
  
  render () {
    
    let {agendaData, highlightData} = this.state
    return (
      <div className="entry-page">
        <div className="banner-wrapper">
          <img src={BannerImg} alt=""/>
        </div>
        
        {/*九宫格*/}
        <NineSquare/>
        
        
        {/*大会日程*/}
        <div className="agenda-wrapper">
          <img src={agenda_title} alt=""/>
        </div>
        <div className="accordion-wrapper">
          <div className="accordion">
            {
              agendaData.map((item, ind) => (
                <Accor
                  key={ind}
                  agenda={item}
                  bgImg={imgAry[ind]}
                />
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
               <HighLight key={ind} light={item} bgImg={imgAry[ind]}/>
              ))
            }
          </div>
        </div>

        
        {/*参会指南*/}
        <MeetingGuide/>
        
       {/* 联系我们*/}
        <div className="contact-us">
          <img src={contact_us}/>
        </div>
        <PointDiv/>
        
      </div>
    )
  }
}