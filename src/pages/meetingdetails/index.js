import React from 'react'
import Conference from '../../components2/Conference'
import './index.scss'
import {gatMeetingDetails} from "../../services/meetingDetails";
export default class MeetingDetails extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      id:""
    }
  }

  componentWillMount(){
    this.setState({
      id:this.props.match.params.id
    })
    gatMeetingDetails(19).then(res => res.json()).then(data => {
       this.setState({
         data:data
       })


    })
  }


  render(){

    console.log(this.state.id);
    return(
        <div className="MeetingDetailsBox">
            <Conference  id={this.state.id} data={this.state.data? this.state.data : ""}/>
        </div>
    )
  }
}
