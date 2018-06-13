import React, {Component} from 'react'
import GuestItem from '../../components2/GuestItem'
import {getPopleList, getSpeecherGroup} from "../../services/home";
import Logo from '../../images2/banner.png'
import './index.scss'
import Footer from "../Footer/index";
import Title from "../Title/index";

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      speecherData: [],
    }
  }
  async componentWillMount () {
    document.title = "演讲嘉宾"
    let speecherData = await getSpeecherGroup().then(res => res.json())
    await this.setState({
      speecherData: speecherData.data
    })
    
  }
  render () {
    let {speecherData} = this.state
    let {openPop, closePop, setLoginCb} = this.props.history
    return (
      <div className="speecher-group">
        <img src={Logo} alt="" className="item-header"/>
        <Title Title="演讲嘉宾" EnglishName="SPEAKERS"/>
        <div className="people-group">
          {
            speecherData.length
            ? speecherData.map((item, index) => (
              <GuestItem
                data={item}
                key={index}
                hasPop={true}
                openPop={openPop}
                closePop={closePop}
                setLoginCb={setLoginCb}
              />
            ))
            : null
          }
        </div>
        <Footer/>
      </div>
    )
  }
}