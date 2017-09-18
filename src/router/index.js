import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from 'pages/home'

export default class RouterMap extends Component {
  render() {
    return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/home" component={Home}/>
        </Switch>
      </Router>
    </div>
    )
  }
}