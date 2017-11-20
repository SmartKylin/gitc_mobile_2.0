import React, {Component} from 'react'
import './index.scss'
import SpeechItem from '../../components2/SpeechItem'
import AccordionHeader from '../AccordionHeader'
import Sike from '../../images/sike.jpg'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: true,
    }
  }
  
  changeCollapse = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  render () {
    let {collapsed} = this.state
    let {agenda, bgImg} = this.props
    // let json = JSON.parse(agenda.json)
    // console.log(json);
    let obj = {
      pic:"",
      stime:"09:00-10:00",
      stheme:"开幕式直播",
      company:"",
      position:"主办方、协办方致辞，大会主席团成员共同亮相启动仪式，正式开启GITC年度盛典。",
    }

    let obj1 = {
      pic: Sike,
      stime:"10:00-10:10",
      stheme:"开场致辞",
      company:"思科",
      name:"柴建",
      position: "大中华区副总裁兼运营商事业部总经理"
    }
    return (
      <div className="my-accordion">
        <AccordionHeader
          name={agenda.name}
          changeCollapse={this.changeCollapse}
          bgImg={bgImg}
          enName={agenda.json.en || agenda.ename}
          collapsed={collapsed}
        />

        <div className={collapsed ? 'accor-content hidden-style' : 'accor-content'}>
          {agenda.name.indexOf("23") !=-1 && agenda.main != "主会场" ?<SpeechItem icon="yes" style='yes' speecher={obj}/> :""}

          {agenda.name.indexOf("23") !=-1 && agenda.main == "基础架构专场" ? <SpeechItem  speecher={obj1}/> :""}
          {
            agenda.data && agenda.data.length
            ? agenda.data.map((item, ind) => (
            <SpeechItem
            key={ind}
            speecher={item}
            
            />
            ))
            : null
          }
        </div>
      </div>
    )
  }
}