import React from 'react'
import './index.scss'
import HighLight from '../../components2/Highlight'
import Accor from '../../components2/Accordion'


export default class Conference extends React.Component{

  constructor(props){
    super(props)
    this.state={

    }
  }


  render(){
    console.log(this.props.data,'data11111111');
    let data = this.props.data
    return(
        <div className="ConferenceBox">
          <div className="ConferenceBoxShang">
              <div  className="ConferenceBoxShangBox">
                <div className="ConferenceBoxShangLogoBox">
                  <div className="ConferenceBgLogo">
                    主会场
                  </div>
                </div>
                 <div className="ConferenceYw">
                   PRESIDIUM
                 </div>
                 <div className="ConferenceTime">
                    时间: 11.23 09:30-12:20 / 11.24 09:30-16:50
                 </div>
                 <div className="ConferenceDd">
                    地点: 1F - 大宴会厅C
                 </div>
                <div className="ConferenceContest">
                {/*  {data.data.content}*/}
                </div>
              </div>
          </div>
          
          {/*<div className="accordion-wrapper">*/}
            {/*<div className="accordion">*/}
              {/*<Accor agenda={data} bgImg={require('../../images2/accordion_bg1.png')}/>*/}
            {/*</div>*/}
          {/*</div>*/}
        </div>
    )
  }
}