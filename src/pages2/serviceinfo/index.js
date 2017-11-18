import React, {Component} from 'react'
import {getServiceInfo} from '../../services/home'
import './index.scss'
import ServiceItem from '../../components2/ServiceItem'

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
  async componentWillMount () {
    let serviceData = await getServiceInfo().then(res => res.json())
    await this.setState({
      serviceInfo: serviceData.data
    })
    // console.log(this.state.serviceInfo, 'serviece');
    
  }
  
  render () {
    
    
    let {serviceInfo} = this.state
    return (
      <div className="router-page" style={{padding: '60px 12px 0 12px'}}>
        {
          serviceInfo.map((item, ind) => (
          <ServiceItem key={ind} service={item} bgImg={imgAry[ind]} index={ind+1}/>
          ))
        }
      </div>
    )
  }
}