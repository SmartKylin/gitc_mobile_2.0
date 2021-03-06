import React, {Component} from 'react'
import './index.scss'
import logIcon from 'images/logo.png'


/*
window.onresize = function() {
  let minHeight = document.documentElement?document.documentElement.clientHeight:document.body.clientHeight
  this.setState ? this.setState(minHeight): null
};
*/

export default class extends Component {
  constructor () {
    super();
    this.state = {
      minHeight: document.documentElement?document.documentElement.clientHeight:document.body.clientHeight
    }
  }
  
  
  render () {
   /* window.setState = (minHeight) => {
      this.setState({
        minHeight
      })
    }*/
    const style={position: "static",minHeight:`${this.state.minHeight}px`, paddingBottom: "10px"}
      return (
      <div className={this.props.Awards?"containerAwards":"container"} style={style}>
        <div style={{color: '#fff', display: 'flex', height: '40px', marginBottom: '15px', justifyContent: 'space-between'}}>
          {/*<div style={{display: 'flex', alignItems: 'center'}}>
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
