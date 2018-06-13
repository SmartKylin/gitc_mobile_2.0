import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import "./indes.scss"
const generateNineAry = () => {
  let ary = [
    {name:'大会直播',EnglishName:'EnglishName'},
    {name:'大会会刊',EnglishName:'EnglishName'},
    {name:'会场微信群',EnglishName:'EnglishName'},
    {name:'大会相册',EnglishName:'EnglishName'},
    {name:'热门环节',EnglishName:'EnglishName'},
    {name:'活动信息',EnglishName:'EnglishName'},
    {name:'品牌专场',EnglishName:'EnglishName'},
    {name:'服务信息',EnglishName:'EnglishName'},
    {name:'呼叫小秘书',EnglishName:'EnglishName'},
  ]

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
      <div className="nine-square">
        {
          nine_imgs.map((item, index) => {
            if(index == 0 || index == 3){
              return (<a key={index} href={link[index]}>
                <sapn>{item.name}</sapn>
                <sapn>{item.EnglishName}</sapn>
              </a>)
            }else {
              return(<Link  to={link[index]} key={index}>
                <sapn>{item.name}</sapn>
                <sapn>{item.EnglishName}</sapn>
              </Link>)
            }
          })
        }
      </div>
    )
  }
}