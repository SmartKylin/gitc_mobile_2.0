import React, {Component} from 'react'
import {Link} from 'react-router-dom'

const generateNineAry = () => {
  let ary = []
  for (let i = 0; i < 9; i++) {
    ary.push(require(`../../images2/nine_0${i+1}.png`))
  }
  return ary
}
let  nine_imgs = generateNineAry()

export default class extends Component {
  render () {
    return (
      <div className="nine-square">
        {
          nine_imgs.map((item, index) => (
          <Link to={''} key={index}>
            <img src={item} alt=""/>
          </Link>
          ))
        }
      </div>
    )
  }
}