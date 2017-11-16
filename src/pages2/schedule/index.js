import React from 'react'
import Header from './componets/Headpage'
import {getAgenda} from "../../services/home";
import './index.scss'
import SpeechItem from '../../components2/SpeechItem'

export default class Schedule extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      agendaData: []
    }
  }

  async componentWillMount () {
    let res = await getAgenda()
    .then(res => res.json())
    await this.setState({
      agendaData: res.data
    })
    
  }

  render(){
    let agendaData = this.state.agendaData
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
    // console.log(agendaData, 'shefjdls');
    return(
        <div className="ScheduleBox">
          { agendaData.length
            ? agendaData.map((agenda, index) => (
              <div key={index}>
                <Header
                  name={agenda.name}
                  enName={agenda.json.en || agenda.ename}
                  addr={agenda.json.addr }
                  link={agenda.json.details}
                />
  
                <div className='accor-content'>
                  {agenda.name.indexOf("23") !=-1 && agenda.main != "主会场" ?<SpeechItem icon="yes" style='yes' speecher={obj}/> :""}
    
                  {agenda.name.indexOf("23") !=-1 && agenda.main == "基础架构专场" ? <SpeechItem  speecher={obj1}/> :""}
                  {
                    agenda.data && agenda.data.length
                    ? agenda.data.map((item, ind) => (
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
            ))
            : null
          }
          <div className="fouterse"></div>
        </div>
    )
  }
}
