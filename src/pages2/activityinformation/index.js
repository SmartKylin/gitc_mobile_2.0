import React from 'react';
import Accordion from './componets/Accordion';
import bg1 from '../../images2/accordion_bg1.png';
import bg2 from '../../images2/accordion_bg2.png';
import img1 from './images/road-show_02.png';
import img2 from './images/collect-stamp.png';
import './index.scss';
export default class ActivityInformation extends React.Component {
  render() {
    return (
      <div className="ActivityInformationBox">
        <Accordion
          name="集印章 赢好礼"
          bgImg={bg2}
          imgA={img2}
          enname="STAMP RALLY"
        />
        <Accordion
          name="活动路演"
          bgImg={bg1}
          imgA={img1}
          enname="ROAD SHOWS "
        />
      </div>
    );
  }
}
