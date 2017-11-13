import React from 'react'
import './index.scss'
import dahuijianjie from './images/大会介绍.png'
export default class Brief extends React.Component{



  render(){
    return(
        <div className="BriefBox">
            <div className="BriefBoxImg">
              <img src={dahuijianjie} alt=""/>
            </div>

        </div>
    )
  }
}
