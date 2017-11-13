import React, {Component} from 'react'
import './index.scss'
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
    // let json = JSON.parse(agenda.json)
    // console.log(json);
    let obj = {
      pic:"",
      stime:"09:00-10:00",
      meet:"开幕式致辞",
      company:"",
      position:"主办方、协办方致辞，大会主席团成员共同亮相启动仪式，正式开启GITC年度盛典",

    }
    return (
      <div className="my-accordion">
        {/*<div className="accor-header" onClick={this.changeCollapse} style={{background: `url(${bgImg}) no-repeat center`}}>
          <div className="main-title">{agenda.name}</div>
          <div className="en-title">{agenda.json.en || '英文标题'} </div>
          <i className={collapsed ? 'iconfont icon-xiangshang' : 'iconfont icon-xiangxia'} />
        </div>*/}
        <AccordionHeader
          name={agenda.name}
          changeCollapse={this.changeCollapse}
          bgImg={bgImg}
          enName={agenda.json.en || agenda.ename}
          collapsed={collapsed}
        />
        {
          collapsed
          ? (<div className="accor-content">
              <SpeechItem  style='yes' speecher={obj}/>
            {
              agenda.data && agenda.data.length
              ? agenda.data.map((item, ind) => (
                <SpeechItem key={ind} speecher={item}/>
              ))
              : null
            }
          </div>)
          : null
        }
      </div>
    )
  }
}