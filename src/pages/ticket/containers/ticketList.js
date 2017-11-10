import React, {Component} from 'react'
import './index.scss'
import {Link} from 'react-router-dom'
import avatarIcon from 'images/avatar.svg'
import noTicket from 'images/no-ticket.png'

let colorAry = ['#ff1854', '#0078ffi', '#273e6a', '#11daff'];

export default class extends Component {
  constructor(props){
    super(props)
    this.state = {
        minHeight:""
    }
  }
  componentDidMount(){
    this.setState({
        minHeight:parseInt(document.documentElement? document.documentElement.clientHeight : document.body.clientHeight)
    })
  }

  render () {
    return (
      <div style={{background: '#fff', marginTop: '10%', minHeight: this.state.minHeight + 'px', borderRadius: '4px', padding: '0 16px'}}>
        {
          this.props.ticketList && this.props.ticketList.length > 0 ? this.props.ticketList.map((item, index) => (
              item && item.sign_staus != 0?
              <Link key={index} to={`/ticketdetail/${item.id}/${item.code}`} style={{borderBottom: '1px solid #ccc', height: '54px', fontSize: '14px', lineHeight: '54px', color: '#000', display: 'flex', alignItems: 'center', fontWeight: 'bold', justifyContent: 'space-between'}}>
                <div>
                  <span className="ticket--avatar">
                    <img className="avatar--icon" src={avatarIcon} alt=""/>
                  </span>
                  <span style={{width: '70px', display: 'inline-block'}}>{item.name}</span>
                  <span>{item.bt__name}</span>
                </div>
                {/*<div className={'to--detail'}/>*/}
                <i className="iconfont">&#xe660;</i>
              </Link>:""
            )
          ) : (
            <div className="no--ticket">
              <img src={noTicket} alt=""/>
              <div style={{fontSize: '18px'}}>你还没有门票~</div>
            </div>
          )
        }
      </div>
    )
  }
}