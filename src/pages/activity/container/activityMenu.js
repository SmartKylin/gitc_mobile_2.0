import React, {Component} from 'react'
import {Menu, Icon} from 'antd'
import 'antd/dist/antd.css'
import './index.scss'
// import img from '../../../images/yueguangjifeng.jpg'

const {SubMenu} = Menu

export default class extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let subMenuStyle = {
      marginLeft: '-12px'
    }
    return (
    <div className="user">
      <Menu
      mode="inline"
      style={{background: '#fff', marginTop: '35px', borderRadius: '5px',paddingBottom:'3px'}}
      >
        {
          this.props.data && this.props.data.map((item, index) => (
            <SubMenu key={`sub${index}`} title={<span style={subMenuStyle} className="activity--title" ><Icon type="file-text" style={{color: '#336cfa', fontSize: '17px'}}/><span>{item.name}</span></span>}>
              <img src={item.img || ""} alt="" style={{width: '100%', padding: '0 10px', height: '200px'}}/>
              <div style={{padding: '0 15px'}}>
                <div dangerouslySetInnerHTML={{__html: `${item.content}`}}/>
              </div>
            </SubMenu>
          ))
        }
      </Menu>
    </div>
    )
  }
}