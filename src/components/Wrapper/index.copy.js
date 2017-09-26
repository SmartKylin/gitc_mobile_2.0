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
        <div style={{display: 'flex', alignItems: 'center', position: 'absolute', width: '100%', zIndex: '100'}}>
          <a style={{width: '100px', height: '30px', background: '#263c66', lineHeight: '30px', textAlign: 'center', borderRadius: '12px', marginTop: '-10%', fontSize: '12px', color: '#fff', position: 'relative', left: '66%'}} href={'https://www.bagevent.com/event/768490'} onClick={()=>{this.bianse}}>立即购买</a>
          <div className="menu--icon" onClick={() => this.setState({menuVisible: true})} style={{position: 'absolute', right: '2%', marginTop: '-5%'}}/>
          <Menu visibility={this.state.menuVisible} closeMenu={this.closeMenu} openPop={this.props.openPop} history={this.props.history}/>
        </div>
        {this.props.children}
      </div>
     
    )
  }
}