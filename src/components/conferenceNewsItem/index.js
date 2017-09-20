import React from "react";
import "./index.scss"
export default class ConferenceNewsItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div  className="conferenceNewsMain" style={{color:"red"}}>
                <div className="conferenceNewsImg">

                </div>
                <div className="conferenceNewsTextBox">
                    <div className="conferenceNewsTitleBox">
                        <div className="conferenceNewsTitle">

                        </div>
                        <div className="conferenceNewsTime">

                        </div>
                    </div>
                    <div className="conferenceNewsText">

                    </div>
                    <div className="conferenceNewsRead">
                        <i></i>
                        <span></span>
                    </div>
                </div>
            </div>
        );
    }
}


