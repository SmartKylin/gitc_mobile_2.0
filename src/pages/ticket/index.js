import React, {Component} from 'react'
import ChildBackground from 'containers/child_container'
import TicketList from './containers/ticketList'
import {getTicketList} from "../../services/ticket";
import storage from '../../helper/storage'
import {message, Spin,Alert} from 'antd'
import {TOKEN} from "../../helper/login";

export default class extends Component {
  constructor () {
    super()
    this.onClose = this.onClose.bind(this)
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

  onClose (e) {
    this.props.history.push('/')
  };


  render () {
    console.log(this.props,"123123123123");
    return (
      <ChildBackground>
        { this.state.ticketList && this.state.ticketList.length ?
        <TicketList ticketList={this.state.ticketList}/> :
          <div>
            {
              !this.props.match.params.flag?
              <Alert
                  message="！ 暂无票务信息"

                  description="原因：主办方还未将您的门票导入该系统，或您还未购买门票。
                             若您已购票请耐心等待~"
                  type="error"
                  closable
                  onClose={this.onClose}
              />:""
            }
          </div>
        }
      </ChildBackground>
    )
  }
}