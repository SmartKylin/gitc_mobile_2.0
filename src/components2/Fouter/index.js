import React from 'react'
import FouterImg from './images/newFooter.png'
import './index.scss'

export default class NewFouter extends React.Component{



  render(){
    return(
        <div className="NewFouterBox">
          <img src={FouterImg}/>
        </div>
    )
  }
}