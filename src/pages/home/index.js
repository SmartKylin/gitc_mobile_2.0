import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';
import $ from 'jquery'
// import { PREFIX_URL,request } from "../common"
// import { getShopList, handlePhone } from "../common"
import ClassDetails from "components/ClassRooms/ClassDetails/ClassDetails"
import ClassRooms from "components/ClassRooms/ClassRooms"
import AgendaPople from "components/AgendaPople/AgendaPople"
// import HeadPortrait from "components/HeadPortrait/HeadPortrait"
// import BackgroundAll from "components/BackgroundAll/BackgroundAll"
// // import fetchJsonp from 'fetch-jsonp';
import './home.css';
// import StgItem from "components/stg.item";
import { getPopleList } from "../../services/home";
import Menu from 'containers/menu'

const LOGO_1 = require('components/images/logo1.jpg')
const LOGO_2 = require('components/images/logo2.jpg')
// const HEADER = require('components/images/logo2.jpg')
// const LOGO_01 = require('components/images/01.png')
const MAP = require('components/images/map.png')

export default class Activity extends Component {
    constructor(...args) {
        super(...args);
        this.onFetch = this.onFetch.bind(this)
        this.state = {
            data:null,
            data1:[],
            DATAS:[],
            // menuVisible: 'hidden'
        }
        this.onfetchBtn = this.onfetchBtn.bind(this)
    }
    componentWillMount() {
      console.log(this.props.history);
      let rooms = require("../../mock/data.json");
        // console.log(rooms["DATAS"],'llllllllllll')
        this.setState({
            data: rooms,
            data1: rooms["DATA23"],
            DATAS: rooms["DATAS"]
        })

    }
    componentDidMount() {
        getPopleList(4).then(data=>data.json()).then(data => {
            console.log(data)
        })
    }
    onfetchBtn(e) {
        console.log(e.target.innerHTML)
    }
    onFetch(e) {
        $('.time span').removeClass('catbtn'); 
        $(e.target).addClass('catbtn');
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
        return (
            <span>
                {/*<div style={{display: 'flex', alignItems: 'center', position: 'absolute', width: '100%'}}>
                    <a style={{width: '75px', height: '25px', background: '#263c66', lineHeight: '25px', textAlign: 'center', borderRadius: '12px', marginTop: '8px', fontSize: '11px', color: '#fff', position: 'relative', left: '65%'}} href={'http://www.baidu.com'}>立即购买</a>
                    <div className="menu--icon" onClick={() => this.setState({menuVisible: true})} style={{position: 'absolute', right: '2%', top: '0'}}/>
                    <Menu visibility={this.state.menuVisible} closeMenu={this.closeMenu}/>
                </div>*/}
                <div className="index-banner"></div>
                <div className="content">
                    <div className="highlights">
                        <h3 className="highlights-name ">大会亮点</h3>
                        <p className="highlights-title">ASSEMBLY HIGHLIGHTS</p>
                        <ul className="highlights-ul clearfix">
                            <li className="highlights-li ">
                                {/*<span className="highlights-icon1"></span>*/}
                                <span className="highlights-icon1"></span>
                                <div className="highlights-li-font  pr"> 领袖峰会<div className="pa-icon pa-icon1"></div></div>
                                <div  className="highlights-li-fonts">触电行业最强大脑
                                    
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
                            <li className="highlights-li " style={{width:'60%'}}>
                                <span className="highlights-icon9"></span>
                                <div className="highlights-li-font pr">邀请晚宴
                                    <div className="pa-icon pa-icon3"></div>
                                </div>
                                <div className="highlights-li-fonts ">真人王者荣誉互联网社交重头戏</div>
                            </li>
                        </ul>
                    </div>
                    <div className="special">
                        <h3 className="special-name">大会专题</h3>
                        <p className="special-title">GENERAL ASSEMBLY TOPICS</p>
                        <ul className="special-ul ">
                            {this.state.DATAS ?
                                this.state.DATAS.map((data, index) => {
                                    return <ClassDetails key={index} text={data.text} titleName={data.name} />
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
                        <Link to="./error.page" className="look-all">查看全部 》</Link>
                    </div>
                    <div className="agenda-content" >
                        <div className="time" onClick={this.onFetch}>
                            <span className="time1 datacolor catbtn" name="DATA23">11.23</span>
                            <span className="time2 datacolor" name="DATA24">11.24</span>
                        </div>
                        <div className="agenda-ul-box">
                            <div className="agenda-ul-toggle" style={{ display: "block" }}>
                                <ul className=" agenda-ul agenda-ul-btn1 clearfix">
                                    <li className="toggle-bg">主会会场</li>
                                    {/*<ClassRooms roomList="主会场1" />
                                    <ClassRooms roomList="主会场2" />
                                    <ClassRooms roomList="主会场3" />*/}
                                    {this.state.data1 ?
                                        this.state.data1.map((data, index) => {
                                            return <ClassRooms key={index} roomList={data.name} onfetch={this.onfetchBtn} />
                                        }) : ""}
                                </ul>
                                <div className="agenda-pople-box agenda-pople-box-btn1" >
                                    <ul className="agenda-pople" >
                                        <AgendaPople />
                                        <AgendaPople />
                                        <AgendaPople />
                                    </ul>
                                </div>
                            </div>
                            <div className="agenda-ul-toggle">
                                <ul className="agenda-ul agenda-ul-btn2 clearfix">
                                    <ClassRooms roomList="24主会场1" />
                                    <ClassRooms roomList="24主会场2" />
                                    <ClassRooms roomList="24主会场3" />
                                </ul>
                                <div className="agenda-pople-box agenda-pople-box-btn2">
                                    <ul className="agenda-pople" style={{ display: "block" }} >
                                        <li>11</li>
                                        <li>111</li>
                                        <li>11</li>
                                        <li>11</li>
                                    </ul>
                                    <ul className="agenda-pople" >
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
                            <a href="javascript:;" className="btn-all btn-all-bottom " >会议提要 》 </a>
                            <div className="guests-popole">
                                <div className="highlights">
                                    <h3 className="highlights-name ">大会嘉宾</h3>
                                    <p className="highlights-title">ASSEMBLY HIGHLIGHTS</p>
                                </div>
                                <span className="title-btn "> 大会主席团	</span>
                                <ul className="guests-popole-ul clearfix">
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    {/*<HeadPortrait name="lp" show="携程网携程网携程网"  style={{margin:'15px',float:'left'}}/>
                                    <HeadPortrait name="lp" show="携程网携程网携程网" style={{margin:'15px',float:'left'}}/>
                                    <HeadPortrait name="lp" show="金山云合伙人"  style={{margin:'15px',float:'left'}}/>
                                    <HeadPortrait name="lp" show="携程网携程网携程网" style={{margin:'15px',float:'left'}}/>*/}
                                </ul>
                                <a href="#" className="btn-all btn-all-bottoms" >查看更多 》 </a>
                                <span className="title-btn "> 专家顾问团	</span>
                                <ul className="guests-popole-ul clearfix">
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                                <a href="#" className="btn-all btn-all-bottoms" >查看更多 》 </a>
                                <span className="title-btn "> 演讲嘉宾	</span>
                                <ul className="guests-popole-ul clearfix">
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                                <a href="#" className="btn-all btn-all-bottoms" >查看更多 》 </a>
                            </div>
                            <div className="logo">
                                <div className="highlights">
                                    <h3 className="highlights-name ">合作伙伴</h3>
                                    <p className="highlights-title">ASSEMBLY HIGHLIGHTS</p>
                                </div>
                            </div>
                            <div className="logo-contnet">
                                <p>钻石赞助</p>
                                <img src={LOGO_1} alt="" />
                                <p>媒体合作</p>
                                <img src={LOGO_2} alt="" />
                                <a href="#" className="btn-all btn-all-bottoms" >赞助机会 》 </a>
                            </div>
                            <div className="bg-b">
                                <div className="maps" >
                                    <div className="highlights">
                                        <h3 className="highlights-name ">参会指南</h3>
                                        <p className="highlights-title">ASSEMBLY HIGHLIGHTS</p>
                                    </div>
                                    <img src={MAP} alt="" />
                                    <p>时间:2017.11.23-11.24</p>
                                    <p>地址:国家会议中心</p>
                                    <p>乘车地址:地铁十五号线奥林匹克公园站H西南口下车</p>
                                </div>
                                <div className="about-me">
                                    <div className="highlights">
                                        <h3 className="highlights-name ">联系我们</h3>
                                        <p className="highlights-title">ASSEMBLY HIGHLIGHTS</p>
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

                    </div>
                    <a href="https://www.baidu.com" className="live">直播</a>
                </div>

            </span>
        );
    }
}

