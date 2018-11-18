import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import "./indes.scss"
const cont= [{
  tit: '大会直播',
  engtit: 'LIVE BROADCAST'
}, {
  tit: '大会会刊',
  engtit: 'PROCEEINGS'
}, {
  tit: '会场微信群',
  engtit: 'WECHAT GROUP'
}, {
  tit: '大会相册',
  engtit: 'ALBUM'
}, {
  tit: '热门环节',
  engtit: 'HOT LINK'
}, {
  tit: '活动信息',
  engtit: 'EVENT INFO'
}, {
  tit: '品牌专场',
  engtit: 'BRAND SESSION'
}, {
  tit: '服务信息',
  engtit: 'SERVICE INFO'
}, {
  tit: '呼叫小秘书',
  engtit: 'CALL SECRETARY'
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
  "http://mudu.tv/watch/2570183",
  "",
  "",
  "",
  "/light", //亮点环节
  "", //注销/activityinform 活动信息
  "/brand",//brand 品牌专场
  "/service",//注销/service 服务信息
  "/screet",//呼叫小秘书 /screet
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