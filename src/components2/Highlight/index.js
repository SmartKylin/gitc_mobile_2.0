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
    let {light, bgImg} = this.props
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
          ? <Introduce content={content} light={light}/>
          : null
        }
      </div>
    )
  }
}