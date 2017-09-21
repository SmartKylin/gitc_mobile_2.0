import React, {Component} from 'react'
import {Icon} from 'antd'
import "./index.scss"
export default class extends Component {
  render () {
    return (
    <div className='box'>
      <div className='boximg'>
        <div ><Icon type="file-pdf" style={{fontSize: '20px', color: '#263c68'}}/></div>
        <div className='boxiner'>
          <div className='boxinerTextA'><span>前端开发等领域的技术热点</span></div>
          <div className='boxinerTextB'><span style={{fontSize:"8px"}}>崔保秋  小米|首席架构师</span></div>
        </div>
      </div>
      <div> <a href="">查看</a></div>
    </div>
    )
  }
}
