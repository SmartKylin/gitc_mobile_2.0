import React, {Component} from 'react'
import {Icon} from 'antd'
import "./index.scss"
export default class CollectionItem extends Component {
  render () {
    // console.log(this.props.data.id,"12312312");
    return (
    <div>
      {this.props.data.id==4?<div><div className='collectionItemtime'>11月23日</div><div className='xian'></div></div>:""}
      <div className='box'>
        <div className='boximg'>
          <div ><Icon type="file-pdf" style={{fontSize: '20px', color: '#263c68'}}/></div>
          <div className='boxiner'>
            <div className='boxinerTextA'><span>前端开发等领域的技术热点</span></div>
            <div className='boxinerTextB'><span style={{fontSize:"8px"}}>崔保秋  小米|首席架构师</span></div>
          </div>
        </div>
        <div> <span>2017-01-01</span></div>
      </div>
    </div>
    )
  }
}