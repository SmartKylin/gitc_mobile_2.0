import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import AccordionHeader from '../../../../components2/AccordionHeader'

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
              <div>{data.content}</div>
              <div className="Mycontent-Div">
                <div className="Mycontent-Title">
                  <Link to={`/meetingdetails/${data.id}`}>
                    专题详情
                  </Link>
                </div>
            </div>
          </div>
          : null
        }
      </div>
    )
  }
}