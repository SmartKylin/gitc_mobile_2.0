import React from 'react';
import jiangxiangBJ from '../image/奖项评选_02.png';
import banner from '../image/banner.png';
import huodong from '../image/活动介绍.png';
import huodong2 from '../image/活动介绍2.png';
import huodong3 from '../image/活动介绍3.png';
import anniu from '../image/前去报名.png';
import '../index.scss';
export default class AwardsComponent extends React.Component {
  render() {
    return (
      <div className="Awards-Box">
        <div className="Awards-Banner">
          <img src={banner} alt="" />
        </div>
        <div className="Awards-Activity">
          <img src={huodong} alt="" />
        </div>
        <div className="Awards-Category">
          <div>
            <a href="https://jinshuju.net/f/1HEL6C">
              <img src={anniu} />
            </a>
          </div>
          <img src={huodong2} alt="" />
          <div>
            <a href="https://jinshuju.net/f/1HEL6C">
              <img src={anniu} />
            </a>
          </div>
          <img src={huodong3} alt="" />
          <div>
            <a href="https://jinshuju.net/f/1HEL6C">
              <img src={anniu} />
            </a>
          </div>
        </div>
        <div className="Awards-Bg">
          <img src={jiangxiangBJ} alt="" />
        </div>
      </div>
    );
  }
}
