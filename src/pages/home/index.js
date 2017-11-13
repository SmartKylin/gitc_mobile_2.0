import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom';
import $ from 'jquery'
import {BackTop} from 'antd';
import ClassDetails from "components/ClassRooms/ClassDetails/ClassDetails"
import AgendaPople from "components/AgendaPople/AgendaPople"
import Team from "../../components/Team/Team"
import './home.scss';
import {pople} from "../../services/pople";
import storage from '../../helper/storage'
import PureRenderMixin from 'react-addons-pure-render-mixin';
import cloneDeep from 'lodash/cloneDeep'
import zanzhushang1 from '../../images/2017-11-11lgyd.jpg'

import {
  getDate1,
  getDate2
} from "../../services/home";

const LOGO_1 = require('components/images/logo1.jpg')
const LOGO_2 = require('components/images/logo2.jpg')
// const HEADER = require('components/images/logo2.jpg')
// const LOGO_01 = require('components/images/01.png')
const MAP = require('components/images/map.png')
const blink = require('components/images/icon装饰物切图_28.png')

const dateAry = ['11.23', '11.24']
const classNames = require('classnames')

export default class Activity extends Component {
  
  constructor(...args) {
    super(...args);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.switchDay = this.switchDay.bind(this)
    this.Bombbox = this.Bombbox.bind(this)
    this.state = {
      data: null,
      data1: [],
      DATAS: [],
      dadas: [],
      address: '主会场',
      adds: null,
      arrs: [],
      chairman: [],
      expert: [],
      guest: [],
      basedata: [],
      baseexpert: [],
      baseguest: [],
      // menuVisible: 'hidden',
      
      // 修正lvpeng的bug
      whichDay: 0,
      topicGroup: {
        0: [],
        1: []
      },
      guestList: {},
      currentTopic: '',
      isBombbox:false
    }
  }
  
  async componentWillMount() {
    document.title = "GITC"
    
    let phone = storage.get(storage.PHONE_KEY)
    if (!phone) {
      // this.props.history.openPop()
      phone = '13800138000'
    }
    
    pople('45', phone)
    .then(res => res.json())
    .then(data => {
      
      this.setState({
        chairman: data.data,
        basedata: data.data.slice(0, 6)
        
      })
      
    })
    pople('46', phone)
    .then(res => res.json())
    .then(data => {
      
      this.setState({
        expert: data.data,
        baseexpert: data.data.slice(0, 6)
      })
      
    })
    pople('47', phone)
    .then(res => res.json())
    .then(data => {
      this.setState({
        guest: data.data,
        baseguest: data.data.slice(0, 6)
      })
      
    })
    
    let topicGroup = {}
    await getDate1(phone)
    .then(res => res && res.json())
    .then(data => {
      topicGroup[0] = data.data
    })
    
    await getDate2(phone)
    .then(res => res && res.json())
    .then(data => {
      topicGroup[1] = data.data
    })
    await this.setState({
      topicGroup,
      guestList: topicGroup[this.state.whichDay][0].data,
    })
  
  }
  fn = () => {
    let add = this.state.dadas.find((obj) => {
      return obj.name = this.state.address
    })
    this.setState({
      adds: add
    })
  }
  
  
  async switchDay (index) {
    if (index !== this.state.whichDay) {
      await this.setState({
        whichDay: index,
      })
      await this.setState({
        guestList: this.state.lastGuestList || this.state.topicGroup[this.state.whichDay][0].data,
        lastGuestList: this.state.guestList
      })
     /* await this.setState({
        guestList: this.state.topicGroup[this.state.whichDay][0].data,
      })*/
    }
  }

  Bombbox(){
    console.log(this.state.isBombbox)
    this.setState({
      isBombbox: !this.state.isBombbox
    })
  }

  render() {
    let {whichDay, topicGroup, guestList} = this.state
    let obj = {
        collect: false,
        company: "思科",
        file_collect: false,
        files__id: null,
        files__url: null,
        id: 502,
        meet: "基础架构专场",
        meetaddr: "3F· 309B",
        name: "待定",
        pic: "",
        position: "待定",
        sdata: "2017-11-23",
        sintroduce: "待定",
        stheme: "开场致辞",
        stime: "10:00-10:10",
        summary: "待定",
    }
    let obj1= {
          collect: false,
          company: "麒麟会",
          file_collect: false,
          files__id: null,
          files__url: null,
          id: 502,
          meet: "主会场",
          meetaddr: "1F· 大宴会厅C",
          name: "王铮铮",
          pic: "",
          position: "CEO",
          sdata: "2017-11-23",
          sintroduce: "",
          stheme: "开幕式直播",
          stime: "09:00-10:00",
          summary: "",
      }
    return (
            <span>
                <div className="index-banner">
                </div>
                <div className="content">
                    <div className="highlights highlights">
                        <div className="Home-Link">
                            <div className="Home-Link-Inner">
                                <div className="Home-Link-Box">
                                <div className="Home-Link-Box-Img">
                                    <Link to={'/ticket'}><div style={{color:'#000000',fontSize:'38px'}} className="iconfont icon-menpiao"></div></Link>
                                </div>
                                <div className="Home-Link-Box-Text">我的门票</div>
                            </div>
                             <div className="Home-Link-Box">
                                <div className="Home-Link-Box-Img">
                                    <Link to={'/addgroup'}>  <div style={{color:'#000000',fontSize:'38px'}} className="iconfont icon-erweima"></div></Link>
                                </div>
                                <div className="Home-Link-Box-Text">现场加群</div>
                            </div>
                             <div className="Home-Link-Box">
                                <div className="Home-Link-Box-Img">
                                    <div style={{color:'#000000',fontSize:'38px'}} className="iconfont icon-xiangce"></div>
                                </div>
                                <div className="Home-Link-Box-Text">大会相册</div>
                            </div>
                             <div className="Home-Link-Box">
                                <div className="Home-Link-Box-Img">
                                    <Link to={'/activity'}><div style={{color:'#000000',fontSize:'38px'}} className="iconfont icon-huodongxianchang"></div></Link>
                                </div>
                                <div className="Home-Link-Box-Text">现场活动</div>
                            </div>
                            </div>
                        </div>
                        <h3 className="highlights-name ">大会亮点</h3>
                        <p className="highlights-title">THE HIGHLIGHTS</p>
                        <img src={blink} alt="" className="blue-link"/>
                        <ul className="highlights-ul clearfix">
                       
                            <li className="highlights-li ">
                                <span className="highlights-icon4"></span>
                                <div className="highlights-li-font ">品牌专场</div>
                                <div className="highlights-li-fonts ">重新定义品牌价值</div>
                            </li>
{/*                            <li className="highlights-li ">
                                <span className="highlights-icon5"></span>
                                <div className="highlights-li-font "> Tech Tutor</div>
                                <div className="highlights-li-fonts ">掌握最强最先进技术大触</div>
                            </li>*/}
                       {/*     <li className="highlights-li ">
                                <span className="highlights-icon6"></span>
                                <div className="highlights-li-font ">Tech+</div>
                                <div className="highlights-li-fonts ">技术带你感受游戏魅力</div>
                            </li>*/}
                            <li className="highlights-li ">
                                <span className="highlights-icon7"></span>
                                <div className="highlights-li-font pr">颁奖典礼
                                    <div className="pa-icon pa-icon2"></div>
                                </div>
                                <div className="highlights-li-fonts ">见证行业中的榜样力量</div>
                            </li>
                            <li className="highlights-li ">
                                <span className="highlights-icon8"></span>
                                <div className="highlights-li-font ">黑科技游乐园</div>
                                <div className="highlights-li-fonts ">感受游戏魅力,最真实表演</div>
                            </li>
                            <li className="highlights-li " >
                                <span className="highlights-icon9"></span>
                                <div className="highlights-li-font pr">邀请晚宴
                                    <div className="pa-icon pa-icon3"></div>
                                </div>
                                <div className="highlights-li-fonts ">互联网社交重头戏</div>
                            </li>
                        </ul>
                    </div>
                  {/*  <div className="special pas">
                        <h3 className="special-name">大会专题</h3>
                        <p className="special-title">GENERAL ASSEMBLY TOPICS</p>
                        <img src={blink} alt="" className="blue-link"/>
                        <ul className="special-ul ">
                            {this.state.DATAS ?
                            this.state.DATAS.map((data, index) => {
                              return <ClassDetails key={index} text={data.text} titleName={data.name}/>
                            }) : ""}
                        </ul>
                    </div>*/}
                    <div className="pr big">
                        <h3 className="agenda-name">大会议程</h3>
                        <p className="agenda-title">CONFERENCE AGENDA</p>
                        <img src={blink} alt="" className="blue-link"/>
                        <Link to="./dataagenda" className="look-all">查看全部 <i className="batn-add"></i></Link>
                    </div>
                  
                    <div className="agenda-content">
                        <div className="time">
                          {
                            dateAry.map((item, index) => (
                              <span
                              className={classNames('time1', {catbtn: this.state.whichDay === index})}
                              key={index}
                              onClick={() => this.switchDay(index)}
                              >{item}</span>
                            ))
                          }
                        </div>
                      
                        <div className="agenda-ul-box">

                            <div
                            // style={{display: "block"}}
                            >
                              <div
                              className="guest-topic"
                              >
                                {
                                  topicGroup[whichDay].map((item, index) => (
                                  <span
                                    key={index}
                                    onClick={() => this.setState({
                                      guestList: item.data,
                                        currentTopic: item.name
                                    })}
                                    className={classNames('agenda-btn', {active: guestList === item.data})}
                                    >{item.name}</span>
                                  ))
                                }
                              </div>
                              
                              <div className="agenda-pople-box agenda-pople-box-btn1">
                                <ul className="agenda-pople">
                                  {
                                      this.state.currentTopic && this.state.currentTopic  != '主会场' && this.state.whichDay == 0 &&
                                      <AgendaPople data={obj1} flag="1"/>
                                  }
                                 {
                                        this.state.currentTopic == '基础架构专场' && this.state.whichDay == 0 &&
                                        <AgendaPople data={obj} flag1="1"/>
                                 }
                                 {
                                  guestList.length && guestList.map((data, index) => (
                                  <AgendaPople
                                    key={index}
                                    data={data}
                                    openPop={this.props.history.openPop}
                                    closePop={this.props.history.closePop}
                                    setLoginCb={this.props.history.setLoginCb}
                                  />
                                  ))
                                 }
                                </ul>
                              </div>
                            </div>
                          <div className="btn-all btn-all-bottom ">
                            <Link to={'/issue'}
                                  style={{color: "#fff",fontSize:"14px"}}
                            >议题提交</Link>
                            <i className="batn-r"/>
                          </div>
                            <div className="guests-popole">
                              <div
                                className="highlights">
                                <h3 className="highlights-name ">大会嘉宾</h3>
                                <p className="highlights-title">CONFERENCE GUESTS</p>
                                <img src={blink} alt="" className="blue-link"/>
                              </div>
                              <Team
                                name='大会主席团'
                                basedata={this.state.basedata}
                                data={this.state.chairman}
                                openPop={this.props.history.openPop}
                                closePop={this.props.history.closePop}
                                setLoginCb={this.props.history.setLoginCb}/>
                              <Team
                                name="专家顾问团"
                                basedata={this.state.baseexpert}
                                data={this.state.expert}
                                openPop={this.props.history.openPop}
                                closePop={this.props.history.closePop}
                                setLoginCb={this.props.history.setLoginCb}/>
                              <Team
                                name="演讲嘉宾"
                                basedata={this.state.baseguest}
                                data={this.state.guest}
                                openPop={this.props.history.openPop}
                                closePop={this.props.history.closePop}
                                setLoginCb={this.props.history.setLoginCb}/>
                              </div>
                            <div className="logo">
                                <div className="highlights">
                                    <h3 className="highlights-name ">合作伙伴</h3>
                                    <p className="highlights-title">COOPERATIVE PARTNERS</p>
                                    <img src={blink} alt="" className="blue-link"/>
                                </div>
                            </div>
                            <div className="logo-contnet">
                            {/*    <p>官方视频直播平台</p>
                                <div className="live_video">
                                    <ul className="clearfix">
                                        <li className="logo_modu"></li>
                                    </ul>
                                </div>
                                <p>官方票务合作平台</p>
                                <div className="buy_tickets">
                                    <ul className="clearfix">
                                        <li className="logo_hdb"></li>
                                        <li className="logo_bghd"></li>
                                    </ul>
                                </div>*/}
                              {/*<p>钻石赞助</p>
                                <img src={LOGO_1} alt=""/>
                                <p>媒体合作</p>

                                <img src={LOGO_2} alt=""/>*/}
                              <img style={{width:'100%',height:'100%'}} src={zanzhushang1} alt=""/>
                              <Link to="./sponsorship" href="" className="btn-all btn-all-bottoms">赞助机会 <div
                              className="batn-r"></div></Link>
                            </div>
                            <div className="bg-b">
                                <div className="maps">
                                    <div className="highlights">
                                        <h3 className="highlights-name ">参会指南</h3>
                                        <p className="highlights-title">CONFERENCE GUIDANCE</p>
                                        <img src={blink} alt="" className="blue-link"/>
                                    </div>
                                    <img src={MAP} alt="" className="img"/>
                                    <p>时间:2017.11.23-11.24</p>
                                    <p>地址:国家会议中心</p>
                                    <p>乘车地址:地铁十五号线奥林匹克公园站H西南口下车</p>
                                </div>
                                <div className="about-me">
                                    <div className="highlights">
                                        <h3 className="highlights-name ">联系我们</h3>
                                        <p className="highlights-title">CONTACT US</p>
                                        <img src={blink} alt="" className="blue-link"/>
                                    </div>
                                    <p className="one">赞助大会&展览展示咨:business@kylinclub.org</p>
                                    <p>合作单位&合作媒体咨询:gitc@kylinclub.org</p>
                                    <p>麒麟会会员申请咨询:mrnmber@kylinclub.org</p>
                                    <p>志愿者招募:staff@kylinclub.org</p>
                                    <p>致电电话:010-88323888</p>
                                    <span className="code"></span>
                                </div>
                            </div>

                        </div>

                        <BackTop/>
                    </div>
                  {/*<strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}> gray </strong>*/}
                  <a href="https://www.bagevent.com/event/768490" className="live">购票</a>
                  <div className="weixin" onClick={this.Bombbox}>微信</div>
                  {
                    this.state.Bombbox ?
                    <div className="show">

                    </div>:""
                  }
                </div>
            </span>
    );
  }
}

