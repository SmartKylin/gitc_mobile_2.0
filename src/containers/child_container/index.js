import React, {Component} from 'react'
import './index.scss'
import logIcon from 'images/logo.png'
// import menuIcon from '../../images/menu-icon.svg'
import Menu from '../menu'

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      menuVisible: 'hidden'
    }
  }
  closeMenu = () => {
    this.setState({
      menuVisible: 'hidden'
    })
  }
  render () {
    return (
      <div className="container">
        <div style={{color: '#fff', display: 'flex', height: '40px', marginBottom: '15px', justifyContent: 'space-between'}}>
          <img src={logIcon} alt="logo" className="logo--icon"/>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <a style={{width: '75px', height: '25px', background: '#263c66', lineHeight: '25px', textAlign: 'center', borderRadius: '12px', marginTop: '8px', fontSize: '11px'}} href={'http://www.baidu.com'}>立即购买</a>
            <div className="menu--icon" onClick={() => this.setState({menuVisible: true})}></div>
            <Menu visibility={this.state.menuVisible} closeMenu={this.closeMenu}></Menu>
          </div>
        </div>
        {this.props.children}
      </div>
    )
  }
}