import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './AgendaPople.scss';
import storage from '../../helper/storage'
import {TOKEN} from "../../helper/login";
import CollectedModal from 'components/CollectedModal'
import {message} from 'antd'
import defaultAvatar from '../../images/yueguangjifeng.jpg'

import {collectDocument, collectGuest} from "../../services/collect";

export default class GuestDetailPop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collectModelVisible: 'none',
      guestStatus: false,
      fileStatus: false,
      linkColor: true,
      linkColor2: true,
      day: ''
    }
    
    this._handleOffClick = this._handleOffClick.bind(this)
    this.mounse = this.mounse.bind(this)
    this.mounout = this.mounout.bind(this)
    this.mounse2 = this.mounse2.bind(this)
    this.mounout2 = this.mounout2.bind(this)
  }
  
  static propTypes = {
    type: PropTypes.string,
  };
  
  
  _handleOffClick(e) {
    this.props._handleOffClick(e)
  }
  
  mounse(e) {
    this.setState({
      linkColor: false
    })
  }
  
  mounse2(e) {
    this.setState({
      linkColor2: false
    })
  }
  
  mounout() {
    this.setState({
      linkColor: true
    })
  }
  
  
  mounout2() {
    this.setState({
      linkColor2: true
    })
  }
  
  toggleLink3(e) {
    let {files__url} = this.props.data
    if (!files__url) {
      message.info('没有相应文档~')
    }
  }
  
  componentWillMount() {
    // document.title = "大会议程";
  }
  
  componentDidMount() {
    let a = this.props.data.sdata;
    let b = a.substring(5)
    let c = b.replace('-', '月');
    this.setState({
      day: c += '日'
    })
  }
  
  // 收藏嘉宾
  _collectGuest = () => {
    let {id, collect} = this.props.data
    let {openPop, setLoginCb} = this.props
    let phone = storage.get(storage.PHONE_KEY)
    let cb = this._collectGuest
    if (collect || this.state.guestStatus) {
      return
    }
    const failure = (msg) => {
      openPop()
      setLoginCb(cb)
      message.info(msg)
    }
    
    if (!phone) {
      openPop()
      setLoginCb(cb)
      return
    }
    
    const success = (data) => {
      if (data.status) {
        // closePop()
        this.setState({
          // 打开收藏成功模态框
          collectModelVisible: 'block',
          guestStatus: true,
        })
      } else {
        failure(data.msg)
      }
    }
    collectGuest({phone, person: id, token: TOKEN})
    .then(res => res && res.json())
    .then(success)
  }
  
  // 收藏文档
  _collectDocument = () => {
    let {files__id, file_collect} = this.props.data
    let {openPop, setLoginCb} = this.props
    let phone = storage.get(storage.PHONE_KEY)
    let cb = this._collectDocument
    
    if (this.state.documentStatus || file_collect) {
      return
    }
    const failure = (msg) => {
      openPop()
      setLoginCb(cb)
      message.info(msg)
    }
    
    if (!phone) {
      openPop()
      setLoginCb(cb)
      return
    }
    
    const success = (data) => {
      if (data.status) {
        // closePop()
        this.setState({
          // 打开收藏成功模态框
          collectModelVisible: 'block',
          documentStatus: true,
        })
      } else {
        failure(data.msg)
      }
    }
    
    if (!files__id) {
      message.info('没有相应文档~')
    }
    collectDocument({phone, file: files__id, token: TOKEN})
    .then(res => res && res.json())
    .then(success)
  }
  
  // 关闭收藏成功的模态框
  closeModal = () => {
    this.setState({
      collectModelVisible: 'none'
    })
  }
  
  render() {
    const {data, speech} = this.props;
    return (
    <div className="windowBox">
      <div className="windowBox-header">
        {/*<img src="" alt=""  className="header-img"/>*/}
        <img src={(data && data.pic) || defaultAvatar} className="header-img" alt=""/>
        <div className="windowBox-btn-color" onClick={this._handleOffClick}>
          <div className="close-btn"/>
        </div>
      
      </div>
      <div className="windowBox-name">{data.name}</div>
      <div className="windowBox-work">{data.company} {data.position}</div>
      
      {
        speech ? <div className="windowBox-date">
        <div className="windowBox-date-l">
          <span className="windowBox-date-l-icon"></span>
          <span>{data.meet || '会议地点'}</span>
          <span>{data.meetaddr || '国家会议中心'}</span>
        </div>
        <div className="windowBox-date-r">
          <span className="windowBox-date-r-icon"></span>
          <span>{this.state.day || '11月23，11月24'}</span>
          <span>{data.stime || '9点-10点'}</span>
        </div>
        </div> : null
      }
      {
        speech ?
        <div className="win-l">
          <div className="windowBox-title">演讲主题:{data.stheme}</div>
        </div> : null
      }
      
      {
        speech ?
        <p className="windowBox-text" onTouchStart={this.mounse}
           onTouchEnd={this.mounout} style={{borderColor: this.state.linkColor ? "" : "#ccc"}}>主题介绍:{data.sintroduce}
        </p> : null
      }
      
      <p className="windowBox-text" onTouchStart={this.mounse2}
         onTouchEnd={this.mounout2} style={{borderColor: this.state.linkColor2 ? "" : "#ccc"}}>个人简介:{data.summary}</p>
      {
        speech ?
        <div className="windowBox-icon-content">
          <div className="windowBox-icon">
            <div className="windowBox-iconlink   windowBox-icon-mln" onClick={this._collectGuest}>
              <div
              className={'windowBox-iconlink-l1 ' + (this.state.guestStatus || data.collect ? 'collected' : '')}/>
            </div>
            <div style={{width: '0.8rem'}}/>
            <div className="windowBox-iconlink  windowBox-icon-mlnr" onClick={this._collectDocument}>
              <div
              className={"windowBox-iconlink-l2 " + (this.state.fileStatus || data.file_collect ? 'collected' : '')}/>
            </div>
            <div style={{width: '0.8rem'}}/>
            <div className="windowBox-iconlink  windowBox-icon-mlnr" onClick={this.toggleLink3.bind(this)}>
              <a className="windowBox-iconlink-l3" href={data.files__url}/>
            </div>
          </div>
          <CollectedModal closeModal={this.closeModal} display={this.state.collectModelVisible}/>
        </div> :
        null
      }
    
    </div>
    );
  }
}

