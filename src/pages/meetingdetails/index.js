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
    return(
        <div className="MeetingDetailsBox">
          this.state.data && this.state.data.length > 0
            ? <Conference  id={this.state.id} data={this.state.data? this.state.data : ""}/>
  
          {
            data && data['23']
            ? <Accor
              list={data.first}
              bgImg={require('../../images2/accordion_bg1.png')}
              name={data.data.name + '(23日)'}
              enName={data.data.summary}
            />
            : null
          }
          {
            data && data['24']
            ? <Accor
                list={data.last}
                bgImg={require('../../images2/accordion_bg2.png')}
                name={data.data.name + '(24日)'}
                enName={data.data.summary}
            />
            : null
          }

        </div>
    )
  }
}
