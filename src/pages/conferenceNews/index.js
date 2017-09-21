import React from "react";
import ConferenceNews from "./containers/index";

export default  class  extends React.Component {

    render() {

        return (
        
               <ConferenceNews history={this.props.history}/>
        );
    }
}
