import React from "react";
import ConferenceNewsDetalis from "./containers/conferenceNewsDetalis";


class conferenceNewsDetalisPage extends React.Component {
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

    render() {
        return (
            <div>
                <ConferenceNewsDetalis id={this.state.id}/>
            </div>
        );
    }
}

export default conferenceNewsDetalisPage;