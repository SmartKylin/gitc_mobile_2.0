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
                <span className="light-item-title">时间:</span>
                {service.time}
              </div>
              <div className="time">
                <span className="light-item-title">联系人:</span>
                {service.username}
              </div>
              <div className="addr">
                <span className="light-item-title">TEL:</span>
                <a href={`tel:${service.tel}`}>{service.tel}</a>
              </div>
              {
                service.email?
                    <div className="time">
                      <span className="light-item-title">E-MAIL:</span>
                      {service.email}
                      </div>:""
              }

            </div>: null
        }
      </div>
    )
  }
}