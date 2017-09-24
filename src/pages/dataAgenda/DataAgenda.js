import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './DataAgenda.scss';
import $ from 'jquery';
import {pagepople} from "../../services/pagepople";
import AgendaItem  from '../../components/AgendaItem/AgendaItem';
import ChildBackground  from '../../containers/child_container/index'
class DataAgenda extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dadas:[],
			minHeight:""
		}
		this.tapBtn=this.tapBtn.bind(this);
	}
componentWillMount() {
	document.title = '大会议程'
	pagepople('person-4').then(res => res.json())
    .then(data => {
			
			this.setState({
				dadas:data.data
			})
    })
}
_handeClcik23(){
	pagepople('person-4').then(res => res.json())
    .then(data => {
			
			this.setState({
				dadas:data.data
			})
    })
}
_handeClcik24(){
	pagepople('person-6').then(res => res.json())
    .then(data => {
			
			this.setState({
				dadas:data.data
			})
    })
}

componentDidMount(){
 document.onscroll = function(){
   let headerTop=document.getElementById('header')
	 let scrollT = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
	 if(scrollT>55){
$(headerTop).addClass('position-heander')
$('.add-header').css('display','block')
	 }else{
$(headerTop).removeClass('position-heander');
$('.add-header').css('display','none')
	 }
  }
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
<ChildBackground  style={{position:"static",minHeight:`${this.state.minHeight}px`,paddingBottom:"10px"}}>
			<div className="dataagenda">
				<div className="add-header"></div>
				<div className="header" onClick={this.tapBtn} id="header">
					<div className="agendacolorbtn btntoggle"><div className="dataicon23"></div ><div className="btncolor" onClick={this._handeClcik23.bind(this)}>11月23日</div></div>
					<div className="link agendacolorbtn"><div className="dataicon23"></div><div className="btncolor"  onClick={this._handeClcik24.bind(this)}>11月24日</div></div>
				</div> 
				{/*<AgendaItem name="技术管理&产品专场" number="308A"/>
				<AgendaItem name="运维专场 " number="309B"/>
				<AgendaItem name="科技专场 " number="306C"/>*/}
				{
					this.state.dadas.map((data,index)=>(
					
							<AgendaItem key={index} data={data} openPop={this.props.history.openPop} setLoginCb={this.props.history.setLoginCb}/>
					))
				}
			</div>
 </ChildBackground>
		);
	}
}

export default DataAgenda;