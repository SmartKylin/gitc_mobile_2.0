import React, { Component } from 'react';
import CollectStampImg from '../../images2/collect-stamp.png';

export default class extends Component {
  render() {
    return (
      <div className="router-page" style={{ paddingTop: '20px' }}>
        <img
          src={CollectStampImg}
          alt=""
          style={{ width: '100%', height: '7.53rem' }}
        />
      </div>
    );
  }
}
