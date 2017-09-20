import React from "react";
import "./index.scss"
export default class ConferenceNewsItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        let {imgs,title,Date,text,read} = this.props.data
        return (
            <div  className="conferenceNewsMain" style={{color:"red"}}>
                <div className="conferenceNewsImg">
                    {imgs}
                </div>
                <div className="conferenceNewsTextBox">
                    <div className="conferenceNewsTitleBox">
                        <div className="conferenceNewsTitle">
                            {title}
                        </div>
                        <div className="conferenceNewsTime">
                            {Date}
                        </div>
                    </div>
                    <div className="conferenceNewsText">
                        {text}
                    </div>
                    <div className="conferenceNewsRead">
                        <i></i>
                        <span>{read}</span>
                    </div>
                </div>
            </div>
        );
    }
}


