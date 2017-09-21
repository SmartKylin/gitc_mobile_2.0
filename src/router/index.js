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
<<<<<<< HEAD
import DataAgenda from '../pages/dataAgenda/DataAgenda'
import Map from '../pages/map/index'
=======

import cAgenda from 'pages/cAgenda'
import conferenceNews from 'pages/conferenceNews'
import conferenceNewsdetails from 'pages/conferenceNews/details'

import DataAgenda from '../pages/dataAgenda/DataAgenda'

>>>>>>> 12bd4d31f366c1cbc4b0c053b0070e0e9cde7bf7
import Ticket from 'pages/ticket'
import TicketDetail from 'pages/ticketdetail'
import Activity from 'pages/activity'
import Issue from 'pages/issue'
<<<<<<< HEAD
import createBrowserHistory from 'history/createBrowserHistory'
=======
>>>>>>> 12bd4d31f366c1cbc4b0c053b0070e0e9cde7bf7

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
    
        <Route path="/user" component={User}></Route>
        <Route path="/dataagenda" component={DataAgenda}></Route>
        <Route path="/login" compoent={Login}></Route>

        <Route path="/cAgenda" component={cAgenda}></Route>
        <Route path="/conferencenews" component={conferenceNews}></Route>
        <Route path="/conferencenewsdetails/:id" component={conferenceNewsdetails}></Route>

<<<<<<< HEAD
  <Router history={history}>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/home" component={Home}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/sponsorship" component={SponsorShip}></Route>
      <Route path="/user" component={User}></Route>

      <Route path="/dataagenda" component={DataAgenda}></Route>

      <Route path="/ticket" component={Ticket}></Route>
      <Route path="/ticketdetail" component={TicketDetail}></Route>
      <Route path="/activity" component={Activity}></Route>
      <Route path="/issue" component={Issue}></Route>
      <Route path="/map" component={Map}/>
      {/*<Route path="/activity/:activity_id/:stg_id" component={Activity}/>
              <Route path="/login" component={LoginPage}/>
              <Route path="/acts/:stage_id" component={ActivityList}/>
              <Route path="/acts" component={ActivityList}/>
              <Route path="/successDetails/:orderid" component={SuccessDetails}/>
              <Route path="/refund" component={Refund}/>
              <Route path="/personal/:stage_id" component={Personal}/>
              <Route path="/personal" component={Personal}/>
              <Route path="/error" component={Error}/>*/}
    </div>
  </Router>
);
export default App
=======
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
>>>>>>> 12bd4d31f366c1cbc4b0c053b0070e0e9cde7bf7
