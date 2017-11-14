import React from 'react'
import dahuiYihceng from '../../images/dahuiyicheng.png'
import './index.scss'
export default class HeaderPage extends React.Component{



  render(){
    return(
        <div className="HeaderPageBoxBox">
          <div className="HeaderzPageBox">
            <div className="HeaderPageBox-bg">
              主会场(24号)
            </div>
            <div className="HeaderPageYXbox">
              PRESIDIUM
            </div>
            <div className="HeaderPageBoxDz">
              <i className="iconfont icon-positioning" style={{color:"#30508e",marginRight:"3px",fontSize:'18px'}} ></i>1F·大宴会厅C
            </div>
          </div>
          <div className="HeaderzPageBoxXiang">详情>></div>
        </div>

    )
  }
}
