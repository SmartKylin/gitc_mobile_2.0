import React from 'react'
import Header from './componets/Headpage'
import './index.scss'
export default class Schedule extends React.Component{

  constructor(props){
    super(props)
    this.state = {

    }
  }


  render(){
    return(
        <div className="ScheduleBox">
          <Header/>
        </div>
    )
  }
}
