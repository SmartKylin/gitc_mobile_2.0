import React, {Component} from 'react'
import AccordionHeader from '../../../components2/AccordionHeader'


export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: true,
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
    let {service, bgImg, iconName} = this.props

    return (
      <div className="my-accordion">

        <AccordionHeader
          name={service.name}
          changeCollapse={this.changeCollapse}
          bgImg={bgImg}
          enName={service.enName}
          collapsed={collapsed}
          iconName={iconName}
        />
        {
          collapsed
          ?
            <div className="light-content">
              <div className="time">
                <span className="light-item-title">时间</span>
                {service.time}
              </div>
              <div className="addr">
                <span className="light-item-title">电话</span>
                <a href="tel:18201440272">{service.tel}</a>
              </div>
            </div>
          : null
        }
      </div>
    )
  }
}