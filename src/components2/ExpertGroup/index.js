import React, {Component} from 'react'
import GuestItem from '../../components2/GuestItem'
import {getPopleList} from "../../services/home";
import ExpertImg from '../../images2/expert_all_03.png'
import './index.scss'
import Logo from '../../pages/newHome/images/logo.png'
import NewFouter from '../../components2/Fouter'
import Title from "../../components/Title";
export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      presidentData: [],
      expertData: [],
    }
  }
  async componentWillMount () {
    
    let expertData = await getPopleList(46).then(res => res.json())
    await this.setState({
      expertData: expertData.data
    })
    
  }
  render () {
    let {expertData} = this.state
    return (
      <div className="all-people">
        {this.props.bjImg ?  <img src={Logo} alt="" className="item-header"/>:"" }
       {/* <img src={ExpertImg} alt="" className="item-header"/>*/}
       <Title name='专家顾问团'/>
        <div className="people-group">
          {
            expertData.length
            ? expertData.map((item, index) => (
            <GuestItem data={item} key={index}/>
            ))
            : null
          }
        </div>
        {
          this.props.fouter?<NewFouter/>:""
        }
      </div>
    )
  }
}