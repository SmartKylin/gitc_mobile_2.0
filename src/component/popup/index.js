import React, {Component} from 'react'
import './index.scss'

export default class extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div className="popup">
        {this.props.children}
      </div>
    )
  }
}