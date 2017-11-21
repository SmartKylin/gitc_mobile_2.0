import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import dahuiliangdian from './images/大会亮点.png';
import dahuiliangdian2 from './images/大会亮点new.png';

export default class AnAssembly extends React.Component {
  render() {
    return (
      <div className="AnAssemblyBox">
        <img src={dahuiliangdian} alt="" />
        <img src={dahuiliangdian2} alt="" />
      </div>
    );
  }
}
