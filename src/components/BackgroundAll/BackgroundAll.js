import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BackgroundAll.css';
class BackgroundAll extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	static propTypes = {
		type: PropTypes.string,
	};

	render() {
	
		return (
		<div  className="bg-all-color">
			<div className="bg-all-img">
				<div>icon</div>
				<div >muy_btn</div>
				<div>nav</div>
			</div>
		</div>
		);
	}
}

export default BackgroundAll;
