import React, {Component} from 'react'
import './index.scss'
import SpeechItem from '../../components2/SpeechItem'

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
    let {light} = this.props
    // console.log(light);
    let content = null
    try {
      content = JSON.parse(light.content)
    } catch (e) {
      console.log(e);
    }
    return (
      <div className="my-accordion">
        <div className="accor-header" onClick={this.changeCollapse}>
          <div className="main-title">{light.name}</div>
          <div className="en-title">{light.summary || '英文标题'} </div>
          <i className={collapsed ? 'iconfont icon-xiangshang' : 'iconfont icon-xiangxia'} />
        </div>
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
            </div>
          </div>
          : null
        }
      </div>
    )
  }
}