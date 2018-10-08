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
import Introduce from '../newHome/componets/introduction'

import PointDiv from '../newHome/componets/PointDiv'
import Brief from "../newHome/componets/brief";

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
    let {openPop, closePop, setLoginCb} = this.props.history
    return (
      <div className="entry-page">
        {/*banner---修改王杰*/}
        <div className="banner-wrapper">
          <img src={BannerImg} alt=""/>
        </div>
        
        {/*九宫格----修改库素*/}
        <NineSquare/>

        {/*大会简介-----新写库素*/}
        <Introduce/>
        {/*<Brief />*/}

        {/*会议结构 --- 修改王杰*/}
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
                  openPop={openPop}
                  closePop={closePop}
                  setLoginCb={setLoginCb}
                />
              ))
            }
          </div>
        </div>
        
        {/*会议地址---修改王杰 ++  交通信息*/}
        <MeetingGuide/>
        
       {/* 联系我们---修改王杰*/}
        <div className="contact-us">
          <img src={contact_us}/>
        </div>
        <PointDiv/>
        
      </div>
    )
  }
}