import React, {Component} from 'react'
import GuestItem from '../../components2/GuestItem'
import {getPopleList} from "../../services/home";
import PresidentImg from '../../images2/president_all_03.png'
import ExpertImg from '../../images2/expert_all_03.png'


import './index.scss'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      presidentData: [],
      expertData: [],
      speecherData: []
    }
  }
  async componentWillMount () {
    
    let presidentData = await getPopleList(45).then(res => res.json())
    await this.setState({
      presidentData: presidentData.data
    })
    console.log(this.state.presidentData, 'dsata');
  }
  render () {
    return (
      <div>
        <img src={PresidentImg} alt="" className="item-header"/>
        {
        
        }
        <img src={ExpertImg} alt="" className="item-header"/>
      </div>
    )
  }
}