import React from 'react';
import './index.scss';
import logo from './images/logo.jpg';
export default class Cooperative extends React.Component {
  render() {
    return (
      <div className="CooperativeBox">
        <div className="CooperativeBoxImg">
          <img src={logo} alt="" />
        </div>
      </div>
    );
  }
}
