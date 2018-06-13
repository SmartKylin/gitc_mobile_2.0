import React from 'react'
import './index.scss'
import Title from "../../../../components2/Title/index";

export default class HeaderPage extends React.Component {
  render() {
    let {name, enName, addr} = this.props
    return (
      <div className="HeaderPageBoxBox">
        <Title Title={name} EnglishName={enName} style={{width:'260px',paddingLeft:'20px'}}/>
        <div className="HeaderPageBoxDz">
          <i className="iconfont icon-positioning" style={{color: "#30508e", marginRight: "3px", fontSize: '18px'}}/>
          {addr}
        </div>
      </div>
    )
  }
}
