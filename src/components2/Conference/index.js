import React from 'react'
import './index.scss'
import HighLight from '../../components2/Highlight'
import Accor from '../../components2/Accordion'
import Title from "../Title/index";


export default class Conference extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      timeArr:[]
    }
  }

  componentDidMount(){

  }



  
  
  render() {
    let list = this.props.data;

    let timeArr = this.props.data && this.props.data.time &&  this.props.data.time.split('/')

    return (
    <div>
      {list ?
      <div className="ConferenceBox">
        <div className="ConferenceBoxShang">
          <div className="ConferenceBoxShangBox">
           <Title Title={list.data.name}  EnglishName={list.data.summary}/>
            {
              timeArr && timeArr.map((item,index) => {
                return <div key={index} className="ConferenceTime">
                  <i className="iconfont icon-shijian" style={{color:"#30508e",marginRight:"3px"}}/>时间: {item}
                </div>
              })
            }
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