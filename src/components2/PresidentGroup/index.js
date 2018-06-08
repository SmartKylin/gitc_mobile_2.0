import React, {Component} from 'react'
import GuestItem from '../../components2/GuestItem'
import {getPopleList} from "../../services/home";
import Logo from '../../pages/newHome/images/logo.png'
import './index.scss'
import Title from "../Title/index";
import Footer from "../Footer/index";

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      presidentData: [],
    }
  }
  async componentWillMount () {
    
    let presidentData = await getPopleList(45).then(res => res.json())
    await this.setState({
      presidentData: presidentData.data,
    })
    
  }
  render () {
    let {presidentData} = this.state
    return (
      <div className="all-people">
        {this.props.bjImg ?  <img src={Logo} alt="" className="item-header"/>:"" }
        <Title Title="大会主席团" EnglishName="PRESIDIUM"/>
        <div className="people-group">
          {
            presidentData.length
            ? presidentData.map((item, index) => (
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