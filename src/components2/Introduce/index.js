import React from 'react'
import './index.scss'
import {Link} from 'react-router-dom'

function getLinkbyName(name) {
  if (name.indexOf('品牌专场') > -1) {
    return  <Link to="/brand">查看详情</Link>
  } else if (name.indexOf('活动路演') > -1) {
    return <Link to="/roadshow">查看详情</Link>
  } else if (name.indexOf('集印章') > -1) {
    return <Link to="/collectstamp">查看详情</Link>
  } else {
    return null
  }
}


export default class Introduce extends React.Component{
  render(){
    let {content,light} = this.props
    return(
        <div className="light-content">
          <div className="summary">
            <div className="light-item-title">时间</div>
            <div>{content.time}</div>
          </div>
          <div className="summary">
            <div className="light-item-title">地点</div>
            <div>{content.addr}</div>
          </div>
          <div className="summary">
            <div className="light-item-title">介绍</div>
            <div>{content.summary}</div>
          </div>
          <div style={{textAlign: 'right'}}>
            {
              light ?  getLinkbyName(light.name) : ''
            }
          </div>
        </div>
    )
  }
}
