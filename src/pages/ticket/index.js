import React, {Component} from 'react'
import ChildBackground from 'containers/child_container'
import TicketList from './containers/ticketList'
import {getTicketList} from "../../services/ticket";
import storage from '../../helper/storage'
import {message, Spin} from 'antd'
import {TOKEN} from "../../helper/login";

export default class extends Component {
  constructor () {
    super()
    this.state = {
      ticketList: []
    }
  }
  
  renderTicketList = () => {
    let phone = storage.get(storage.PHONE_KEY)
    let cb = this.renderTicketList
    let {openPop, setLoginCb} = this.props.history
    if (!phone) {
      openPop()
      setLoginCb(cb)
      return
    }
    getTicketList({phone, token: TOKEN})
    .then(res => {
      if (res) {
        return res.json()
      }
    })
    .then(data => {
      if (data.status) {
        this.setState({
          ticketList: data.data
        })
      } else {
        message.info(data.msg)
        openPop()
        setLoginCb(cb)
      }
    })
  }
  componentWillMount () {
    // 设置二级页面标题
    document.title = "我的门票"
    
    this.renderTicketList()
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