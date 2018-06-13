import React, {Component} from 'react'
import BannerImg from '../../images2/banner.png'
import './index.scss'
import {getAgenda, getLightDot} from "../../services/home";
import Accor from '../../components2/Accordion'
import HighLight from '../../components2/Highlight'
import NineSquare from '../../components2/NineSquare'
import MeetingGuide from '../../components2/MeetingGuide'
import Title from "../../components2/Title/index";
import Footer from "../../components2/Footer/index";

const generateImgAry = () => {
  let ary = [];
  for (let i = 1; i < 5; i++) {
    ary.push(require(`../../images2/tu${i}.png`))
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

        <div className="banner-wrapper">
          <img src={BannerImg} alt=""/>
        </div>
        {/*九宫格*/}
        <NineSquare/>

        <Title Title="大会议程" EnglishName="AGENDA"/>
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

        <Title Title="亮点环节" EnglishName="HIGHLIGHT LINK"/>
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
        
        <Footer/>
        
      </div>
    )
  }
}