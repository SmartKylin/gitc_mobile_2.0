import React from "react";
import ConferenceNewsDetalisiItem from "../components/conferenceNewsDetalisiItem";
import ChildCotainer from 'containers/child_container'
import {getDetalisNews} from "../../../services/getDetalisNews";
export default class ConferenceNewsDetalis extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            datas:null,
            minHeight:""
        }
    }
    componentWillMount(){
        getDetalisNews(this.props.id).then(res => res.json())
            .then(data => {
               this.setState({
                   datas:data.data,
                   minHeight:document.documentElement?document.documentElement.clientHeight:document.body.clientHeight
               })
            })
    }
    componentDidMount(){
    }
    render() {
        return (
            <ChildCotainer style={{position:"static",minHeight:`${this.state.minHeight}px`,paddingBottom:"10px"}}>
                <div>
                    {
                        this.state.datas? <ConferenceNewsDetalisiItem data={this.state.datas}/> :"正在加载..."
                    }
                </div>
            </ChildCotainer>

        );
    }
}