import React from "react";
import ConferenceAgenda from "../../components/conferenceAgenda/index";

class cAgenda extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {

        return (
            <div  className="cAgendaMain">
               <ConferenceAgenda/>
            </div>
        );
    }
}

export default cAgenda;