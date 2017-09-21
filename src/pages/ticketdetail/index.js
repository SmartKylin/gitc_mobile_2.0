import React, {Component} from 'react'
import ChildContainer from 'containers/child_container'
import ticketBg from '../../images/ticket-bg.png'
import './index.scss'

export default class extends Component {
  constructor () {
    super();
    this.state = {
      minHeight: document.documentElement?document.documentElement.clientHeight:document.body.clientHeight
    }
  }
  render() {
    return (
      <div>
        <ChildContainer style={{position: "static",minHeight:`${this.state.minHeight}px`, paddingBottom: "10px", }}>
          <div style={{background: 'rgba(0, 0, 0, 0)', marginTop: '10.5%', position: 'relative', display: 'flex', justifyContent: 'center'}}>
            <img src={ticketBg} alt="" className="ticket--bg"/>
            <div className="ticket--type">基础架构票</div>
          </div>
          <div className="ticket--instructions">
            <div>使用说明</div>
            <div>1、本活动凭票入场，一人一票一次性使用；</div>
            <div>2、请截屏保存此条形码，保持条形码清晰，以便作为入场凭证。</div>
            <div>官网：www.thegitc.com 客服：010-88323888</div>
          </div>
          <div className="ticket--rights">
            <div>门票权益</div>
            <div>特别权益</div>
            <div>会议期间</div>
          </div>
        </ChildContainer>
      </div>
    )
  }
}
