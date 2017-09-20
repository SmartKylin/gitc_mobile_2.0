import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './DataAgenda.scss';
import $ from 'jquery';
import AgendaItem  from '../../components/AgendaItem/AgendaItem'
class DataAgenda extends Component {
	constructor(props) {
		super(props);
		this.state = {
		}
		this.tapBtn=this.tapBtn.bind(this);
	}
	tapBtn(e){
		$('.agendacolorbtn').removeClass('btntoggle');
		$(e.target).parent('.agendacolorbtn').addClass('btntoggle');
	}
	static propTypes = {
		type: PropTypes.string,
	};
	render() {
		return (
			<div className="dataagenda">
				<div className="header" onClick={this.tapBtn}>
					<div className="agendacolorbtn btntoggle"><div className="dataicon23"></div ><div className="btncolor">11月23日</div></div>
					<div className="link agendacolorbtn"><div className="dataicon23"></div><div className="btncolor">11月24日</div></div>
				</div> 
				<AgendaItem/>
			</div>

		);
	}
}

export default DataAgenda;
