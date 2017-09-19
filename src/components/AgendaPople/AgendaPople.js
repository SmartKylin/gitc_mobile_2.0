import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AgendaPople.css';
class AgendaPople extends Component {
	constructor(props) {
		super(props);
		this.state = {
			a:false,
			linkColor:true,
			linkColor2:true
		}
		this._handleClick=this._handleClick.bind(this)
		this._handleOffClick=this._handleOffClick.bind(this)
		this.mounse=this.mounse.bind(this)
		this.mounout=this.mounout.bind(this)
		this.mounse2=this.mounse2.bind(this)
		this.mounout2=this.mounout2.bind(this)
	}

	static propTypes = {
		type: PropTypes.string,
	};

	_handleClick() {
		this.setState({
			a:true
		})
	}
	_handleOffClick(e) {
		e.stopPropagation()
		this.setState({
			a:false
		})
	}
	mounse(e){
		this.setState({
			linkColor:false
		})
	}
	mounout(){
		this.setState({
			linkColor:true
		})
	}
		mounse2(e){
		this.setState({
			linkColor2:false
		})
	}
	mounout2(){
		this.setState({
			linkColor2:true
		})
	}
	mounseup(e){
//  e.preventDefault();
 return false;
	}
	render() {
		const { headerImg } = this.props
		return (
			<li className="popele-box" onClick={this._handleClick}>
				
				<div className="popele-box-left">
					<img src={headerImg} alt="" className="header-img" />
					<div className="header-icon">
						<span className="l">1</span>
						<span className="c">2</span>
						<span className="r">3</span>
					</div>
				</div>
				<div className="popele-box-right">
					<div className="popele-box-title">
						<span className="popele-box-l">演讲嘉宾的主题</span>
						<span className="popele-box-r">9:00-9:45</span>
					</div>
					<div className="popele-name-title">
						<span className="popele-name-l">崔宝秋</span>
						<span className="popele-name-r">小米丨首席架构师</span>
					</div>
					<p className="popele-box-text sl">111演讲内容:GITC北京峰全京峰会全球互会全京峰会全球互联网技术大会北京峰会全球互联</p>
				</div>
				<div className="windowPop" style={{display:this.state.a?"block":'none'}} 
				onTouchStart={this.mounseup.bind(this)}
				>
					
					<div className="windowBox">
						<div className="windowBox-header">
							{/*<img src="" alt=""  className="header-img"/>*/}
							<span className="header-img"></span>
							<div className="windowBox-btn-color"  onClick={this._handleOffClick}>
								<div className="close-btn"></div>
							</div>
							
							</div>
						<div className="windowBox-name">崔某某</div>
						<div className="windowBox-work">百度 高级架构</div>
						<div className="windowBox-date">
							<div className="windowBox-date-l">
								<span className="windowBox-date-l-icon"></span>
								<span>运维专场</span>
								<span>三楼308a</span>
							</div>
							<div className="windowBox-date-r">
								<span className="windowBox-date-r-icon"></span>
								<span>11月23日</span>
								<span>9:00-10:00</span>
							</div>
						</div>
						<div className="win-l">
<div className="windowBox-title">演讲主题:互联网行业领袖</div>
						</div>
						
						<p className="windowBox-text" onTouchStart={this.mounse}
				onTouchEnd={this.mounout} style={{borderColor:this.state.linkColor?"":"#ccc"}}>主题介绍：GITC2017全球互联网技术大会北京站热点议题全覆盖，众多互联网行业领袖和技术精英们探讨架构、前端开发等探讨架构、前端开发等探讨架构、前端开发等探讨架构、前端开发等将共同探讨架构、前端开发等领域的技术热点；共同发现运维、IoT、移动互联网等领域技术热点IoT技术热点；共同发现运维...</p>
						<p className="windowBox-text" onTouchStart={this.mounse2}
				onTouchEnd={this.mounout2} style={{borderColor:this.state.linkColor2?"":"#ccc"}}>个人简介：GITC2017全球互联网技术大会北京站热点议题全覆盖，众多互联网行业领袖和技术精英们将共同探讨架构、前端开发等领域的技术热点；共同发现运维、IoT、移动互联网等领域的发展趋势。</p>
						<div className="windowBox-icon-content">
							<div className="windowBox-icon">
								<div  className="windowBox-iconlink  windowBox-icon-ml windowBox-icon-mln"><div className="windowBox-iconlink-l1"></div></div>
								<div  className="windowBox-iconlink windowBox-icon-ml"><div className="windowBox-iconlink-l2"></div></div>
								<div  className="windowBox-iconlink windowBox-icon-ml"><div className="windowBox-iconlink-l3"></div></div>
							</div>
						</div>
					</div>
				</div>
			</li>

		);
	}
}

export default AgendaPople;
