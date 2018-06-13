import React, {Component} from 'react'
import SpeechItem from '../../components2/SpeechItem'
import AccordionHeader from '../AccordionHeader'
export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
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
    let {openPop, closePop, setLoginCb} = this.props

    let obj = {
      pic:"",
      stime:"09:00-10:00",
      stheme:"开幕式直播",
      company:"",
      position:"主办方、协办方致辞，大会主席团成员共同亮相启动仪式，正式开启GITC年度盛典。",
    }

    let obj1 = {
      pic:"",
      stime:"10:00-10:10",
      stheme:"开场致辞",
      company:"思科",
      name:"待定",
      position:"待定"
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

        <div className={collapsed ? 'accor-content' : 'accor-content hidden-style'}>
          {agenda.name.indexOf("23") !=-1 && agenda.main != "主会场" ?<SpeechItem icon="yes" style='yes' speecher={obj}/> :""}

          {agenda.name.indexOf("23") !=-1 && agenda.main == "基础架构专场" ? <SpeechItem  speecher={obj1}/> :""}
          {
            agenda.data && agenda.data.length
            ? agenda.data.map((item, ind) => (
            <SpeechItem
              key={ind}
              speecher={item}

              openPop={openPop}
              closePop={closePop}
              setLoginCb={setLoginCb}
            />
            ))
            : null
          }
        </div>
      </div>
    )
  }
}