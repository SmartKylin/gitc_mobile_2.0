import React from 'react';
import './index.scss';
import dahuijieshao from './images/大会介绍.png';

export default class Introduction extends React.Component {
  render() {
    return (
      <div className="IntroductionBox">
        <img src={dahuijieshao} alt="" />
      </div>
    );
  }
}
