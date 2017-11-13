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
    return (
      <div className="my-accordion">
        <div className="accor-header" onClick={this.changeCollapse} style={{background: `url(${bgImg}) no-repeat center`}}>
          <div className="main-title">{agenda.name.name}</div>
          <div className="en-title">{agenda.json.en || '英文标题'} </div>
          <i className={collapsed ? 'iconfont icon-xiangshang' : 'iconfont icon-xiangxia'} />
        </div>
        {
          collapsed
          ? <div className="accor-content">
            {
              agenda.data && agenda.data.length
              ? agenda.data.map((item, ind) => (
                <SpeechItem key={ind} speecher={item}/>
              ))
              : null
            }
          </div>
          : null
        }
      </div>
    )
  }
}