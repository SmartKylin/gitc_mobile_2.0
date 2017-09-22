import React, {Component} from 'react'
import {Icon, Menu, SubMenu} from 'antd'
import "./index.scss"
export default class CollectionItem extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
    <div>
      <div><div className='collectionItemtime'>11月23日</div><div className='xian'></div></div>
      {
        this.props.data && this.props.data.map(item => (
          <div className='box'>
            <div className='boximg'>
              <div ><Icon type="file-pdf" style={{fontSize: '20px', color: '#263c68'}}/></div>
              <div className='boxiner'>
                <div className='boxinerTextA'><span>{item.stheme} || 前端开发等领域的技术热点</span></div>
                <div className='boxinerTextB'><span style={{fontSize:"8px"}}>{item.name}  小米|首席架构师</span></div>
              </div>
            </div>
            <div> <span>2017-01-01</span></div>
          </div>
        ))
      }
    </div>
    )
  }
}