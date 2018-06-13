import React from 'react';
import Logo from '../../images2/banner.png'
import './index.scss'
import Brief from './componets/brief'
import ListMeetings from '../../components2/AllPeople'
import PointDiv from './componets/PointDiv/index'
import MeetingGuide from '../../components2/MeetingGuide'
import NineSquare from '../../components2/NineSquare'
import AboutMeet from "./componets/aboutMeet/index";
import LightMeet from "./lightMeet/index";
import Footer from "../../components2/Footer/index";

export default class NewHome extends React.Component{

  componentWillMount () {
    // 设置二级页面标题
    document.title = "GITC"
  }
  render(){
    return(
        <div className="NewHomeBox">
          <div className="bg">
            <img src={Logo} alt=""/>
          </div>
          {/*九宫格*/}
          <NineSquare/>
          {/*大会介绍*/}
          <AboutMeet/>
          {/*大会亮点*/}
          <LightMeet/>
          {/*大会简介*/}
          <Brief/>
          {/*主席团  ||  顾问团*/}
          <ListMeetings/>
          {/*合作伙伴*/}
          {/*<Cooperative/>*/}
          {/*Map*/}
          <MeetingGuide/>
          {/*联系我们*/}
          <Footer/>
           {/*定位组件*/}
          <PointDiv/>
        </div>
    )
  }
}
