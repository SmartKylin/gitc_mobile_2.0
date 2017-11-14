import React, {Component} from 'react'
import {getServiceInfo} from '../../services/home'
import './index.scss'

export default class extends Component {
  async componentWillMount () {
    let serviceData = await getServiceInfo().then(res => res.json())
    console.log(serviceData, 'serviece');
  }
  
  render () {
    return (
      <div className="router-page">
        fdsf
      </div>
    )
  }
}