import React, { Component } from 'react';
// import HeadPortrait from 'components/HeadPortrait';
import {
  Router,
  Route
} from 'react-router-dom'
import Wrapper from 'components/Wrapper'
import Home from 'pages/home'

import NewHome from 'pages/newHome'

import Login from 'pages/login'
import SponsorShip from 'pages/sponsorship'
import User from 'pages/user'

// import conferenceNews from 'pages/conferenceNews'
// import conferenceNewsdetails from 'pages/conferenceNews/details'

// import DataAgenda from '../pages/dataAgenda/DataAgenda'

import Ticket from 'pages/ticket'
import TicketDetail from 'pages/ticketdetail'
import MiHuiTicketDetail from 'pages/mihuiticketdetail'
// import Activity from 'pages/activity'
import Issue from 'pages/issue'
import createBrowserHistory from 'history/createBrowserHistory'
import createHashHistory from 'history/createHashHistory'
import Map from '../pages/map/index'
import AddGroup from '../pages/addgroup/index'
import Awards from '../pages/awards/index'
import MeetingDetails from '../pages/meetingdetails/index'

import Topic from '../pages2/topic'
import HightLight from '../pages2/hightlight'
import SpeecherGroup from '../components2/SpeecherGroup'
import ServiceInfo from '../pages2/serviceinfo'
import Screet from '../pages2/screet'
// import Agenda from '../pages2/meetagenda'

import Schedule from '../pages2/schedule'
import Brand from '../pages2/brand'
import CollectStamp from '../pages2/collectstamp'
import RoadShow from '../pages2/roadshow'
import Presidium from '../pages2/presidium'
import AdvisoryGroup from '../pages2/advisorygroup'
import ActivityInform from '../pages2/activityinformation'

let history = createBrowserHistory();

// let history = createHashHistory();

// containers
// components 
// pages
// this.props.children;
// async
// await
// params参数
const RouterMap = class extends Component {
  render() {
    history.openPop = this.props.openPop
    history.setLoginCb = this.props.setLoginCb
    history.closePop = this.props.closePop
    return (
    <Router history={history}>
      <Wrapper openPop={this.props.openPop} history={history} setLoginCb={this.props.setLoginCb}>
        <Route exact path="/" component={Home}/>
        <Route path="/home" component={NewHome}></Route>

        <Route path="/meetingdetails/:id" component={MeetingDetails}></Route>
        <Route path="/sponsorship" component={SponsorShip}></Route>
    
        {/*<Route path="/conferencenews" component={conferenceNews}></Route>*/}
        {/*<Route path="/conferencenewsdetails/:id" component={conferenceNewsdetails}></Route>*/}
        {/*<Route path="/dataagenda" component={DataAgenda}></Route>*/}
        {/*<Route path="/activity" component={Activity}></Route>*/}
        {/*<Route path="/issue" component={Issue}></Route>*/}
        
        <Route path="/awards" component={Awards }></Route>
  
        <Route path="/user" component={User}></Route>
        <Route path="/login" compoent={Login}></Route>
        
        <Route path="/ticket" component={Ticket}></Route>
        <Route path="/ticketdetail/:id/:code" component={TicketDetail}></Route>
        <Route path="/mihuiticketdetail/:phone/:code" component={MiHuiTicketDetail}></Route>
        
        <Route path="/map" component={Map}></Route>

        <Route path="/addgroup" component={AddGroup}></Route>
        

        <Route path="/president" component={Presidium }></Route>
        <Route path="/expert" component={AdvisoryGroup }></Route>
        <Route path="/speecher" component={SpeecherGroup }></Route>

        <Route path="/topic" component={Topic}></Route>
        <Route path="/light" component={HightLight}></Route>
        <Route path="/service" component={ServiceInfo}></Route>
        <Route path="/agenda" component={Schedule}></Route>

        {/*<Route path="/schedule" component={Schedule}></Route>*/}
        <Route path="/brand" component={Brand}></Route>
        <Route path="/collectstamp" component={CollectStamp}></Route>
        <Route path="/roadshow" component={RoadShow}></Route>
        <Route path="/activityinform" component={ActivityInform}></Route>
        <Route path="/screet" component={Screet}></Route>

      </Wrapper>
    </Router>
    )
  }
};
export default RouterMap
