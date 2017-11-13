import React from 'react'
import './index.scss'
import HighLight from '../../components2/Highlight'
export default class Conference extends React.Component{

  constructor(props){
    super(props)
    this.state={

    }
  }


  render(){
    return(
        <div className="ConferenceBox">
          <div className="ConferenceBoxShang">

          </div>
          <div className="ConferenceBoxXia">
            <div className="accordion-wrapper">
              <div className="accordion">
                {
                  this.props.data.map((item, ind) => (
                      <HighLight key={ind} light={item}/>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
    )
  }
}