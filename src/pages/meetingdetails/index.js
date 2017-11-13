import React from 'react'
import Conference from '../../components2/Conference'
import './index.scss'
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
  }


  render(){

    console.log(this.state.id);
    return(
        <div className="MeetingDetailsBox">
            <Conference  id={this.state.id} data={[]}/>
        </div>
    )
  }
}
