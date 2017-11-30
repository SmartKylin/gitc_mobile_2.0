import React, { Component } from 'react';
import './index.scss';
// import Nav from '../../component/navigation'

let bannerImg = require('./images/wz_img/1.jpg');

const generateImgAry = () => {
  let ary = [];
  for (var i = 1; i < 14; i++) {
    ary.push(require(`./images/wz_img/${i + 1}.jpg`));
  }
  return ary;
};

const imgAry = generateImgAry();

export default class extends Component {
  render() {
    return (
      <div className="news-summary">
        <div className="imgs-wrapper">
          <img src={bannerImg} alt="" />
          {imgAry.map((item, index) => (
            <img src={item} alt="" className="text-img" />
          ))}
        </div>
      </div>
    );
  }
}
