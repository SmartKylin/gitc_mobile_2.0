import React, {Component} from 'react'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
    }
  }
  
  changeCollapse = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  render () {
    let {name, enName, bgImg} = this.props
    let {collapsed} = this.state
    return (
      <div className="accor-header" onClick={this.changeCollapse} style={{background: `url(${bgImg}) no-repeat center`}}>
        <div className="main-title">{name}</div>
        <div className="en-title">{enName} </div>
        <i className={collapsed ? 'iconfont icon-xiangshang' : 'iconfont icon-xiangxia'} />
      </div>
    )
  }
}