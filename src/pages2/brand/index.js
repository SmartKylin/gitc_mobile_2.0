import React, {Component} from 'react'
import BrandImg from '../../images2/brand-page.png'

export default class extends Component {
  render () {
    return (
      <div className="router-page" style={{paddingTop: '20px'}}>
        <img src={BrandImg} alt="" style={{width: '100%', height: '23rem'}}/>
      </div>
    )
  }
}