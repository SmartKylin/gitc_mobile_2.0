import React, {Component} from 'react'
import './index.scss'
import SpeechItem from '../../components2/SpeechItem'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: true,
    }
  }
  
  changeCollapse = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  render () {
    let {collapsed} = this.state
    return (
      <div className="my-accordion">
        <div className="accor-header" onClick={this.changeCollapse}>
          <div className="main-title">主会场</div>
          <div className="en-title">Main Meeting</div>
          <img src="" alt=""/>
        </div>
        {
          collapsed
          ? <div className="accor-content">
            {
              [1, 2, 3, 4].map(item => (
                <SpeechItem/>
              ))
            }
          </div>
          : null
        }
      </div>
    )
  }
}