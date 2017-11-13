import React, {Component} from 'react'
import Header from "../../components/Header";

export default class extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
    <div>
      <Header openPop={this.props.openPop} history={this.props.history} setLoginCb={this.props.setLoginCb}/>
      {this.props.children}
    </div>
    
    )
  }
}