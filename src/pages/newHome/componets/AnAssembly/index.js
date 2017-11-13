import React from 'react'
import {Link} from 'react-router-dom'
import './index.scss'
import dahuiliangdian from './images/大会亮点.png'


const generateNineAry = () => {
  let ary = []
  for (let i = 0; i < 8; i++) {
    ary.push(require(`./images/ld${i+1}.png`))
  }
  return ary
}

let  dh_imgs = generateNineAry()


export default class AnAssembly extends  React.Component{
  render(){
    return(
        <div className="AnAssemblyBox">
              <div className="AnAssemblyBox-img">
                <img src={dahuiliangdian} alt=""/>
              </div>
              <div className="AnAssemblyBox-Square">
                {
                  dh_imgs.map((item, index) => (
                      <div>
                        <Link to={''} key={index}>
                          <img src={item} alt=""/>
                        </Link>
                      </div>

                  ))
                }
              </div>
          }
        </div>
    )
  }

}
