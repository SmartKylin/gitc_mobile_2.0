import React from 'react'
import './index.scss'
import dahuijianjie from './images/大会简介.png'
import {getBriefList} from "../../../../services/newhome";

import Highlight from './components/highlight'

export default class Brief extends React.Component{

  constructor(props){
    super(props)
    this.state = {
       data:[]
    }
  }

  componentDidMount(){
    getBriefList(68).then(res => res.json())
        .then(data => {
          console.log(data);
          this.setState({
            data:data.data
          })
        })
  }

  render(){
    return(
        <div className="BriefBox">
            <div className="BriefBoxImg">
              <img src={dahuijianjie} alt=""/>
            </div>
          {
            this.state.data && this.state.data.map((item,index) =>(
                <Highlight data={item}/>
            ))
          }

        </div>
    )
  }
}
