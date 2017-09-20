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
<<<<<<< HEAD
import DataAgenda from '../pages/dataAgenda/DataAgenda'
=======
import Ticket from 'pages/ticket'
import TicketDetail from 'pages/ticketdetail'
import Activity from 'pages/activity'
import Issue from 'pages/issue'
>>>>>>> 35102a7a8b21bc877c4bb7621a38c20e3baa4b70
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory();

// import "./App.css"
// import ActivityList from './pages/home/activity.list.page';
// import Arrange from './pages/arrange/arrange.page';

// import Activity from './pages/activity.page';
// import LoginPage from './pages/login.page';
// import SuccessDetails from './pages/successDetails.page';
// import Refund from './pages/refund.page';
// import Personal from './pages/personal.page';
// import Error from './pages/error.page';

const App = () => (
// props.match.params.activity_id  ？？？

  <Router history={history}>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/home" component={Home}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/sponsorship" component={SponsorShip}></Route>
      <Route path="/user" component={User}></Route>
<<<<<<< HEAD
      <Route path="/dataagenda" component={DataAgenda}></Route>
=======
      <Route path="/ticket" component={Ticket}></Route>
      <Route path="/ticketdetail" component={TicketDetail}></Route>
      <Route path="/activity" component={Activity}></Route>
      <Route path="/issue" component={Issue}></Route>
>>>>>>> 35102a7a8b21bc877c4bb7621a38c20e3baa4b70
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