import React, {Component} from 'react'
import GuestItem from '../../components2/GuestItem'
import {getPopleList} from "../../services/home";
import SpeecherImg from '../../images2/speecher-header.png'
import './index.scss'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      speecherData: [],
    }
  }
  async componentWillMount () {
    let speecherData = await getPopleList(47).then(res => res.json())
    await this.setState({
      speecherData: speecherData.data
    })
    
  }
  render () {
    let {speecherData} = this.state
    let {openPop, closePop, setLoginCb} = this.props.history
    return (
      <div className="speecher-group">
        {/*<img src={SpeecherImg} alt="" className="item-header"/>*/}
        <div className="speecher-header"/>
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
      </div>
    )
  }
}