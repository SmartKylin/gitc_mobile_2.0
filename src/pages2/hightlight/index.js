import React, {Component} from 'react'
import './index.scss'

import {getAgenda, getLightDot} from "../../services/home";
import HighLight from '../../components2/Highlight'
import Title from "../../components2/Title/index";



const generateImgAry = () => {
  let ary = [];
  for (let i = 1; i < 17; i++) {
    ary.push(require(`../../images2/accordion_bg${i}.png`))
  }
  return ary
}

let imgAry = generateImgAry()


export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      agendaData: [],
      highlightData: [],
    }
  }
  async componentWillMount () {
    // console.log(this.props.history, 'fdfd');
    
    let res = await getAgenda()
    .then(res => res.json())
    await this.setState({
      agendaData: res.data
    })
    let data = await getLightDot().then(res => res.json())
    await this.setState({
      highlightData: data.data
    })

  }
  
  render () {
    
    let {highlightData} = this.state
    return (
      <div className="entry-page">
        <Title Title="亮点环节" EnglishName="HIGHLIGHT LINK"/>
        <div className="accordion-wrapper">
          <div className="accordion">
            {
              highlightData.map((item, ind) => (
               <HighLight key={ind} light={item} bgImg={imgAry[ind]}/>
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}