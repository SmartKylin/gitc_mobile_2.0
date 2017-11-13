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
    let list = this.props.data;
    return(
        <div>
          {list ?
          <div className="ConferenceBox">
            <div className="ConferenceBoxShang">
              <div  className="ConferenceBoxShangBox">
                <div className="ConferenceBoxShangLogoBox">
                  <div className="ConferenceBgLogo">
                    {list.data.name}
                  </div>
                </div>
                <div className="ConferenceYw">
                  {list.data.summary}
                </div>
                <div className="ConferenceTime">
                  时间: {list.time}
                </div>
                <div className="ConferenceDd">
                  地点: {list.addr}
                </div>
                <div className="ConferenceContest">
                  {list.data.content}
                </div>
              </div>
            </div>
          </div>:""
          }

        </div>

    )
  }
}