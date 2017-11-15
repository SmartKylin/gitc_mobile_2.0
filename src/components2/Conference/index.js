import React from 'react'
import './index.scss'
import HighLight from '../../components2/Highlight'
import Accor from '../../components2/Accordion'


export default class Conference extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {}
  }
  
  
  render() {
    let list = this.props.data;
    return (
    <div>
      {list ?
      <div className="ConferenceBox">
        <div className="ConferenceBoxShang">
          <div className="ConferenceBoxShangBox">
            <div className="ConferenceBoxShangLogoBox">
              <div className={list.data.name=="大数据&人工智能专场"?"ConferenceBgLogoA":"ConferenceBgLogo"}>
                {list.data.name}
              </div>
            </div>
            <div className="ConferenceYw">
              {list.data.summary}
            </div>
            <div className="ConferenceTime">
              <i className="iconfont icon-shijian" style={{color:"#30508e",marginRight:"3px"}}/>时间: {list.time}
            </div>
            <div className="ConferenceDd">
              <i className="iconfont icon-positioning" style={{color:"#30508e",marginRight:"3px"}}/>地点: {list.addr}
            </div>
            <div className="ConferenceContest">
              {list.data.content}
            </div>
          </div>
        </div>
      </div> : ""
      }
    
    </div>
    
    )
  }
}