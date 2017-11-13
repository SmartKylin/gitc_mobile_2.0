import React from 'react';
import Logo from './images/homeLogo.png'
import './index.scss'
import AnAssembly from './componets/AnAssembly'
import Squared from './componets/squared'
import Introduction from './componets/introduction'
import Brief from './componets/brief'
import ListMeetings from './componets/listmeetings'

import Cooperative from './componets/cooperative'
import MapWJ from './componets/Mapwj/index'
import Footer1 from './componets/ContactUs/index'
import PointDiv from './componets/PointDiv/index'

export default class NewHome extends React.Component{
  constructor(props){
    super(props)
    this.state= {

    }
  }

  render(){
    return(
        <div className="NewHomeBox">
          <div className="bg">
            <img src={Logo} alt=""/>
          </div>
          {/*九宫格*/}
          <Squared/>
          {/*大会介绍*/}
          <Introduction/>
          {/*大会亮点*/}
          <AnAssembly/>
          {/*大会简介*/}
          <Brief/>
           {/*大会主席团*/}
          <ListMeetings/>
          {/*合作伙伴*/}
          <Cooperative/>
          {/*Map*/}
          <MapWJ/>
          {/*联系我们*/}
          <Footer1/>
           {/*定位组件*/}
          <PointDiv/>
        </div>
    )
  }




}
