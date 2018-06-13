import React, {Component} from 'react'
import GuestItem from '../../components2/GuestItem'
import {getPopleList} from "../../services/home";
import './index.scss'
import Logo from '../../images2/banner.png'
import Footer from "../Footer/index";
import Title from "../Title/index";
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
        <Title Title="专家顾问团" EnglishName="EXPERT ADVISOR"/>
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
          this.props.fouter?<Footer/>:""
        }
      </div>
    )
  }
}