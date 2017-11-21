import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './indes.scss';
import { getLiveUrl } from '../../services/home';

const generateNineAry = () => {
  let ary = [];
  for (let i = 0; i < 9; i++) {
    ary.push(require(`./images/nine_0${i + 1}.png`));
  }
  return ary;
};
let nine_imgs = generateNineAry();

let link = [
  '',
  '',
  '/addgroup',
  '',
  '/light',
  '/activityinform',
  '/brand',
  '/service',
  '/screet'
];

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liveUrl: ''
    };
  }
  async componentWillMount() {
    let data = await getLiveUrl().then(res => res.json());
    let liveUrl = data.data[0].url;
    console.log(data, 'live');
    this.setState({
      liveUrl
    });
  }
  render() {
    let { liveUrl } = this.state;
    let tar = +new Date(2017, 10, 23, 6, 0, 0);
    let now = Date.now();
    // console.log(tar,'tartime');
    // console.log(now, 'now');
    return (
      <div className="nine-square">
        {nine_imgs.map((item, index) => {
          if (index === 0) {
            return (
              <a href={liveUrl}>
                <img src={item} alt="" />
              </a>
            );
          } else if (index === 2) {
            return (
              <Link to={now >= tar ? '/addgroup' : '/'} key={index}>
                <img src={item} alt="" />
              </Link>
            );
          } else if (index === 3) {
            return (
              <a href={link[index]}>
                <img src={item} alt="" />
              </a>
            );
          } else {
            return (
              <Link to={link[index]} key={index}>
                <img src={item} alt="" />
              </Link>
            );
          }
        })}
      </div>
    );
  }
}
