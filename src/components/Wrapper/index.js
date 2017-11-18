import React, {Component} from 'react'

import Header from "../../components/Header";

export default class extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    let {history, children} = this.props
    return (
    <div>
      <Header
        history={history}
      />
      {children}
    </div>
    
    )
  }
}