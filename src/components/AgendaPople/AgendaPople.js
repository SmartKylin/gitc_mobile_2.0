import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery'
import './AgendaPople.scss';
import storage from '../../helper/storage'
import {TOKEN} from "../../helper/login";
import CollectedModal from 'components/CollectedModal'
import {message} from 'antd'

import {collectDocument, collectGuest} from "../../services/collect";

class AgendaPople extends Component {
	constructor(props) {
		super(props);
		this.state = {
			collectModelVisible: 'none',
			guestStatus: false,
			fileStatus: false,
			a: false,
			linkColor: true,
			linkColor2: true,
			/*link1: true,
			link2: true,
			link3: true,
			link3: true*/
			day:''
		}
		this._handleClick = this._handleClick.bind(this)
		this._handleOffClick = this._handleOffClick.bind(this)
		this.mounse = this.mounse.bind(this)
		this.mounout = this.mounout.bind(this)
		this.mounse2 = this.mounse2.bind(this)
		this.mounout2 = this.mounout2.bind(this)
	}

	static propTypes = {
		type: PropTypes.string,
	};

	_handleClick() {
		this.setState({
			a: true
		})
	}
	_handleOffClick(e) {
		e.stopPropagation()
		this.setState({
			a: false
		})
	}
	mounse(e) {
		this.setState({
			linkColor: false
		})
	}
	mounout() {
		this.setState({
			linkColor: true
		})
	}
	mounse2(e) {
		this.setState({
			linkColor2: false
		})
	}
	mounout2() {
		this.setState({
			linkColor2: true
		})
	}
	mounseup(e) {
		$('html').css('height', '100%')
		$('body').css('height', '100%')
		$('body').css('overflow', 'hidden')
		$('html').css('overflow', 'hidden')
	}
	unmounseup(e) {
		$('body').css('overflow', 'auto')
	}
	/*toggleLink1(e) {
		this.setState({
			link1: !this.state.link1
		})
	}
	toggleLink2(e) {
		this.setState({
			link2: !this.state.link2
		})
	}*/
	toggleLink3(e) {
		let {files__url} = this.props.data
		if (!files__url) {
			message.info('没有相应文档~')
		}
	}
	
	
	componentWillMount () {
		document.title = "大会议程";
	}
	componentDidMount(){
		let a=this.props.data.sdata;
		let b=a.substring(5) 
		let c=b.replace('-', '月');
		this.setState({
			day:c+='日'
		})
	}
	// 收藏嘉宾
	_collectGuest = () => {
    let {id, collect} = this.props.data
    let {openPop, setLoginCb, closePop} = this.props
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
  	
  	if(!phone) {
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
    
    if(!phone) {
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
		const { data } = this.props;
    return (
			<li className="popele-box" id="a" onClick={this._handleClick}>

				<div className="popele-box-left">
					{data ? <img src={data.pic} alt="" className="header-img" /> : ""}
					<div className="header-icon">
						<span className="l">
							<div className={"popele-box-1 " + (this.state.guestStatus || data.collect ? 'collected' : '')}></div>
						</span>
						<span className="c">
							<div className={"popele-box-2 " + (this.state.fileStatus || data.file_collect ? 'collected' : '')}></div>
						</span>
						<span className="r">
							<div className="popele-box-3"></div>
						</span>
					</div>
				</div>
				<div className="popele-box-right">
					<div className="popele-box-title">
						<span className="popele-box-l">演讲嘉宾的主题</span>
						{data ? <span className="popele-box-r">{data.stime}</span> : ''}
					</div>
					<div className="popele-name-title">
						{data ? <span className="popele-name-l">{data.name}</span> : ""}
						{data ? <span className="popele-name-r">{data.company}丨{data.position}</span> : ''}
					</div>
					{data ? <p className="popele-box-text sl">演讲内容:{data.sintroduce}</p> : ''}
				</div>
				<div className="windowPop" style={{ display: this.state.a ? "block" : 'none' }}
					onTouchStart={this.mounseup.bind(this)}
					onTouchEnd={this.unmounseup.bind(this)}
				>

					<div className="windowBox">
						<div className="windowBox-header">
							{/*<img src="" alt=""  className="header-img"/>*/}
							<img src={data.pic } className="header-img" alt=""/>
							<div className="windowBox-btn-color" onClick={this._handleOffClick}>
								<div className="close-btn"></div>
							</div>

						</div>
						<div className="windowBox-name">{data.name}</div>
						<div className="windowBox-work">{data.company} {data.position}</div>
						<div className="windowBox-date">
							<div className="windowBox-date-l">
								<span className="windowBox-date-l-icon"></span>
								<span>{data.meet}</span>
								<span>{data.meetaddr}</span>
							</div>
							<div className="windowBox-date-r">
								<span className="windowBox-date-r-icon"></span>
								<span>{this.state.day}</span>
								<span>{data.stime}</span>
							</div>
						</div>
						<div className="win-l">
							<div className="windowBox-title">演讲主题:{data.stheme}</div>
						</div>

						<p className="windowBox-text" onTouchStart={this.mounse}
							onTouchEnd={this.mounout} style={{ borderColor: this.state.linkColor ? "" : "#ccc" }}>主题介绍:{data.sintroduce}</p>
						<p className="windowBox-text" onTouchStart={this.mounse2}
							onTouchEnd={this.mounout2} style={{ borderColor: this.state.linkColor2 ? "" : "#ccc" }}>个人简介:{data.summary}</p>
						<div className="windowBox-icon-content">
							<div className="windowBox-icon">
								<div className="windowBox-iconlink   windowBox-icon-mln" onClick={this._collectGuest}><div className={'windowBox-iconlink-l1 ' + (this.state.guestStatus || data.collect ? 'collected' : '')} ></div></div><div style={{ width: '0.8rem' }}>	</div>
								<div className="windowBox-iconlink  windowBox-icon-mlnr" onClick={this._collectDocument}><div className={"windowBox-iconlink-l2 " + (this.state.fileStatus || data.file_collect ? 'collected' : '')}></div></div><div style={{ width: '0.8rem' }}></div>
								{/*<div style={{ borderColor: this.state.link3 ? '#ccc' : 'blue' }} className="windowBox-iconlink  windowBox-icon-mlnr" onClick={this.toggleLink3.bind(this)}><div className="windowBox-iconlink-l3"></div></div>*/}
								<div className="windowBox-iconlink  windowBox-icon-mlnr" onClick={this.toggleLink3.bind(this)}>
									<a className="windowBox-iconlink-l3" href={data.files__url}></a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<CollectedModal closeModal={this.closeModal} display={this.state.collectModelVisible}/>
			</li>
		);
	}
}

export default AgendaPople;
