import React, {Component} from 'react'
import TicketDetail from '../ticketdetail/TicketDetail'


export default class MiHuiTicketDetailPage extends Component {
  componentWillMount () {
    // 设置门票标题
    document.title = "我的门票"
  }
  render() {
    return (
      <TicketDetail
        phone={this.props.match.params.phone}
        code={this.props.match.params.code}
      />
    )
  }
}
