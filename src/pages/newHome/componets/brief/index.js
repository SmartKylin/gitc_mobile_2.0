import React from 'react'
import './index.scss'
import dahuijianjie from './images/大会简介.png'
import {getBriefList} from "../../../../services/newhome";

import Highlight from './components/highlight'
import Title from "../../../../components/Title";
// import TestImg from '../../../../images2'


const generateImgAry = () => {
  let ary = [];
  for (let i = 1; i < 17; i++) {
    ary.push(require(`../../../../images3/accordion_bg${i}.png`))
  }
  return ary
}

let imgAry = generateImgAry()

export default class Brief extends React.Component{

  constructor(props){
    super(props)
    this.state = {
       data:[]
    }
  }

  componentWillMount(){
    getBriefList(96).then(res => res.json())
        .then(data => {
          // console.log(data);
          this.setState({
            data:data.data
          })
        })
  }

  render(){
    return(
        <div className="BriefBox router-page">
            <Title name='会议结构'/>
        {/*    <div className="BriefBoxImg">
              <img src={dahuijianjie} alt=""/>
            </div>*/}
          {
            this.state.data && this.state.data.map((item,index) =>(
                <Highlight data={item} bgImg={imgAry[index]} key={index}/>
            ))
          }

        </div>
    )
  }
}
