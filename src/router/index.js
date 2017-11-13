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

import conferenceNews from 'pages/conferenceNews'
import conferenceNewsdetails from 'pages/conferenceNews/details'

import DataAgenda from '../pages/dataAgenda/DataAgenda'

import Ticket from 'pages/ticket'
import TicketDetail from 'pages/ticketdetail'
import MiHuiTicketDetail from 'pages/mihuiticketdetail'
import Activity from 'pages/activity'
import Issue from 'pages/issue'
import createBrowserHistory from 'history/createBrowserHistory'
import Map from '../pages/map/index'
import AddGroup from '../pages/addgroup/index'
import Awards from '../pages/awards/index'
import MeetingDetails from '../pages/meetingdetails/index'

let history = createBrowserHistory();
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
        <Route exact path="/" component={NewHome}/>
        <Route path="/home" component={Home}></Route>
        <Route path="/newhome" component={NewHome}></Route>

        <Route path="/meetingdetails/:id" component={MeetingDetails}></Route>
        <Route path="/sponsorship" component={SponsorShip}></Route>
    
        <Route path="/conferencenews" component={conferenceNews}></Route>
        <Route path="/conferencenewsdetails/:id" component={conferenceNewsdetails}></Route>
        
        <Route path="/user" component={User}></Route>
        <Route path="/dataagenda" component={DataAgenda}></Route>
        <Route path="/login" compoent={Login}></Route>
        
        <Route path="/ticket" component={Ticket}></Route>
        <Route path="/ticketdetail/:id/:code" component={TicketDetail}></Route>
        <Route path="/mihuiticketdetail/:phone/:code" component={MiHuiTicketDetail}></Route>
        <Route path="/activity" component={Activity}></Route>
        <Route path="/issue" component={Issue}></Route>
        <Route path="/map" component={Map}></Route>

        <Route path="/addgroup" component={AddGroup}></Route>

        <Route path="/awards" component={Awards }></Route>
      </Wrapper>
    </Router>
    )
  }
};
export default RouterMap
