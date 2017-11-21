import React, { Component } from 'react';
import './index.scss';

export default class extends Component {
  constructor(props) {
    super(props);
    /* this.state = {
      display: 'block'
    }*/
  }
  render() {
    return (
      <div
        className={'collection--wrap'}
        style={{ display: this.props.display }}
      >
        <div className="close--area">
          <div alt="" className="close--icon" onClick={this.props.closeModal} />
        </div>
        <div style={{ marginTop: '86px' }}>收藏成功</div>
        <div>可以在个人中心查看~</div>
      </div>
    );
  }
}
