import React from 'react'
import Conference from '../../components2/Conference'
import './index.scss'
import {gatMeetingDetails} from "../../services/meetingDetails";
import AccordionHeader from '../../components2/AccordionHeader'
import Accor from '../../components2/Accordion'

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
  
  componentWillReceiveProps(nextProps) {
    console.log(nextProps,"nextProps");
  }

  render(){
    console.log(this.state.id);
    console.log(this.state.data, 'fjdsjf');
    let data = this.state.data
    return(
        <div className="MeetingDetailsBox">
          this.state.data && this.state.data.length > 0
            ? <Conference  id={this.state.id} data={this.state.data? this.state.data : ""}/>
  
          {/*<Accor agenda={item} bgImg={require('../../images2/accordion_bg1.png')}/>*/}
          {/*<Accor agenda={item} bgImg={require('../../images2/accordion_bg1.png')}/>*/}

        </div>
    )
  }
}
