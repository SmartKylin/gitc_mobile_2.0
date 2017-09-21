import React, {Component} from 'react'
import './index.scss'
import {Link} from 'react-router-dom'
import avatarIcon from 'images/avatar.svg'

let colorAry = ['#ff1854', '#0078ffi', '#273e6a', '#11daff'];

export default class extends Component {
  render () {
    let avatarStyle = {
      // background: 'url(../../../images/avatar.svg)'
    }
    let minHeight = parseInt(document.documentElement? document.documentElement.clientHeight : document.body.clientHeight) -100
    return (
      <div style={{background: '#fff', marginTop: '10%', height: minHeight + 'px', borderRadius: '4px', padding: '0 16px'}}>
        {
          [1, 2, 3].map((item, index) => (
              <Link key={index} to={'/ticketdetail'} style={{borderBottom: '1px solid #ccc', height: '54px', fontSize: '14px', lineHeight: '54px', color: '#000', display: 'flex', alignItems: 'center', fontWeight: 'bold'}}>
                <span className="ticket--avatar">
                  <img className="avatar--icon" src={avatarIcon} alt=""/>
                </span>
                <span style={{width: '70px', }}>王子涵</span>
                <span>大会通票</span>
              </Link>
            )
          )
        }
      </div>
    )
  }
}