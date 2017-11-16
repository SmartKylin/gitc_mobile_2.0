import React, {Component} from 'react'
import {getServiceInfo} from '../../services/home'
import ServiceItem from './ScreetItem'
import screetData from './data'

const IconAry = ['', 'icon-yongcan', 'icon-fenhuichangxuanzhong', 'icon-yinshuiji', 'icon-icon', 'icon-shiwuzhaoling']


const generateImgAry = () => {
  let ary = [];
  for (let i = 1; i < 17; i++) {
    ary.push(require(`../../images2/accordion_bg${i}.png`))
  }
  return ary
}

let imgAry = generateImgAry()


export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      serviceInfo: [],
    }
  }


  render () {

    return (
      <div className="router-page" style={{padding: '60px 12px 0 12px'}}>
        {
          screetData.map((item, ind) => (
          <ServiceItem
              key={ind}
              service={item}
              bgImg={imgAry[ind]}
              iconName={IconAry[ind + 1]}
              />
          ))
        }
      </div>
    )
  }
}