import React, {Component} from 'react'
import './index.scss'

export default class extends Component {
  constructor (props) {
    super(props)
    /*  this.state = {
        display: 'flex'
      }*/
  }
  /*closePop = () => {
    this.setState({
      display: 'none'
    })
  }*/
  render () {
    let popStyle = {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, .5)',
      zIndex: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
    return (
      <div className="popup" style={{display: this.props.display}}>
        {this.props.children}
      </div>
    )
  }
}