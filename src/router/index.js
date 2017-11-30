import React, { Component } from 'react';
// import HeadPortrait from 'components/HeadPortrait';
import { Router, Route } from 'react-router-dom';
import Wrapper from 'components/Wrapper';
import Home from 'pages/home';

import NewHome from 'pages/newHome';

import Login from 'pages/login';
import SponsorShip from 'pages/sponsorship';
import User from 'pages/user';

// import conferenceNews from 'pages/conferenceNews'
// import conferenceNewsdetails from 'pages/conferenceNews/details'

// import DataAgenda from '../pages/dataAgenda/DataAgenda'

import Ticket from 'pages/ticket';
import TicketDetail from 'pages/ticketdetail';
import MiHuiTicketDetail from 'pages/mihuiticketdetail';
// import Activity from 'pages/activity'
import Issue from 'pages/issue';
import createBrowserHistory from 'history/createBrowserHistory';
import createHashHistory from 'history/createHashHistory';
import Map from '../pages/map/index';
import AddGroup from '../pages/addgroup/index';
import Awards from '../pages/awards/index';
import MeetingDetails from '../pages/meetingdetails/index';

import Topic from '../pages2/topic';
import HightLight from '../pages2/hightlight';
import SpeecherGroup from '../components2/SpeecherGroup';
import ServiceInfo from '../pages2/serviceinfo';
import Screet from '../pages2/screet';
// import Agenda from '../pages2/meetagenda'

import Schedule from '../pages2/schedule';
import Brand from '../pages2/brand';
import CollectStamp from '../pages2/collectstamp';
import RoadShow from '../pages2/roadshow';
import Presidium from '../pages2/presidium';
import AdvisoryGroup from '../pages2/advisorygroup';
import ActivityInform from '../pages2/activityinformation';
import NewsSummary from '../pages2/summary';

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
    // history.openPop = this.props.openPop
    // history.setLoginCb = this.props.setLoginCb
    // history.closePop = this.props.closePop
    return (
      <Router history={history}>
        <Wrapper
          // openPop={this.props.openPop}
          // setLoginCb={this.props.setLoginCb}
          history={history}
        >
          <Route exact path="/" component={Home} />
          <Route path="/home" component={NewHome} />

          <Route path="/meetingdetails/:id" component={MeetingDetails} />
          <Route path="/sponsorship" component={SponsorShip} />

          {/*<Route path="/conferencenews" component={conferenceNews}></Route>*/}
          {/*<Route path="/conferencenewsdetails/:id" component={conferenceNewsdetails}></Route>*/}
          {/*<Route path="/dataagenda" component={DataAgenda}></Route>*/}
          {/*<Route path="/activity" component={Activity}></Route>*/}
          {/*<Route path="/issue" component={Issue}></Route>*/}

          <Route path="/awards" component={Awards} />

          <Route path="/user" component={User} />
          <Route path="/login" compoent={Login} />

          <Route path="/ticket" component={Ticket} />
          <Route path="/ticketdetail/:id/:code" component={TicketDetail} />
          <Route
            path="/mihuiticketdetail/:phone/:code"
            component={MiHuiTicketDetail}
          />

          <Route path="/map" component={Map} />

          <Route path="/addgroup" component={AddGroup} />

          <Route path="/president" component={Presidium} />
          <Route path="/expert" component={AdvisoryGroup} />
          <Route path="/speecher" component={SpeecherGroup} />

          <Route path="/topic" component={Topic} />
          <Route path="/light" component={HightLight} />
          <Route path="/service" component={ServiceInfo} />
          <Route path="/agenda" component={Schedule} />
          <Route path="/news" component={NewsSummary} />

          {/*<Route path="/schedule" component={Schedule}></Route>*/}
          <Route path="/brand" component={Brand} />
          <Route path="/collectstamp" component={CollectStamp} />
          <Route path="/roadshow" component={RoadShow} />
          <Route path="/activityinform" component={ActivityInform} />
          <Route path="/screet" component={Screet} />
        </Wrapper>
      </Router>
    );
  }
};
export default RouterMap;
