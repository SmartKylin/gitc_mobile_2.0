import React from "react";
import ConferenceNewsItem from "../components/index";
import ChildCotainer from 'containers/child_container'
import {getListNews} from "../../../services/getListNews";
export default class ConferenceNews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datas:[]
        }
    }
    componentWillMount(){
        getListNews(27).then(res => res.json())
            .then(data => {
                this.setState({
                    datas:data.data
                })
            })
    }
    componentDidMount(){

    }
    render() {
        return (
            <ChildCotainer>
            <div  className="conferenceNewsMain">
                {
                    this.state.datas.map((data,index)=>(

                        <ConferenceNewsItem history={this.props.history} key={index} data={data}/>
                    ))
                }

            </div>
            </ChildCotainer>

        );
    }
}