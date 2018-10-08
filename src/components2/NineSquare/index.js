import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import "./indes.scss"
const cont= [{
  tit: '大会直播',
  engtit: 'LIVE BROADCAST'
}, {
  tit: '大会会刊',
  engtit: 'LIVE BROADCAST'
}, {
  tit: '会场微信群',
  engtit: 'LIVE BROADCAST'
}, {
  tit: '大会相册',
  engtit: 'LIVE BROADCAST'
}, {
  tit: '热门环节',
  engtit: 'LIVE BROADCAST'
}, {
  tit: '活动信息',
  engtit: 'LIVE BROADCAST'
}, {
  tit: '品牌专场',
  engtit: 'LIVE BROADCAST'
}, {
  tit: '服务信息',
  engtit: 'LIVE BROADCAST'
}, {
  tit: '呼叫小秘书',
  engtit: 'LIVE BROADCAST'
}]
const generateNineAry = () => {
  let ary = []
  for (let i = 0; i < 9; i++) {
    ary.push({img: require(`./images/palace_0${i+1}.png`), contents: [cont[i]]})
  }
  return ary
}
let  nine_imgs = generateNineAry()

let link = [
  "",
  "",
  "",
  "",
  "/light",
  "/activityinform",
  "/brand",
  "/service",
  "/screet",
]

export default class extends Component {
  render () {
    return (
      <ul className="nine-square">
        {
          nine_imgs.map((item, index) => {
            return <li>
              {
                index == 0 || index == 3 ? <a href={link[index]}><img src={item.img} alt=""/></a>
                : <Link to={link[index]} key={index}>
                <img src={item.img} alt=""/>
                </Link>
              }
            
              { 
                item.contents.map((v, i) => {
                  return <p>
                    <span>{v.tit}</span>
                    <span>{v.engtit}</span>
                  </p>
                })
              }
            </li>
          })
        }
        
      </ul>
    )
  }
}