import React from 'react'
import Conference from '../../components2/Conference'
import './index.scss'
import {gatMeetingDetails} from "../../services/meetingDetails";
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
    return(
        <div className="MeetingDetailsBox">
          this.state.data && this.state.data.length>0?
            <Conference  id={this.state.id} data={this.state.data}/>:""
        </div>
    )
  }
}
