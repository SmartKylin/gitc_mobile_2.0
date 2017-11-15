import React from 'react'
import PresidentGroup from '../../components2/PresidentGroup'

export default class Presidium extends React.Component{


  componentWillMount () {
    document.title = "大会主席团"
  }


  render(){
    return(
        <div className="PresidiumBox">
          <PresidentGroup bjImg="yes" fouter="yes"/>
        </div>
    )
  }
}
