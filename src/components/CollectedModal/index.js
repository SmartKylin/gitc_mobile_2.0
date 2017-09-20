import React, {Component} from 'react'
import './index.scss'

export default class extends Component {
  constructor () {
    super()
    this.state = {
      display: 'block'
    }
  }
  componentDidMount () {
    setTimeout(() => {
      this.setState({
        display: 'none'
      })
    }, 3000)
  }
  render () {
    return (
      <div className={'collection--wrap'} style={{display: this.state.display}}>
        <div style={{marginTop: '121px'}}>收藏成功</div>
        <div>可以在个人中心查看~</div>
      </div>
    )
  }
}