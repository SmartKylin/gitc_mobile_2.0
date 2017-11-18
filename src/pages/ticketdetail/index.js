import React, {Component} from 'react'
import ChildContainer from 'containers/child_container'
import ticketBg from '../../images/ticket_bj.png'
import ticketUsed from '../../images/ticket_used.png'
import {getTicketDetail} from "../../services/ticket";
import vip from '../../images/vip.png'
import zhuanye from '../../images/专业观众.png'
import jichu from '../../images/基础架构.png'
import dahui from '../../images/通票.png'
import dashuju from '../../images/大数据.png'
import yunwei from '../../images/运维.png'
import zhanlan from '../../images/展览票.png'
import quanqiuhua from '../../images/全球化.png'
import './index.scss'
import JsBarcode from 'jsbarcode'
import storage from '../../helper/storage'


// 根据票种得到对应门票的权益背景图
let getBgByTicket = (ticket) => {
  switch (ticket) {
    case 'VIP门票':
      return vip;
    case '专业观众票':
      return zhuanye;
    case '基础架构专场票':
      return jichu;
    case '大会通票':
      return dahui;
    case '大数据&人工智能专场票':
      return dashuju;
    case '运维专场票':
      return yunwei;
    case '展览票':
      return zhanlan;
      case '全球化专场票':
          return quanqiuhua;
    default:
      return dahui;
  }
}


export default class extends Component {
  constructor () {
    super();
    this.state = {
      minHeight: document.documentElement?document.documentElement.clientHeight:document.body.clientHeight,
      barcodeString: '',
      name: '',
      ticket: '',
      signStatus: 2,
    }
  }
  componentWillMount () {
    // 设置门票标题
    document.title = "我的门票"
  }
  componentDidMount () {
    
    let phone = storage.get(storage.PHONE_KEY)
    //code 码
    let code = this.props.match.params.code
    let token='1afb756d16740266efde290917ca1a8e'
    getTicketDetail({phone,code, token })
    .then(res => {
        if (res) {
        return res.json()
      }
    })
    .then( async data => {
        await this.setState({
        ticket: data.data && data.data.bt__name,
        barcodeString: data.data && data.data.code,
        name: data.data && data.data.name,
        signStatus: data.data && data.data.sign_staus
      })
      
      // 生成条形码
      JsBarcode(this.barcode, code,
      {
        displayValue: true,  //  不显示原始值
        // background: '#4b8b7f',  //  背景色
        blank: 100,
        lineColor: 'rgba(255,255,255)', // 线条颜色
        width: 1.5,  // 线条宽度
        height: 50
      })
    })
    .catch((err) => {
        this.props.history.goBack()
    })
    
  }
  render() {
    let {signStatus} = this.state
    return (
      <div>
        <ChildContainer>
          <div style={{background: 'rgba(0, 0, 0, 0)', marginTop: '10.5%', position: 'relative', display: 'flex', justifyContent: 'center'}}>
            
            <img src={ticketBg} alt="" className="ticket--bg"/>
            {
              signStatus == 2
              ? <img className={'ticket-stamp'} alt="" src={ticketUsed}/>
              : null
            }
            <div className="ticket--type">
              <div style={{fontSize: '13px', fontWeight: 'bold'}}>{this.state.name}</div>
              <div>{this.state.ticket}</div>
            </div>
            <div className="ticket--barcode">
              <svg ref={ barcde => this.barcode = barcde}></svg>
            </div>
            
          </div>
          <div className="ticket--instructions">
            <div>使用说明</div>
            <div>1、本活动凭票入场，一人一票一次性使用；</div>
            <div>2、请截屏保存此条形码，保持条形码清晰，以便作为入场凭证。</div>
          </div>
          <div className="ticket--rights">
            <img className='ticketImg' src={getBgByTicket(this.state.ticket)} alt=""/>
          </div>
        </ChildContainer>
      </div>
    )
  }
}
