import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AgendaItem.scss';
import AgendaPople from '../AgendaPople/AgendaPople'
class AgendaItem extends Component {
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
			<div className="agendaitem">
				<div className="headers">
					<div  className="headers-name">技术管理&产品专场</div><div className="headers-number">308a</div>
				</div>
				<AgendaPople/>
			</div>

		);
	}
}

export default AgendaItem;
