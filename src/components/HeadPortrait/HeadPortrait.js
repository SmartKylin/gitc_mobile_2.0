import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './HeadPortrait.scss';
class HeadPortrait extends Component {
	constructor(props) {
		super(props);
		this.state = {
img:''
		}
	}
	componentDidMount(){
		if(this.props.pics){
this.setState({
img:this.props.pics
})
		}else{
	this.setState({
img:require('../images/banner.png')
})		
		}
	}
	static propTypes = {
		type: PropTypes.string,
	};


	render() {
	const	{pics,name,show,style}=this.props
		return (
			<div className="headportrait-content" style={style}>
				<img src={this.state.img} alt="" className="headportrait-img"/>
				<div className="headportrait-font" >
					<div className="headportrait-font-title">{name}</div>
					<div>{show}</div>
				</div>

			</div>

		);
	}
}

export default HeadPortrait;
