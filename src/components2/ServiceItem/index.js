import React, {Component} from 'react'
import './index.scss'
import AccordionHeader from '../../components2/AccordionHeader'
import {Link} from 'react-router-dom'
// import SpeechItem from '../../components2/SpeechItem'

function getLinkbyName(name) {
  if (name.indexOf('品牌专场') > -1) {
    return  <Link style={{color:"#35a2e8"}} to="/brand">查看详情</Link>
  } else if (name.indexOf('活动路演') > -1) {
    return <Link style={{color:"#35a2e8"}} to="/roadshow">查看详情</Link>
  } else if (name.indexOf('集印章') > -1) {
    return <Link style={{color:"#35a2e8"}} to="/collectstamp">查看详情</Link>
  } else {
    return null
  }
}

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
    }
  }
  componentWillMount () {
  }
  
  changeCollapse = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  render () {
    let {collapsed} = this.state
    let {service, bgImg, index} = this.props
    let content = null
    try {
      content = JSON.parse(service.content)
    } catch (e) {
      console.log(e);
    }
  
    return (
      <div className="my-accordion">

        <AccordionHeader
          name={service.name}
          changeCollapse={this.changeCollapse}
          bgImg={bgImg}
          enName={service.summary}
          collapsed={collapsed}
          // headerIcon={'icon-yongcan'}
          index={index}
        />
        {
          collapsed
          ? <div>
            {
              // service.author
              service.author != '0'
              // ? (service.content)
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
                    <span className="light-item-title">说明</span>
                    {content.summary}
                  </div>
                </div>
              : <div dangerouslySetInnerHTML={{__html: service.content}} style={{width: '100%'}} />
            }
          </div>
          : null
        }
      </div>
    )
  }
}