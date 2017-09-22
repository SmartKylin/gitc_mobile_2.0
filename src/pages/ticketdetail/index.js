import React, {Component} from 'react'
import ChildContainer from 'containers/child_container'
import ticketBg from '../../images/ticket-bg.png'
import vip from '../../images/vip_03.png'
import zhuanye from '../../images/专业观众票_03.png'
import jichu from '../../images/基础架构_07.png'
import dahui from '../../images/大会通票_03.png'
import dashuju from '../../images/大数据_07.png'
import yunwei from '../../images/运维专场票_03.png'
import zhanlan from '../../images/展览票_03.png'
import menpiao from '../../images/2门票_03.png'
import './index.scss'
import JsBarcode from 'jsbarcode'

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
            <div  className='menpiaoImg'>
              <img src={menpiao} alt="" ref={img => this.img = img} id="barcode"/>
            </div>
            <div className='menpiaoText1'>
              <div><span className='danhang'>白云山科技提醒您：到展位抽奖</span></div>
              <div><span className='danhang'>展位地址：3楼387q</span></div>
            </div>
          </div>
          <div className="ticket--instructions">
            <div>使用说明</div>
            <div>1、本活动凭票入场，一人一票一次性使用；</div>
            <div>2、请截屏保存此条形码，保持条形码清晰，以便作为入场凭证。</div>
            <div>官网：www.thegitc.com 客服：010-88323888</div>
          </div>
          <div className="ticket--rights">
            <img className='ticketImg' src={vip} alt=""/>
          </div>
        </ChildContainer>
      </div>
    )
  }
}
