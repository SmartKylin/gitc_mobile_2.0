import React, {Component} from 'react'
import ChildContainer from 'containers/child_container'
import ActivityMenu from './container/activityMenu'

export default class extends Component {
  componentWillMount () {
    document.title = "现场活动"
  }
  render () {
    return (
      <ChildContainer>
        <ActivityMenu></ActivityMenu>
      </ChildContainer>
    )
  }
}