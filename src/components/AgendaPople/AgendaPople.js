import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery'
import './AgendaPople.css';
class AgendaPople extends Component {
	constructor(props) {
		super(props);
		this.state = {
			a:false,
			linkColor:true,
			linkColor2:true,
			link1:true,
			link2:true,
			link3:true
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
 $('html').css('height','100%')
		$('body').css('height','100%')
 $('body').css('overflow','hidden')
 $('html').css('overflow','hidden')
	}
	unmounseup(e){
 $('body').css('overflow','auto')
	}
	toggleLink1(e){
		this.setState({
			link1:!this.state.link1
		})
	}
	toggleLink2(e){
		this.setState({
			link2:!this.state.link2
		})
	}
	toggleLink3(e){
		this.setState({
			link3:!this.state.link3
		})
	}
	render() {
		const {data} = this.props;
		return (
			<li className="popele-box" id="a" onClick={this._handleClick}>
				
				<div className="popele-box-left">
					{data?<img src={data.pic} alt="" className="header-img" />:""}
					<div className="header-icon">
						<span className="l">
<div className="popele-box-1"></div>
						</span>
						<span className="c">
<div className="popele-box-2"></div>
						</span>
						<span className="r">
<div className="popele-box-3"></div>
						</span>
					</div>
				</div>
				<div className="popele-box-right">
					<div className="popele-box-title">
						<span className="popele-box-l">演讲嘉宾的主题</span>
						{data?<span className="popele-box-r">{data.stime}</span>:''}
					</div>
					<div className="popele-name-title">
						{data?<span className="popele-name-l">{data.name}</span>:""}
					{data?<span className="popele-name-r">{data.company}丨{data.summary}</span>:''}
					</div>
			{data?	<p className="popele-box-text sl">演讲内容:{data.sintroduce}</p>:''}
				</div>
				<div className="windowPop" style={{display:this.state.a?"block":'none'}} 
				onTouchStart={this.mounseup.bind(this)}
				onTouchEnd={this.unmounseup.bind(this)}
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
								<div  style={{borderColor:this.state.link1?'#ccc':'blue'}}className="windowBox-iconlink   windowBox-icon-mln" onClick={this.toggleLink1.bind(this)}><div className="windowBox-iconlink-l1"></div></div><div style={{width:'0.8rem'}}>	</div>
								<div style={{borderColor:this.state.link2?'#ccc':'blue'}} className="windowBox-iconlink  windowBox-icon-mlnr" onClick={this.toggleLink2.bind(this)}><div className="windowBox-iconlink-l2"></div></div><div  style={{width:'0.8rem'}}></div>
								<div   style={{borderColor:this.state.link3?'#ccc':'blue'}} className="windowBox-iconlink  windowBox-icon-mlnr" onClick={this.toggleLink3.bind(this)}><div className="windowBox-iconlink-l3"></div></div>
							</div>
						</div>
					</div>
				</div>
			</li>

		);
	}
}

export default AgendaPople;
