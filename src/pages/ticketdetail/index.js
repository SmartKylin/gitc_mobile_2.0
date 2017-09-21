import React, {Component} from 'react'
import ChildContainer from 'containers/child_container'
import ticketBg from '../../images/ticket-bg.png'
import './index.scss'
<<<<<<< HEAD
// import JsBarcode from 'jsbarcode'
=======
import Right from './component/right'
import JsBarcode from 'jsbarcode'
>>>>>>> 46cdc7f95a826772cbfe1720ff0e98eef2214c20
// import Canvas from 'react-canvas'

export default class extends Component {
  constructor () {
    super();
    this.state = {
      minHeight: document.documentElement?document.documentElement.clientHeight:document.body.clientHeight
    }
  }
  componentWillMount () {
    // JsBarcode("#barcode", "212111111121")
    document.title = "门票"
  }
  render() {
    return (
      <div>
        <ChildContainer>
          <div style={{background: 'rgba(0, 0, 0, 0)', marginTop: '10.5%', position: 'relative', display: 'flex', justifyContent: 'center'}}>
            <img src={ticketBg} alt="" className="ticket--bg"/>
            <div className="ticket--type">
              <div style={{fontSize: '13px', fontWeight: 'bold'}}>毛不易</div>
              <div>基础架构专场票</div>
            </div>
            <img src="" alt="" ref={img => this.img = img} id="barcode"/>
          </div>
          <div className="ticket--instructions">
            <div>使用说明</div>
            <div>1、本活动凭票入场，一人一票一次性使用；</div>
            <div>2、请截屏保存此条形码，保持条形码清晰，以便作为入场凭证。</div>
            <div>官网：www.thegitc.com 客服：010-88323888</div>
          </div>
          <div className="ticket--rights">
            <div style={{fontSize: '14px'}}>门票权益</div>
            <div style={{fontSize: '12px'}}>
              <div>
                特别权益
                <div className="rights--row">
                  <span style={{flex: 1}}>VIP休息室</span>
                  <span style={{flex: 1}}>VIP纪念馆</span>
                  <span style={{flex: 1}}>同声传译</span>
                  <span style={{flex: 1}}>前排坐席</span>
                </div>
                <div className="rights--row">
                  <span>领袖峰会</span>
                  <span>VIP餐</span>
                  <span>普通餐</span>
                  <Right title="领袖峰会" access={true}></Right>
                </div>
              </div>
              <div className="rights--row">
                会议期间
                <span>主会场</span>
                <span>企业专场</span>
                <span>TECH+</span>
                <span>运营专场</span>
              </div>
            </div>
          </div>
        </ChildContainer>
      </div>
    )
  }
}
