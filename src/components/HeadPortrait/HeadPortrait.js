import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './HeadPortrait.scss';
class HeadPortrait extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	static propTypes = {
		type: PropTypes.string,
	};


	render() {
	const	{imgLink,name,show,style}=this.props
		return (
			<div className="headportrait-content" style={style}>
				<img src={imgLink} alt="" className="headportrait-img"/>
				<div className="headportrait-font" >
					<div className="headportrait-font-title">{name}</div>
					<div>{show}</div>
				</div>

			</div>

		);
	}
}

export default HeadPortrait;
