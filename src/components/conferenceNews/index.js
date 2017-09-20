import React from "react";
import "./index.scss"
import yanjing from "../../images/yanjing_06.png"
import xinwen from "../../images/大会新闻_03.png"
export default class ConferenceNewsItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount(){

    }

    render() {
        let {name,summary,amount,img,id} = this.props.data
        return (
            <div  className="ConferenceNewsItemMain" onClick={()=>{this.props.history.push(`/conferencenewsdetails/${id}`)}}>
                <div className="conferenceNewsImg">
                    {
                        img?<img src={img} alt=""/>:<img src={xinwen} style={{width:"100%",height:"100%"}} alt=""/>
                    }
                </div>
                <div className="conferenceNewsTextBox">
                    <div className="conferenceNewsTitleBox">
                        <div className="conferenceNewsTitle">
                            {name}
                        </div>
                    </div>
                    <div className="conferenceNewsText">
                        {summary}
                    </div>
                    <div className="conferenceNewsRead">
                        <div className="conferenceNewsReadImg"><img src={yanjing} style={{width:"100%",height:"100%"}} alt=""/></div>
                        <span>{amount}</span>
                    </div>
                </div>
            </div>
        );
    }
}


