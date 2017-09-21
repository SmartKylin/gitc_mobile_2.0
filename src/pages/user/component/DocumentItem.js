import React, {Component} from 'react'
import {Icon} from 'antd'

export default class extends Component {
  render () {
    return (
      <div style={{height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <div>
          <Icon type="file-pdf" style={{fontSize: '23px', color: '#263c68'}}/>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <div>前端开发等领域的技术热点</div>
            <div>崔保秋  小米|首席架构师</div>
          </div>
        </div>
        <a href="">查看</a>
      </div>
    )
  }
}