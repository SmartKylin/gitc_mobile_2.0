import React, {Component} from 'react'
import './index.scss'
import Menu from 'containers/menu'

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      menuVisible: 'hidden',
      falg:false
    }
  }
  closeMenu = () => {
    this.setState({
      menuVisible: 'hidden'
    })
  }
  gradient =() =>{
      this.setState({
          falg: true
      })
  }
  render () {
    return (
    <div>    
      <div style={{display: 'flex', alignItems: 'center', position: 'relative', width: '100%', zIndex: '100', top: '20px', height: 0}}>
        <a style={{fontWeight:'800',width: '75px', height: '25px', lineHeight: '25px', textAlign: 'center', borderRadius: '12px', marginTop: '10px', fontSize: '11px', color: '#fff', position: 'relative', left: '65%'}} href={'https://www.bagevent.com/event/768490'} className={this.state.falg ? 'gradientA': 'gradient'} onClick={this.gradient}>现场购票</a>
        <div className="menu--icon" onClick={() => this.setState({menuVisible: true})} style={{position: 'absolute', right: '2%', top: '-15px'}}/>
        <Menu visibility={this.state.menuVisible} closeMenu={this.closeMenu} openPop={this.props.openPop} history={this.props.history} setLoginCb={this.props.setLoginCb}/>
      </div>
      {this.props.children}
    </div>
    
    )
  }
}