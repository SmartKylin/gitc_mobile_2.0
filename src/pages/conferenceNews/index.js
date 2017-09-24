import React from "react";
import ConferenceNews from "./containers/index";

export default  class  extends React.Component {
    componentWillMount () {
        document.title = '大会新闻'
    }

    render() {

        return (
        
               <ConferenceNews history={this.props.history}/>
        );
    }
}
