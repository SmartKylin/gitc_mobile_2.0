import React, {Component} from 'react'
import GuestItem from '../../components2/GuestItem'
import {getPopleList} from "../../services/home";
import PresidentImg from '../../images2/president_all_03.png'
import Logo from '../../pages/newHome/images/logo.png'
import LogoX from '../../pages/newHome/images/logo1.png'
import NewFouter from '../../components2/Fouter'
import './index.scss'
import Title from "../../components/Title";

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      presidentData: [],
      Width:''
    }
  }
  async componentWillMount () {
    this.getclientWidth()
    let presidentData = await getPopleList(88).then(res => res.json())
    await this.setState({
      presidentData: presidentData.data,
    })
    
  }
  getclientWidth = () => {
    let Width = document.documentElement.clientWidth || document.body.clientWidth;
    this.setState({
      Width
    })
  }
  render () {
    let {presidentData,Width} = this.state
    return (
      <div className="all-people">
        {this.props.bjImg ? <div className='bg'><img src={Width == 375 ? LogoX : Logo} alt="" className="item-header"/></div> :"" }
        <Title name='大会主席团'/>
       {/* <img src={PresidentImg} alt="" className="item-header"/>*/}
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
          this.props.fouter?<NewFouter/>:""
        }
      </div>
    )
  }
}