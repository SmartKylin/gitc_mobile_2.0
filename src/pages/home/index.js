import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom';
import $ from 'jquery'
import {BackTop} from 'antd';
// import { PREFIX_URL,request } from "../common"
// import { getShopList, handlePhone } from "../common"
import ClassDetails from "components/ClassRooms/ClassDetails/ClassDetails"
import ClassRooms from "components/ClassRooms/ClassRooms"
import AgendaPople from "components/AgendaPople/AgendaPople"
import Team from "../../components/Team/Team"
// import BackgroundAll from "components/BackgroundAll/BackgroundAll"
// // import fetchJsonp from 'fetch-jsonp';
import './home.css';
// import StgItem from "components/stg.item";
import {getPopleList} from "../../services/home";
import Menu from 'containers/menu'
import {pople} from "../../services/pople";
import {pagepople} from "../../services/pagepople";

const LOGO_1 = require('components/images/logo1.jpg')
const LOGO_2 = require('components/images/logo2.jpg')
// const HEADER = require('components/images/logo2.jpg')
// const LOGO_01 = require('components/images/01.png')
const MAP = require('components/images/map.png')
const blink = require('components/images/b_link.png')
export default class Activity extends Component {
  constructor(...args) {
    super(...args);
    this.onFetch = this.onFetch.bind(this)
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
      guest: []
      // menuVisible: 'hidden'
    }
    this.onfetchBtn = this.onfetchBtn.bind(this)
  }
  
  componentWillMount() {
    
    
    pople('45').then(res => res.json())
    .then(data => {
      
      this.setState({
        chairman: data.data
      })
      console.log(this.state.chairman, 'ppppppppppppppppppppppp')
      
      // if(this.state.dadas.name=="主会场"){
      //     console.log(this.state.dadas,'ok')
      // }
    })
    pople('46').then(res => res.json())
    .then(data => {
      
      this.setState({
        expert: data.data
      })
      console.log(this.state.expert, 'ppppppppppppppppppppppp')
      
      // if(this.state.dadas.name=="主会场"){
      //     console.log(this.state.dadas,'ok')
      // }
    })
    pople('47').then(res => res.json())
    .then(data => {
      
      this.setState({
        guest: data.data
      })
      console.log(this.state.guest, 'ppppppppppppppppppppppp')
      
      // if(this.state.dadas.name=="主会场"){
      //     console.log(this.state.dadas,'ok')
      // }
    })
    pagepople('person-4').then(res => res.json())
    .then(data => {
      
      this.setState({
        dadas: data.data
      })
      
      
      // if(this.state.dadas.name=="主会场"){
      //     console.log(this.state.dadas,'ok')
      // }
    })
    
    console.log(this.props.history);
    let rooms = require("../../mock/data.json");
    this.setState({
      data: rooms,
      data1: rooms["DATA23"],
      DATAS: rooms["DATAS"],
      toggle: true
    })
    
  }
  
  fn = () => {
    console.log("123123123123")
    let add = this.state.dadas.find((obj) => {
      return obj.name = this.state.address
    })
    this.setState({
      adds: add
    })
  }
  
  
  componentDidMount() {
    
    let _this = this
    $('.agenda-ul-toggle-box span').on('click', function (e) {
      let ad = e.target.innerHTML;
      
      // console.log(this)
      _this.setState({
        address: ad
      })
      
      _this.fn()
      _this.setState({
        arrs: _this.state.adds.data
      })
      
    })
    
    
    $('.agenda-ul-toggle-box1 span').on('click', function (e) {
      $('.agenda-ul-toggle-box1 span').removeClass('agenda-btn')
      $(e.target).addClass('agenda-btn')
    })
    $('.agenda-ul-toggle-box2 span').on('click', function (e) {
      $('.agenda-ul-toggle-box2 span').removeClass('agenda-btn')
      $(e.target).addClass('agenda-btn')
    })
    getPopleList(4).then(data => data.json()).then(data => {
      console.log(data)
    })
    
  }
  
  onfetchBtn(e) {
    console.log(e.target.innerHTML)
  }
  
  onFetch(e) {
    if (e.target.getAttribute('name') == "DATA23") {
      $('.agenda-ul-toggle-box1 span').removeClass('agenda-btn')
      $('.agenda-btnon').addClass('agenda-btn')
      this.setState({
        toggle: true
      })
    }
    else {
      $('.agenda-ul-toggle-box2 span').removeClass('agenda-btn');
      $('.agenda-btnon').addClass('agenda-btn')
      this.setState({
        toggle: false
      })
    }
    $('.time span').removeClass('catbtn');
    $(e.target).addClass('catbtn');
    console.log(e.target.innerHTML)
    // e.target.removeAttribute('style','color:#fff;')
    this.setState({
      data1: this.state.data[e.target.getAttribute('name')]
    })
  }
  
  /* closeMenu = () => {
     this.setState({
       menuVisible: 'hidden'
     })
   }*/
  
  render() {
    console.log(this.state.chairman, 'mmmmmmmmmm')
    return (
    <span>
                <div className="index-banner">
                    <div className="ban"></div>
                </div>
                <div className="content">
                    <div className="highlights highlights">
                        <h3 className="highlights-name ">大会亮点</h3>
                        <p className="highlights-title">ASSEMBLY HIGHLIGHTS</p>
                        <img src={blink} alt="" className="blue-link"/>
                        <ul className="highlights-ul clearfix">
                            <li className="highlights-li ">
                                {/*<span className="highlights-icon1"></span>*/}
                              <span className="highlights-icon1"></span>
                                <div className="highlights-li-font  pr"> 领袖峰会<div
                                className="pa-icon pa-icon1"></div></div>
                                <div className="highlights-li-fonts">触电行业最强大脑

                                </div>
                            </li>
                            <li className="highlights-li ">
                                <span className="highlights-icon2"></span>
                                <div className="highlights-li-font ">行业领袖</div>
                                <div className="highlights-li-fonts ">技术军团旗帜人物</div>
                            </li>
                            <li className="highlights-li ">
                                <span className="highlights-icon3"></span>
                                <div className="highlights-li-font "> 技术专家</div>
                                <div className="highlights-li-fonts ">分享最前沿的技术观点</div>
                            </li>
                            <li className="highlights-li ">
                                <span className="highlights-icon4"></span>
                                <div className="highlights-li-font ">品牌专场</div>
                                <div className="highlights-li-fonts ">重新定义品牌价值</div>
                            </li>
                            <li className="highlights-li ">
                                <span className="highlights-icon5"></span>
                                <div className="highlights-li-font "> Tech Tutor</div>
                                <div className="highlights-li-fonts ">掌握最强最先进技术大触</div>
                            </li>
                            <li className="highlights-li ">
                                <span className="highlights-icon6"></span>
                                <div className="highlights-li-font ">Tech+</div>
                                <div className="highlights-li-fonts ">技术带你感受游戏魅力</div>
                            </li>
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
                            <li className="highlights-li " style={{width: '60%'}}>
                                <span className="highlights-icon9"></span>
                                <div className="highlights-li-font pr">邀请晚宴
                                    <div className="pa-icon pa-icon3"></div>
                                </div>
                                <div className="highlights-li-fonts ">真人王者荣誉互联网社交重头戏</div>
                            </li>
                        </ul>
                    </div>
                    <div className="special pas">
                        <h3 className="special-name">大会专题</h3>
                        <p className="special-title">GENERAL ASSEMBLY TOPICS</p>
                        <img src={blink} alt="" className="blue-link"/>
                        <ul className="special-ul ">
                            {this.state.DATAS ?
                            this.state.DATAS.map((data, index) => {
                              return <ClassDetails key={index} text={data.text} titleName={data.name}/>
                            }) : ""}
                          {/*<ClassDetails taxt="222" titleName="主会场1"/
                           <ClassDetails taxt="222"  titleName="主会场2"/>
                           <ClassDetails taxt="222" titleName="主会场3"/>
                           <ClassDetails  taxt="222" titleName="主会场4"/>*/}
                        </ul>
                    </div>
                    <div className="pr big">
                        <h3 className="agenda-name">大会议程</h3>
                        <p className="agenda-title">GENERAL ASSEMBLY AGENDA</p>
                        <img src={blink} alt="" className="blue-link"/>
                        <Link to="./dataagenda" className="look-all">查看全部 <i className="batn-add"></i></Link>
                    </div>
                    <div className="agenda-content">
                        <div className="time" onClick={this.onFetch}>
                            <span className="time1 datacolor catbtn" name="DATA23">11.23</span>
                            <span className="time2 datacolor" name="DATA24">11.24</span>
                        </div>
                        <div className="agenda-ul-box">
                            <div className="agenda-ul-toggle" style={{display: "block"}}>
                                {/*<ul className=" agenda-ul agenda-ul-btn1 clearfix">
                                    <li className="toggle-bg">主会会场</li>
                                    <ClassRooms roomList="主会场1" />
                                    <ClassRooms roomList="主会场2" />
                                    <ClassRooms roomList="主会场3" />
                                    {this.state.data1 ?
                                        this.state.data1.map((data, index) => {
                                            return <ClassRooms key={index} roomList={data.name} onfetch={this.onfetchBtn} />
                                        }) : ""}
                                </ul>*/}
                              {/*{this.state.toggle ?*/}
                                <div className="agenda-ul-toggle-box agenda-ul-toggle-box1" style={{display: this.state.toggle ? 'block' : 'none'}}>
                                <p className="agenda-ul-toggle-box-one">
                                <span className="agenda-btn  agenda-btnon">主会场</span>
                                <span>运维专场</span>
                                <span>大数据专场</span>
                                <span>基础架构专场</span>
                                </p>
                                <p className="agenda-ul-toggle-box-two">
                                <span>前端技术专场</span>
                                <span>移动互联专场</span>
                                <span>IOT峰会</span>
                                </p>
                                <p className="agenda-ul-toggle-box-three">
                                <span>技术管理&产品</span>
                                <span>领袖峰会</span>
                                <span>企业专场</span>
                                </p>
    
                                </div>
    
                                <div className="agenda-ul-toggle-box agenda-ul-toggle-box2" style={{display: this.state.toggle ? 'none' : 'block'}}>
                                <p className="agenda-ul-toggle-box-one">
                                <span className="agenda-btn agenda-btnon">主会场</span>
                                <span>运维专场</span>
                                <span>大数据专场</span>
                                <span>基础架构专场</span>
                                </p>
                                <p className="agenda-ul-toggle-box-two">
                                <span>质量和测试专场</span>
                                <span>网络安全专场</span>
                                <span>互联网金融峰会</span>
                                </p>
                                <p className="agenda-ul-toggle-box-three-r">
                                <span>智慧物流论坛</span>
                                <span>企业专场</span>
                                </p>
                                </div>
    
                                {/*}*/}
                              <div className="agenda-pople-box agenda-pople-box-btn1">
                                    <ul className="agenda-pople">


                    {
                      this.state.arrs && this.state.arrs.length > 0 ? this.state.arrs.map((data, index) => (
                      <AgendaPople key={index} data={data} openPop={this.props.history.openPop} closePop={this.props.history.closePop} setLoginCb={this.props.history.setLoginCb}/>
                      )) : ''
  
                    }


                                        
                                    </ul>
                                </div>
                            </div>
                            <div className="agenda-ul-toggle">
                                <ul className="agenda-ul agenda-ul-btn2 clearfix">
                                    <ClassRooms roomList="24主会场1"/>
                                    <ClassRooms roomList="24主会场2"/>
                                    <ClassRooms roomList="24主会场3"/>
                                </ul>
                                <div className="agenda-pople-box agenda-pople-box-btn2">
                                    <ul className="agenda-pople" style={{display: "block"}}>
                                        <li>11</li>
                                        <li>111</li>
                                        <li>11</li>
                                        <li>11</li>
                                    </ul>
                                    <ul className="agenda-pople">
                                        <li>22</li>
                                        <li>22</li>
                                        <li>22</li>
                                        <li>22</li>
                                    </ul>
                                    <ul className="agenda-pople">
                                        <li>33</li>
                                        <li>33</li>
                                        <li>33</li>
                                        <li>33</li>
                                    </ul>
                                    <ul className="agenda-pople">
                                        <li>44</li>
                                        <li>44</li>
                                        <li>44</li>
                                        <li>33</li>
                                    </ul>
                                </div>
                            </div>
                            <a href="javascript:;" className="btn-all btn-all-bottom ">议题提交 <i className="batn-r"></i> </a>
                            <div className="guests-popole">
                                <div className="highlights">
                                    <h3 className="highlights-name ">大会嘉宾</h3>
                                    <p className="highlights-title">ASSEMBLY HIGHLIGHTS</p>
                                    <img src={blink} alt="" className="blue-link"/>
                                </div>
                               <Team name='大会主席团' data={this.state.chairman}></Team>
                               <Team name="专家顾问团" data={this.state.expert}></Team>
                               <Team name="演讲嘉宾" data={this.state.guest}></Team>
                               </div>
                            <div className="logo">
                                <div className="highlights">
                                    <h3 className="highlights-name ">合作伙伴</h3>
                                    <p className="highlights-title">ASSEMBLY HIGHLIGHTS</p>
                                    <img src={blink} alt="" className="blue-link"/>
                                </div>
                            </div>
                            <div className="logo-contnet">
                                <p>钻石赞助</p>
                                <img src={LOGO_1} alt=""/>
                                <p>媒体合作</p>
                                <img src={LOGO_2} alt=""/>
                                <a href="#" className="btn-all btn-all-bottoms">赞助机会 <div
                                className="batn-r"></div>  </a>
                            </div>
                            <div className="bg-b">
                                <div className="maps">
                                    <div className="highlights">
                                        <h3 className="highlights-name ">参会指南</h3>
                                        <p className="highlights-title">ASSEMBLY HIGHLIGHTS</p>
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
                                        <p className="highlights-title">ASSEMBLY HIGHLIGHTS</p>
                                        <img src={blink} alt="" className="blue-link"/>
                                    </div>
                                    <p className="one">赞助大会&展览展示咨询：business@kylinclub.org</p>
                                    <p>合作单位&合作媒体咨询：gitc@kylinclub.org</p>
                                    <p>麒麟会会员申请咨询：mrnmber@kylinclub.org</p>
                                    <p>志愿者招募：staff@kylinclub.org</p>
                                    <p>致电电话：010-88323888</p>
                                    <span className="code"></span>
                                </div>
                            </div>

                        </div>
<BackTop/>
                    </div>
                   <strong style={{color: 'rgba(64, 64, 64, 0.6)'}}> gray </strong>
                    <a href="https://www.baidu.com" className="live">直播</a>
                </div>

            </span>
    );
  }
}

