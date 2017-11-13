import React, {Component} from 'react'
import './index.scss'
import AccordionHeader from '../../components2/AccordionHeader'
import {Link} from 'react-router-dom'
// import SpeechItem from '../../components2/SpeechItem'

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
    let {light, bgImg} = this.props
    // console.log(light);
    let content = null
    try {
      content = JSON.parse(light.content)
    } catch (e) {
      console.log(e);
    }
    return (
      <div className="my-accordion">

        <AccordionHeader
          name={light.name}
          changeCollapse={this.changeCollapse}
          bgImg={bgImg}
          enName={light.summary}
          collapsed={collapsed}
        />
        {
          collapsed
          ? <div className="light-content">
            <div className="time">
              <span className="light-item-title">时间</span>
              {content.time}
            </div>
            <div className="addr">
              <span className="light-item-title">地点</span>
              {content.addr}
            </div>
            <div className="summary">
              <span className="light-item-title">介绍</span>
              {content.summary}
              {
                light.author != 0
                ? <Link to={''}>查看详情</Link> : null
              }
            </div>
          </div>
          : null
        }
      </div>
    )
  }
}