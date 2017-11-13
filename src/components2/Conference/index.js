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
    console.log(this.props.data,'data11111111');
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
阿达瓦大武当哇阿达瓦大武当哇阿达瓦大武当哇阿达瓦大武当哇阿达瓦大武当哇阿达瓦大武当哇阿达瓦大武当哇阿达瓦大武当哇阿达瓦大武当哇阿达瓦大武当哇阿达瓦大武当哇阿达瓦大武当哇阿达瓦大武当哇阿达瓦大武当哇阿达瓦大武当哇阿达瓦大武当哇阿达瓦大武当哇阿达瓦大武当哇阿达瓦大武当哇阿达瓦大武当哇
                </div>
              </div>
          </div>
          <div className="ConferenceBoxXia">
            <div className="accordion-wrapper">
              <div className="accordion">
                {
                  this.props.data && this.props.data.length >0 ? this.props.data.map((item, ind) => (
                      <HighLight key={ind} light={item}/>
                  )):""
                }
              </div>
            </div>
          </div>
        </div>
    )
  }
}