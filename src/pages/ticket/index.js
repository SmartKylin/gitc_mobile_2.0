import React, {Component} from 'react'
import ChildBackground from 'containers/child_container'
import TicketList from './containers/ticketList'
import {getTicketList} from "../../services/ticket";
import storage from '../../helper/storage'
import {message, Spin} from 'antd'

export default class extends Component {
  constructor () {
    super()
    this.state = {
      ticketList: []
    }
  }
  componentWillMount () {
    // 设置二级页面标题
    document.title = "门票"
    
    let phone = storage.get(storage.PHONE_KEY)
    console.log(phone);
    /*if (!iphone) {
      this.props.history.push('/')
    } else {
      this.iphone = iphone
    }*/
  
    getTicketList(phone)
    .then(res => res.json())
    .then(data => {
      message.info(data.msg)
      this.setState({
        ticketList: data.data
      })
    })
  
  }
  render () {
    return (
      <ChildBackground>
        { this.state.ticketList && this.state.ticketList.length ?
        <TicketList ticketList={this.state.ticketList}/> :
        <div style={{display: 'flex', justifyContent: 'center', height: '400px', alignItems: 'center'}}>
          <Spin size="large" tip="Loading..."/>
        </div>
        }
      </ChildBackground>
    )
  }
}