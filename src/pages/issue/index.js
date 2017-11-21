import React, { Component } from 'react';
import Issus from './containers';

export default class extends Component {
  componentWillMount() {
    document.title = '议题提交';
  }
  render() {
    return (
      <div>
        <Issus />
      </div>
    );
  }
}
