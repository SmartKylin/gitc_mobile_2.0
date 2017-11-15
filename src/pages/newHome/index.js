import React from 'react';
import Logo from './images/logo.png'
import './index.scss'
import AnAssembly from './componets/AnAssembly'
import Introduction from './componets/introduction'
import Brief from './componets/brief'
import ListMeetings from '../../components2/AllPeople'

import Cooperative from './componets/cooperative'
import MapWJ from './componets/Mapwj/index'
import Footer1 from './componets/ContactUs/index'
import PointDiv from './componets/PointDiv/index'
import MeetingGuide from '../../components2/MeetingGuide'
import NineSquare from '../../components2/NineSquare'

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
          <Introduction/>
          {/*大会亮点*/}
          <AnAssembly/>
          {/*大会简介*/}
          <Brief/>
          {/*主席团  ||  顾问团*/}
          <ListMeetings/>
          {/*合作伙伴*/}
          <Cooperative/>
          {/*Map*/}
          <MeetingGuide/>
          {/*联系我们*/}
          <Footer1/>
           {/*定位组件*/}
          <PointDiv/>
        </div>
    )
  }
}
