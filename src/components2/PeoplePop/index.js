import React, {Component} from 'react'
import './index.scss'
import defaultImg from '../../images/default-avatar.jpg'


const formatDate = (str) => {
  let ary = str.split('-').slice(1)
  return ary[0] + '月' + ary[1] + '号'
}
export default class extends Component {
  render () {
    let speecher = this.props.speecher
    const {closeGuestPop} = this.props
    return (
      <div className="people-pop">
        <div className="close-wrapper" >
          <div onClick={closeGuestPop}>
            <i className="iconfont icon-huaban"/>
          </div>
        </div>
        <div className="avatar-wrapper">
          <img src={speecher.pic || defaultImg} alt=""/>
        </div>
        <div className="name">{speecher.name}</div>
        <div className="company-position">{speecher.company} {speecher.position}</div>
        <div className="addr-time">
          <div>
            <i className="iconfont icon-positioning"/>
            <span>{speecher.meet}</span>
            <span>{speecher.meetaddr}</span>
          </div>
          <div>
            <i className="iconfont icon-shijian"/>
            <span>{formatDate(speecher.sdata)}</span>
            <span>{speecher.stime}</span>
          </div>
        </div>
        <div className="speech-topic">
          <span className="title">演讲主题：</span>
          {speecher.stheme}
        </div>
        
        <div className="theme-introduce">
          <span className="title">主题介绍：</span>
          {speecher.sintroduce}
        </div>
        
        <div className="person-introduce">
          <span className="title">个人简介：</span>
          {speecher.summary}
        </div>
      </div>
    )
  }
}