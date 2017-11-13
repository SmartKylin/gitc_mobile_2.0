import React, {Component} from 'react'
import './index.scss'
import {Link} from 'react-router-dom'
import AccordionHeader from '../../../../../../components2/AccordionHeader'

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
    let {data, bgImg} = this.props
    let content = null
    // try {
    //   content = JSON.parse(data.content)
    // } catch (e) {
    //   console.log(e);
    // }
    // console.log(data,"data");
    return (
      <div className="my-accordion">
  
        <AccordionHeader
          name={data.name}
          changeCollapse={this.changeCollapse}
          bgImg={bgImg}
          enName={data.summary}
          collapsed={collapsed}
        />
        {
          collapsed
          ? <div  className="Mycontent">
            <div>
              {data.content}
              <Link to={`/meetingdetails/${data.id}`} style={{color:"#ccc"}}>&nbsp;&nbsp;&nbsp;专题详情>></Link>
            </div>
          </div>
          : null
        }
      </div>
    )
  }
}