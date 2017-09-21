import React, {Component} from 'react'
import './index.scss'
import Menu from 'containers/menu'

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
    <div>
      <div style={{display: 'flex', alignItems: 'center', position: 'relative', width: '100%', zIndex: '100', top: '20px', height: 0}}>
        <a style={{width: '75px', height: '25px', background: '#263c66', lineHeight: '25px', textAlign: 'center', borderRadius: '12px', marginTop: '10px', fontSize: '11px', color: '#fff', position: 'relative', left: '65%'}} href={'https://www.bagevent.com/event/768490'}>立即购买</a>
        <div className="menu--icon" onClick={() => this.setState({menuVisible: true})} style={{position: 'absolute', right: '2%', top: '-15px'}}/>
        <Menu visibility={this.state.menuVisible} closeMenu={this.closeMenu} openPop={this.props.openPop} history={this.props.history}/>
      </div>
      {this.props.children}
    </div>
    
    )
  }
}