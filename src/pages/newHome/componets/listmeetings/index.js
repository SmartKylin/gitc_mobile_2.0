import React from'react'
import './index.scss'
import dahuizhuxi from './images/大会主席团.png'
export default class ListMeetings extends React.Component{

  render(){
    return(
        <div className="ListMeetingsBox">
           <div className="ListMeetingsBoxImg">
             <img src={dahuizhuxi} alt=""/>
           </div>

        </div>
    )
  }
}
