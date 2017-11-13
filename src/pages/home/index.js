import React, {Component} from 'react'
import BannerImg from '../../images2/banner.png'
import {Link} from 'react-router-dom'
import './index.scss'
import agenda_title from '../../images2/大会日程.png'
import contact_us from '../../images2/contact-us.png'
import {Accordion, List} from 'antd-mobile'
import {getDate1, getLightDot} from "../../services/home";
import Accor from '../../components2/Accordion'

import 'antd-mobile/dist/antd-mobile.css'

const AccrodionHeader = (props) => (
  <div style={{fontSize: '16px', color: '#fff', height: '.48rem!important'}} >
    {/*<div>{props.name}</div>*/}
    {/*<div style={{fontSize: '9px'}}>{props.enName}</div>*/}
    <div style={{height: '16px!important'}}>主会场</div>
    <div style={{fontSize: '9px', height: '10px!important'}}>MAIN MEETING</div>
  </div>
)

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
      agendaData: []
    }
  }
  async componentWillMount () {
    let res = await getDate1()
    .then(res => res.json())
    await this.setState({
      agendaData: res.data
    })
    let data = await getLightDot().then(res => res.json())
    console.log(this.state.agendaData);
    console.log(data);
  }
  
  render () {
    let {agendaData} = this.state
    return (
      <div className="entry-page">
        <div className="banner-wrapper">
          <img src={BannerImg} alt=""/>
        </div>
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
        {/*手风琴*/}
        {
          [].length
          ? <div className="accordion-wrapper">
              <Accordion defaultActiveKey="0" className="my-accordion" onChange={this.onChange}>
                {
                  agendaData.map((item, ind) => (
                    <Accordion.Panel
                      header={
                        <AccrodionHeader name={item.name} enName={item.other.en}/>
                      }
                      key={ind}
                    >
                      <List className="my-list">
                        <List.Item>content 1</List.Item>
                        <List.Item>content 2</List.Item>
                        <List.Item>content 3</List.Item>
                      </List>
                    </Accordion.Panel>
                  ))
                }
              </Accordion>
            </div>
          : null
        }
        <div className="contact-us">
          <img src={contact_us} alt=""/>
        </div>

        <div className="accordion-wrapper">
          <Accor/>
        </div>
      </div>
    )
  }
}