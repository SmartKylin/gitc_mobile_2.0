import React, {Component} from 'react';
// import HeadPortrait from 'components/HeadPortrait';
import {
  Router,
  Route
} from 'react-router-dom'
import Wrapper from 'components/Wrapper'
import Home from 'pages/home'
import Login from 'pages/login'
import SponsorShip from 'pages/sponsorship'
import User from 'pages/user'

import conferenceNews from 'pages/conferenceNews'
import conferenceNewsdetails from 'pages/conferenceNews/details'

import DataAgenda from '../pages/dataAgenda/DataAgenda'

import Ticket from 'pages/ticket'
import TicketDetail from 'pages/ticketdetail'
import Activity from 'pages/activity'
import Issue from 'pages/issue'

import createBrowserHistory from 'history/createBrowserHistory'

let history = createBrowserHistory();

const RouterMap = class extends Component {
  render () {
    return (
    <Router history={history}>
      <Wrapper openPop={this.props.openPop} history={history}>
        <Route exact path="/" component={Home}/>
        <Route path="/home" component={Home}></Route>
        <Route path="/sponsorship" component={SponsorShip}></Route>
    
        <Route path="/conferencenews" component={conferenceNews}></Route>
        <Route path="/conferencenewsdetails/:id" component={conferenceNewsdetails}></Route>
        
        <Route path="/user" component={User}></Route>
        <Route path="/dataagenda" component={DataAgenda}></Route>
        <Route path="/login" compoent={Login}></Route>
        
        <Route path="/ticket" component={Ticket}></Route>
        <Route path="/ticketdetail" component={TicketDetail}></Route>
        <Route path="/activity" component={Activity}></Route>
        <Route path="/issue" component={Issue}></Route>
      </Wrapper>
    </Router>
    )
  }
};
export default RouterMap
