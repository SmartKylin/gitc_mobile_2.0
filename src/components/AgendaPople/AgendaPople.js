import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AgendaPople.css';
class AgendaPople extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	static propTypes = {
		type: PropTypes.string,
	};

	_handleClick() {
	}
	render() {
		const { headerImg } = this.props
		return (
			<li className="popele-box">
				<div className="popele-box-left">
					<img src={headerImg} alt="" className="header-img" />
					{/*<div className="header-icon">
						<span className="l">1</span>
						<span className="c">2</span>
						<span className="r">3</span>
					</div>*/}
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
				<div className="windowPop">
					<div className="windowBox">
						<div className="windowBox-header">youx</div>
						<div className="windowBox-name">崔某某</div>
						<div className="windowBox-work">百度 高级架构</div>
						<div className="windowBox-date">
							<div className="windowBox-date-l">
								<span>icon</span>
								<span>运维专场</span>
								<span>三楼308a</span>
							</div>
							<div className="windowBox-date-r">
								<span>icon</span>
								<span>11月23日</span>
								<span>9:00-10:00</span>
							</div>
						</div>
						<div className="windowBox-title">演讲主题:互联网行业领袖</div>
						<p className="windowBox-text">主题介绍：GITC2017全球互联网技术大会北京站热点议题全覆盖，众多互联网行业领袖和技术精英们探讨架构、前端开发等探讨架构、前端开发等探讨架构、前端开发等探讨架构、前端开发等将共同探讨架构、前端开发等领域的技术热点；共同发现运维、IoT、移动互联网等领域技术热点IoT技术热点；共同发现运维...</p>
						<p className="windowBox-text">个人简介：GITC2017全球互联网技术大会北京站热点议题全覆盖，众多互联网行业领袖和技术精英们将共同探讨架构、前端开发等领域的技术热点；共同发现运维、IoT、移动互联网等领域的发展趋势。</p>
						<div className="windowBox-icon-content">
							{/*<div className="windowBox-icon">
								<div><div>1</div></div>
								<div><div>2</div></div>
								<div><div>3</div></div>
							</div>*/}
						</div>
					</div>
				</div>
			</li>

		);
	}
}

export default AgendaPople;
