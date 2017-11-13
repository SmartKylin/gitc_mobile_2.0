import React, {Component} from 'react'
import './index.scss'
import {Link} from 'react-router-dom'

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
    let {data} = this.props
    console.log(data);
    let content = null
    try {
      content = JSON.parse(data.content)
    } catch (e) {
      console.log(e);
    }
    console.log(data,"data");
    return (
      <div className="my-accordion">
        <div className="accor-header" onClick={this.changeCollapse}>
          <div className="main-title">{data.name}</div>
          <div className="en-title">{data.summary || '英文标题'} </div>
          <i className={collapsed ? "iconfont icon-xiangxia" : "iconfont icon-xiangshang"}/>
        </div>
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