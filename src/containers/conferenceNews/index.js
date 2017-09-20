import React from "react";
import ConferenceNewsItem from "../../components/conferenceNewsItem/index";
import ChildCotainer from 'containers/child_container'
import dataImg from "../../images/大会新闻_03.png"
import {get} from "../../fetch/index"
export default class ConferenceNews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datas:[]
        }
    }
    componentDidMount(){

    }
    render() {
        return (
            <ChildCotainer>
            <div  className="conferenceNewsMain">
                {
                    <ConferenceNewsItem />
                }

            </div>
            </ChildCotainer>

        );
    }
}