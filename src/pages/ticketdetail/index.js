import React, { Component } from 'react';
import TicketDetail from './TicketDetail';
import { connect } from 'react-redux';

class TicketDetailPage extends Component {
  componentWillMount() {
    // 设置门票标题
    document.title = '我的门票';
  }
  render() {
    return (
      <TicketDetail
        phone={this.props.phone}
        code={this.props.match.params.code}
      />
    );
  }
}

export default connect(state => ({ phone: state.phone }))(TicketDetailPage);
