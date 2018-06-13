import React, {Component} from 'react'
import AccordionHeader from '../../components2/AccordionHeader'
import Introduce from "../Introduce/index";

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
    let {service, bgImg, index} = this.props
    let content = null
    try {
      content = JSON.parse(service.dic_json)
    } catch (e) {
      console.log(e);
    }
  
    return (
      <div className="my-accordion">
        <AccordionHeader
          name={service.name}
          changeCollapse={this.changeCollapse}
          bgImg={bgImg}
          enName={content.en}
          collapsed={collapsed}
          index={index}
        />

        {
          collapsed
          ? <div>
            {
              service.author != '0'
              ? <Introduce content={content}/>
              : <div dangerouslySetInnerHTML={{__html: service.content}} style={{width: '100%'}} />
            }
          </div>
          : null
        }
      </div>
    )
  }
}