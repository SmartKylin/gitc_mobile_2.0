import React, {Component} from 'react'
// import {Icon} from 'antd'
import "./index.scss"
import PeoplePop from '../../../components2/PeoplePop'
import {allowScroll, forbiddenScroll} from "../../../helper/scrollSetting";

export default class CollectionItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      popVisible: false
    }
  }
  openGuestPop = () => {
    if (!this.props.hasPop) {
      return
    }
    let {data} = this.props
    if (data.stheme == '开幕致辞') {
      return
    }
    this.setState({
      popVisible: true
    })
    this.top = document.documentElement.scrollTop || document.body.scrollTop
    forbiddenScroll()
  }
  
  closeGuestPop = (e) => {
    e.stopPropagation()
    
    allowScroll(this.top)
    this.setState({
      popVisible: false
    })
  }
  
  render () {
    let item = this.props.data
    // console.log(item, 'pic');
    
    let {popVisible} = this.state
    let {openPop, closePop, setLoginCb} = this.props
  
    return (
      <div
        className='user-box'
        onClick={this.openGuestPop}
      >
        <div className='boximg'>
          {/*<div><Icon type="file-pdf" style={{fontSize: '20px', color: '#263c68'}}/></div>*/}
          <div className="avatar--wrap">
            <img src={item.pic} alt=""/>
          </div>
          <div className='boxiner'>
            <div className='boxinerTextAs'><span style={{fontSize: '10px'}}>{item.stheme || '主题信息未加载~'}</span></div>
            <div className='boxinerTextBs'><span style={{fontSize:"8px"}}>{item.name}   {item.company}|{item.position}</span></div>
          </div>
        </div>
        <div><span style={{fontSize: '10px'}}>{item.stime}</span></div>
  
        {
          popVisible
          ? <div className="popup">
            {
              <PeoplePop
                closeGuestPop={this.closeGuestPop}
                speecher={item}
                openPop={openPop}
                closePop={closePop}
                setLoginCb={setLoginCb}
              />
            }
          </div>
          : null
        }
      </div>
    )
  }
}