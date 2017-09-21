import React from "react";
import "../index.scss"
export default class ConferenceNewsDetalisiItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount(){
    }

    render() {
        let {amount,summary,img,name,author,content,ctime} = this.props.data
        return (
            <div className="NewsDetalisiItemMain">
                <div className="NewsDetalisiName">
                    {name}
                </div>
                <div className="NewsDetalisiItemDetaBox">
                    <div className="NewsDetalisiItemDeta">
                        {ctime?ctime:'2017/6/6'}
                    </div>
                    <div className="NewsDetalisiItemAuthor">
                        {author}
                    </div>
                </div>
                <div className="NewsDetalisiItemContent"
                     dangerouslySetInnerHTML={{__html: `${content}`}}
                />

                <div className="NewsDetalisiItemAmount">
                    阅读量:                     {amount}
                </div>
            </div>
        );
    }
}
