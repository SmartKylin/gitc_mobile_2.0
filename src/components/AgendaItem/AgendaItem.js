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
		const {name,other,data}=this.props.data;

		return (
			<div className="agendaitem">
				<div className="headers">
					<div  className="headers-name">{name}</div>
					<div className="headers-number">{other}</div>
				</div>
				{data.map((data,index)=>(
					<AgendaPople  key={index} data={data}/>
					))}
			</div>

		);
	}
}

export default AgendaItem;
