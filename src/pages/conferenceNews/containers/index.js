import React from "react";
import ConferenceNewsItem from "../components/index";
import ChildCotainer from 'containers/child_container'
import {getListNews} from "../../../services/getListNews";

export default class ConferenceNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minHeight: "",
      datas: []
    }
  }
  
  componentWillMount() {
    getListNews(27).then(res => res.json())
    .then(data => {
      this.setState({
        datas: data.data,
        minHeight: document.documentElement ? document.documentElement.clientHeight : document.body.clientHeight
      })
    })
  }
  
  componentDidMount() {
  
  }
  
  render() {
    return (
    <ChildCotainer style={{position: "static", minHeight: `${this.state.minHeight}px`, paddingBottom: "5px"}}>
      <div className="conferenceNewsMain">
        {
          this.state.datas.map((data, index) => (
          
          <ConferenceNewsItem history={this.props.history} key={index} data={data}/>
          ))
        }
      
      </div>
    </ChildCotainer>
    
    );
  }
}