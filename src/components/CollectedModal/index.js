import React, {Component} from 'react'
import './index.scss'

export default class extends Component {
  constructor () {
    super()
    this.state = {
      display: 'block'
    }
  }
  // 关闭模态框
  closeModal = () => {
    this.setState({
      display: 'none'
    })
  }
  render () {
    return (
      <div className={'collection--wrap'} style={{display: this.state.display}}>
        <div className="close--area">
          <div alt="" className="close--icon" onClick={() => this.closeModal()}></div>
        </div>
        <div style={{marginTop: '86px'}}>收藏成功</div>
        <div>可以在个人中心查看~</div>
      </div>
    )
  }
}