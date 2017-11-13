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
    }
  }
  async componentWillMount () {
    
    let presidentData = await getPopleList(45).then(res => res.json())
    await this.setState({
      presidentData: presidentData.data,
    })
    let expertData = await getPopleList(46).then(res => res.json())
    await this.setState({
      expertData: expertData.data
    })
    // console.log(this.state.presidentData, 'dsata');
    // console.log(this.state.expertData, 'fdfsd');
  }
  render () {
    let {presidentData, expertData} = this.state
    return (
      <div className="all-people">
        <img src={PresidentImg} alt="" className="item-header"/>
        <div className="people-group">
          {
            presidentData.length
            ? presidentData.map((item, index) => (
              <GuestItem data={item}/>
            ))
            : null
          }
        </div>
        <img src={ExpertImg} alt="" className="item-header"/>
        <div className="people-group">
          {
            expertData.length
            ? expertData.map((item, index) => (
            <GuestItem data={item}/>
            ))
            : null
          }
        </div>
      </div>
    )
  }
}