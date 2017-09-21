import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './DataAgenda.scss';
import $ from 'jquery';
import {pagepople} from "../../services/pagepople";
import AgendaItem  from '../../components/AgendaItem/AgendaItem'
class DataAgenda extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dadas:[]
		}
		this.tapBtn=this.tapBtn.bind(this);
	}
componentWillMount() {
	pagepople('person-4').then(res => res.json())
    .then(data => {
			
			this.setState({
				dadas:data.data
			})
			
      // message.info(data.msg)
    })
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
				{/*<AgendaItem name="技术管理&产品专场" number="308A"/>
				<AgendaItem name="运维专场 " number="309B"/>
				<AgendaItem name="科技专场 " number="306C"/>*/}
				{
					this.state.dadas.map((data,index)=>(
					
							<AgendaItem key={index} data={data}/>
					))
				}
			</div>

		);
	}
}

export default DataAgenda;

// import './index.scss'
// import {sendCode} from "../../services/code";
// import {sign} from "../../services/user"
// import {message} from 'antd'

// // import IconClose from 'images/close-black.svg'
// let iconIphone = require('../../images/icon-phone.svg')


// const TIME = 60
// let inputStyle = {
//   appearance: 'none',
//   borderRadius: 0
// }
// export default class extends Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       coding: false,
//       time: TIME,
//       mobileRight: false
//     }
//   }
//   // 发送验证码
//   sendCode() {
//     if (!this.state.mobileRight) {
//       return
//     }
//     sendCode(this.mobile.value, {phone: this.mobile.value})
//     .then(res => res.json())
//     .then(data => {
//       message.info(data.msg)
//     })
//     this.countDown()
//   }
//   // 倒计时
//   countDown() {
//     this.setState({
//       coding: true
//     })
//     this.oldMobile = this.mobile.value
//     this.timer = setInterval(() => {
//       let time = this.state.time;
//       if (time <= 0) {
//         clearInterval(this.timer)
//         this.setState({
//           coding: false,
//           time: TIME
//         });
//         return
//       }
//       time--;
//       this.setState({
//         time
//       })
//     }, 1000)
//   }
//   // 验证手机号
//   validateMobile() {
//     let reg = /^1[3|4|5|7|8][0-9]{9}$/;
//     let mobile = this.mobile.value;
//     let mobileRight =  reg.test(mobile)
//     this.setState({
//       mobileRight
//     });
//     if (mobileRight) {
//       if (this.mobile.value !== this.oldMobile) {
//         this.setState({
//           coding: false
//         })
//       }
//     }
//   }
//   // 登陆或者注册
//   signIn = () => {
//     let params = {}
//     params.code = this.code.value;
//     params.mobile = this.mobile.value;
//     sign(this.mobile.value, params)
//     .then(res => res.json())
//     .then(data => {
//       message.info(data.msg)
//       if (data.status) {
//         document.cookie = 'phone=' + this.mobile.value
//       }
//     })
//   }