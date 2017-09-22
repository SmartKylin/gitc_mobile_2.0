import React, {Component} from 'react'
import ChildContainer from 'containers/child_container'
import ticketBg from '../../images/ticket-bg.png'
import {getTicketDetail} from "../../services/ticket";
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
import storage from '../../helper/storage'

// 根据票种得到对应门票的权益背景图
let getBgByTicket = (ticket) => {
  switch (ticket) {
    case 'VIP票':
      return vip;
    case '专业观众票':
      return zhuanye;
    case '基础架构票':
      return jichu;
    case '大会通票':
      return dahui;
    case '大数据专场票':
      return dashuju;
    case '运维专场票':
      return yunwei;
    case '展览票':
      return zhanlan;
  }
}


export default class extends Component {
  constructor () {
    super();
    this.state = {
      minHeight: document.documentElement?document.documentElement.clientHeight:document.body.clientHeight,
      barcodeString: '',
      name: '',
      ticket: ''
    }
  }
  componentWillMount () {
    // 设置门票标题
    document.title = "门票"
  }
  componentDidMount () {
    
    let phone = storage.get(storage.PHONE_KEY)
    // 门票ID
    let cid = this.props.match.params.id
    getTicketDetail({phone, cid})
    .then(res => {
      if (res) {
        return res.json()
      }
    })
    .then( async data => {
      await this.setState({
        ticket: data.data && data.data.ticket || '基础架构专场票',
        barcodeString: data.data && data.data.code || '5848540983250432',
        name: data.data && data.data.name || '程潇'
      })
      
      // 生成条形码
      JsBarcode(this.barcode, this.state.barcodeString,
      {
        displayValue: false,  //  不显示原始值
        // background: '#4b8b7f',  //  背景色
        blank: 100,
        lineColor: 'rgba(255,255,255)', // 线条颜色
        width: 1.5  // 线条宽度
      })
    })
    .catch(() => {
      this.history.goBack()
    })
    
  }
  render() {
    return (
      <div>
        <ChildContainer>
          <div style={{background: 'rgba(0, 0, 0, 0)', marginTop: '10.5%', position: 'relative', display: 'flex', justifyContent: 'center'}}>
            <img src={ticketBg} alt="" className="ticket--bg"/>
            <div className="ticket--type">
              <div style={{fontSize: '13px', fontWeight: 'bold'}}>{this.state.name}</div>
              <div>{this.state.ticket}</div>
            </div>
            <div className="ticket--barcode">
              <svg ref={ barcde => this.barcode = barcde}></svg>
            </div>
            <div style={{position: 'absolute', top: '20%'}}>{this.state.barcodeString}</div>
            <div  className='menpiaoImg'>
              <img src={menpiao} alt=""/>
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
            <img className='ticketImg' src={getBgByTicket(this.state.ticket)} alt=""/>
          </div>
        </ChildContainer>
      </div>
    )
  }
}
