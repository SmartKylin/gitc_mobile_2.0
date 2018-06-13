import React from 'react'
import Header from './componets/Headpage'
import {getAgenda} from "../../services/home";
import './index.scss'
import SpeechItem from '../../components2/SpeechItem'
import Backoff from "../../components2/Backoff/index";
import groupBy from 'lodash/groupBy'
import {Link} from 'react-router-dom'

export default class Schedule extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      agendaData: [],
      arrData:[]
    }
  }

  async componentWillMount () {
    let res = await getAgenda()
    .then(res => res.json())
    await this.setState({
      agendaData: res.data
    })
    this.arrangementData(res.data)
  }

  arrangementData = (agendaData) => {
    let data = groupBy(agendaData, 'main');
    let arrData = []
    Object.keys(data).map(item => {
      arrData.push({
        main:item,
        data:data[item],
        json:data[item][0].json
      })
    })
    this.setState({
      arrData
    })
  }


  render(){
    let {agendaData,arrData} = this.state

    let obj = {
      pic:"",
      stime:"09:00-10:00",
      stheme:"开幕式直播",
      company:"",
      position:"主办方、协办方致辞，大会主席团成员共同亮相启动仪式，正式开启GITC年度盛典。",
    }
  
    let obj1 = {
      pic:"",
      stime:"10:00-10:10",
      stheme:"开场致辞",
      company:"思科",
      name:"待定",
      position:"待定"
    }
    let {openPop, closePop, setLoginCb} = this.props.history
    return(
        <div className="ScheduleBox">
          { arrData.length
            ? arrData.map((agenda, index) => (
              <div key={index}>
                <Header
                  name={agenda.main}
                  enName={agenda.json.en || agenda.ename}
                  addr={agenda.json.addr }
                />

                {
                  agenda.data.map( (item,index) => {
                    return <div key={index} className="ScheduleBox-Title-Box">
                        <div className="ScheduleBox-Title">
                          <div>
                            <span>{item.name}</span>
                            <span>{item.json.en}</span>
                          </div>
                          <div>
                            <Link to={`/meetingdetails/${item.json.details}`}>专题详情</Link>
                          </div>
                        </div>

                      <div className='accor-content'>
                        {item.name.indexOf("23") !=-1 && item.main != "主会场" ?<SpeechItem icon="yes" style='yes' speecher={obj}/> :""}

                        {item.name.indexOf("23") !=-1 && item.main == "基础架构专场" ? <SpeechItem  speecher={obj1}/> :""}
                        {
                          item.data && item.data.length
                              ? item.data.map((item, ind) => (
                              <SpeechItem
                                  key={ind}
                                  speecher={item}

                                  openPop={openPop}
                                  closePop={closePop}
                                  setLoginCb={setLoginCb}
                              />
                          ))
                              : null
                        }
                      </div>
                  </div>
                  })
                }
              </div>
            ))
            : null
          }
         <Backoff/>
        </div>
    )
  }
}
