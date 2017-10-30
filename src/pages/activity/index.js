import React, {Component} from 'react'
import ChildContainer from 'containers/child_container'
import ActivityMenu from './container/activityMenu'
import {getListNews} from "../../services/getListNews";

export default class extends Component {
  constructor() {
    super()
    this.state = {
      datas: []
    }
  }
  componentWillMount () {
    document.title = "现场活动"
  
    getListNews(50).then(res => res && res.json())
    .then(data => {
      this.setState({
        datas: data.data,
        minHeight: document.documentElement ? document.documentElement.clientHeight : document.body.clientHeight
      })
    })
  }
  render () {
    return (
      <ChildContainer>
        <ActivityMenu data={this.state.datas}></ActivityMenu>
      </ChildContainer>
    )
  }
}