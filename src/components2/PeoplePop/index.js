import React, {Component} from 'react'
import './index.scss'
import defaultImg from '../../images/default-avatar.jpg'
// import {message} from 'antd-mobile'
import {message} from 'antd'
import storage from '../../helper/storage'
import { TOKEN } from "../../helper/login";
import CollectedModal from 'components/CollectedModal'
import {
  collectDocument,
  collectGuest,
  cancelCollectDocument,
  cancelCollectGuest,
  updateCollectStatus
} from "../../services/collect";


const formatDate = (str) => {
  if (!str) {
    return '待定'
  }
  let ary = str.split('-').slice(1)
  return ary[0] + '月' + ary[1] + '号'
}
export default class extends Component {
  constructor(props) {
    super(props)
    let {collect, file_collect} = props.speecher
    this.state ={
      collectModelVisible: 'none',
      guestStatus: collect || false,
      fileStatus: file_collect || false,
      openPop: props.openPop
    }
  }
  componentWillMount() {
    this.initialCollectStatus()
  }
  
  initialCollectStatus = async () => {
    let speecher = this.props.speecher
    let {id, files_id} = speecher
    let phone = storage.get(storage.PHONE_KEY)
    let res = await updateCollectStatus({phone, person: id, file: 0}).then(res => res.json())
    
    let {collect, file} = res
    this.setState({
      guestStatus: collect,
      fileStatus: file
    })
  
  
  }
  
  // 收藏嘉宾
  _collectGuest = () => {
    let _this = this
    // e.stopPropagation()
    let { id, collect } = this.props.speecher
    let { openPop, setLoginCb, closePop } = this.props
    
    let phone = storage.get(storage.PHONE_KEY)
    console.log(phone, 'phone');
    
    let cb = this._collectGuest
    
    const failure = (msg) => {
      // openPop()
      // setLoginCb(cb)
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
        },
        () => setTimeout(()=>_this.setState({collectModelVisible: 'none'}), 500)
        )
      } else {
        failure(data.msg)
      }
    }
    
    collectGuest({ phone, person: id, token: TOKEN })
    .then(res => res && res.json())
    .then(success)
  }
  
  // 取消收藏嘉宾
  _cancelCollectGuest = () => {
    console.log('cacelCollect');
    // e.stopPropagation()
    let { id, collect } = this.props.speecher
    let { openPop, setLoginCb, closePop } = this.props
    let phone = storage.get(storage.PHONE_KEY)
    
    let cb = this._cancelCollectGuest
    
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
        closePop()
        message.success('取消收藏成功')
        this.setState({
          // 打开收藏成功模态框
          guestStatus: false,
        })
      } else {
        failure(data.msg)
      }
    }
    cancelCollectGuest({ phone, person: id, token: TOKEN })
    .then(res => res && res.json())
    .then(success)
  }
  
  // 收藏文档
  _collectDocument = () => {
    // e.stopPropagation()
    let { files__id, file_collect } = this.props.speecher
    if (!files__id) {
      message.info('没有相应文档')
      return
    }
    let { openPop, setLoginCb } = this.props
    
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
    collectDocument({ phone, file: files__id, token: TOKEN })
    .then(res => res && res.json())
    .then(success)
  }
  
  _catDocument = () => {
    // e.stopPropagation()
    let { files__url } = this.props.speecher
    if (!files__url) {
      message.info('没有相应文档~')
    }
  }
  
  // 关闭收藏成功的模态框
  closeModal = () => {
    this.setState({
      collectModelVisible: 'none'
    })
  }
  
  changeGuestStatus = () => {
    let guestStatus = this.state.guestStatus
    if (guestStatus) {
      this._cancelCollectGuest()
    } else {
      this._collectGuest()
    }
    
  }
  
  changeDocumentStatus = () => {
    let fileStatus = this.state.fileStatus
    if (fileStatus) {
    
    } else {
      this._collectDocument()
    }
  }
  
  render () {
    let speecher = this.props.speecher
    const {closeGuestPop, openPop, setLoginCb} = this.props
    console.log(speecher,"speecher");
    // console.log(openPop, 'openPop');
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
            {/*<i className="iconfont icon-shijian"/>*/}
            <span>{speecher && formatDate(speecher.sdata)}</span>
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
        {
          this.state.openPop
          ? (<div className="btn-function">
            <div
            className="collect btn"
            onClick={this.changeGuestStatus}
            >
              {
                speecher.collect || this.state.guestStatus
                ? <i className="iconfont icon-shoucang1"/>
                : <i className="iconfont icon-shoucang2"/>
              }
            </div>
            <div
            className="collect-file btn"
            onClick={this.changeDocumentStatus}
            >
              {
                speecher.file_collect || this.state.fileStatus
                ? <i className="iconfont icon-wendangtianjiadianjixiaoguo"/>
                : <i className="iconfont icon-wendangtianjia"/>
              }
            </div>
            <div className="cat-file btn">
              <a  href={speecher.files__url} onClick={this._catDocument}>
                <i className="iconfont icon-wendangchakan"/>
              </a>
            </div>
          </div>) : null
        }
        
        <CollectedModal closeModal={this.closeModal} display={this.state.collectModelVisible} />
      </div>
    )
  }
}