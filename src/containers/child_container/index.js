import React, {Component} from 'react'
import './index.scss'
import logIcon from 'images/logo.png'

export default class extends Component {
  render () {
    const style = this.props.style?this.props.style:{}
      return (
      <div className="container" style={style}>
        <div style={{color: '#fff', display: 'flex', height: '40px', marginBottom: '15px', justifyContent: 'space-between'}}>
<<<<<<< HEAD
          <img src={logIcon} alt="logo" className="logo--icon" />
          <div style={{display: 'flex', alignItems: 'center'}}>
=======
          <img src={logIcon} alt="logo" className="logo--icon"/>
          {/*<div style={{display: 'flex', alignItems: 'center'}}>
>>>>>>> 5faae74f47285fa7443865e8a9a3728d5ca89fa5
            <a style={{width: '75px', height: '25px', background: '#263c66', lineHeight: '25px', textAlign: 'center', borderRadius: '12px', marginTop: '8px', fontSize: '11px', color: '#fff'}} href={'http://www.baidu.com'}>立即购买</a>
            <div className="menu--icon" onClick={() => this.setState({menuVisible: true})}></div>
            <Menu visibility={this.state.menuVisible} closeMenu={this.closeMenu}></Menu>
          </div>*/}
        </div>
        {this.props.children}
      </div>
    )
  }
}