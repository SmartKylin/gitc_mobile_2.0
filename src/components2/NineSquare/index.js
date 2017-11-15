import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import "./indes.scss"
const generateNineAry = () => {
  let ary = []
  for (let i = 0; i < 9; i++) {
    ary.push(require(`./images/nine_0${i+1}.png`))
  }
  return ary
}
let  nine_imgs = generateNineAry()


let link = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
]

export default class extends Component {
  render () {
    return (
      <div className="nine-square">
        {
          nine_imgs.map((item, index) => {
            if(index == 0 || index == 3){
              return (<a href={link[index]}><img src={item} alt=""/></a>)
            }else {
              return(<Link to={link[index]} key={index}>
                <img src={item} alt=""/>
              </Link>)
            }

          })
        }
      </div>
    )
  }
}