import React from 'react';
// import HeadPortrait from 'components/HeadPortrait';
import {
  Router,
  Route
} from 'react-router-dom'
import Home from 'pages/home'
import Login from 'pages/login'
import SponsorShip from 'pages/sponsorship'
import User from 'pages/user'

import cAgenda from 'pages/cAgenda'
import conferenceNews from 'pages/conferenceNews'

import Ticket from 'pages/ticket'
import TicketDetail from 'pages/ticketdetail'
import Activity from 'pages/activity'
import Issue from 'pages/issue'

import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory();


const App = () => (
// props.match.params.activity_id  ？？？

  <Router history={history}>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/home" component={Home}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/sponsorship" component={SponsorShip}></Route>
      <Route path="/user" component={User}></Route>

      <Route path="/cAgenda" component={cAgenda}></Route>
      <Route path="/conferencenews" component={conferenceNews}></Route>

      <Route path="/ticket" component={Ticket}></Route>
      <Route path="/ticketdetail" component={TicketDetail}></Route>
      <Route path="/activity" component={Activity}></Route>
      <Route path="/issue" component={Issue}></Route>

      {/*<Route path="/home" component={Home}/>*/}
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