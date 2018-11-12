import React from 'react'
import Conference from '../../components2/Conference'
import './index.scss'
import {gatMeetingDetails} from "../../services/meetingDetails";
// import AccordionHeader from '../../components2/AccordionHeader'
import Accor from './component/Accordion'

export default class MeetingDetails extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      id: ""
    }
  }

  componentWillMount(){
    this.setState({
      id: this.props.match.params.id
    })
    gatMeetingDetails(this.props.match.params.id).then(res => res.json()).then(data => {
       this.setState({
         data: data
       })
    })
  }

  render(){
    let data = this.state.data
    let {openPop, closePop, setLoginCb} = this.props.history
    return(
        <div className="MeetingDetailsBox">
          this.state.data && this.state.data.length > 0
            ? <Conference  id={this.state.id} data={this.state.data? this.state.data : ""}/>
  
          {
            data && data.first_id > 0
            ? <Accor
              list={data.first}
              bgImg={require('../../images2/accordionA_bg1.png')}
              name={data.data.name + '(22日)'}
              enName={data.data.summary}
              openPop={openPop}
              closePop={closePop}
              setLoginCb={setLoginCb}
            />
            : null
          }
          {
            data && data.last_id > 0
            ? <Accor
                list={data.last}
                bgImg={require('../../images2/accordionA_bg2.png')}
                name={data.data.name + '(23日)'}
                enName={data.data.summary}
                
                openPop={openPop}
                closePop={closePop}
                setLoginCb={setLoginCb}
            />
            : null
          }

        </div>
    )
  }
}
