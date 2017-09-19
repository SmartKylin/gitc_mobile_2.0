import React, {Component} from 'react'
import './index.scss'
import logIcon from 'images/logo.png'

export default class extends Component {
  render () {
    return (
      <div className="container">
        <div style={{color: '#fff', display: 'flex', height: '40px', marginBottom: '15px', justifyContent: 'space-between'}}>
          <img src={logIcon} alt="logo" className="logo--icon"/>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <a style={{width: '75px', height: '25px', background: '#263c66', lineHeight: '25px', textAlign: 'center', borderRadius: '12px', marginTop: '8px', fontSize: '11px'}} href={'http://www.baidu.com'}>立即购买</a>
            <div style={{width: '25px', height: '25px', borderRadius: '50%', background: '#263c66', marginLeft: '15px', marginTop: '8px'}}></div>
          </div>
        </div>
        {this.props.children}
      </div>
    )
  }
}