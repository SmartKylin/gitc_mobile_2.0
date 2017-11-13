import React from 'react'
import './index.scss'
import {Link} from 'react-router-dom'

const generateNineAry = () => {
  let ary = []
  for (let i = 0; i < 9; i++) {
    ary.push(require(`./images/nine_0${i+1}.png`))
  }
  return ary
}
let  nine_imgs = generateNineAry()

export default class Squared extends React.Component{


  render(){
    return(
        <div className="SquaredBox">
          <div className="SquaredBox-nine-square">
            {
              nine_imgs.map((item, index) => (
                  <Link to={''} key={index}>
                    <img src={item} alt=""/>
                  </Link>
              ))
            }
          </div>
        </div>
    )
  }
}
