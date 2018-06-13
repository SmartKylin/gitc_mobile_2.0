import React from 'react'
import './index.scss'
import {Link} from 'react-router-dom'

function getLinkbyName(name) {
  if (name.indexOf('品牌专场') > -1) {
    return  <div className="bright-title"><Link to="/brand">查看详情</Link></div>
  } else if (name.indexOf('活动路演') > -1) {
    return <div className="bright-title"><Link to="/roadshow">查看详情</Link></div>
  } else if (name.indexOf('集印章') > -1) {
    return <div className="bright-title"><Link to="/collectstamp">查看详情</Link></div>
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
          <div className="bright-spot" style={{textAlign: 'right'}}>
            {
              light ?  getLinkbyName(light.name) : ''
            }
          </div>
        </div>
    )
  }
}
