import React from 'react'
// import TopicTitle from '../../images2/topic_title.png'
import {getBriefList} from "../../services/newhome";
import Highlight from './components/highlight'
import './index.scss'
import Title from "../../components/Title";

const generateImgAry = () => {
  let ary = [];
  for (let i = 1; i < 15; i++) {
    // ary.push(require(`../../../../images2/accordion_bg${i}.png`))
    ary.push(require(`../../images2/accordionA_bg${i}.png`))
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
        <div className="BriefBox router-page" style={{paddingTop: '40px'}}>
          <Title name='大会专题'/>
          {
            this.state.data && this.state.data.map((item,index) =>(
              <Highlight
                data={item}
                bgImg={imgAry[index]}
                key={index}
              />
            ))
          }

        </div>
    )
  }
}
