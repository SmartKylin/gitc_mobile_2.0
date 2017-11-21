import React, { Component } from 'react';
import './index.scss';

export default class extends Component {
  render() {
    return (
      <div className="popup" style={{ display: this.props.display }}>
        {this.props.children}
      </div>
    );
  }
}
