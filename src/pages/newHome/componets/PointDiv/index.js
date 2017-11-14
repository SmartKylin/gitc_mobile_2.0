import React from 'react'
import './index.scss'
import {BackTop} from 'antd';
import weixin from './images/weixin.png'
import goupiao from './images/goupiao.png'
export default class PointDiv extends React.Component{
  constructor(props){
    super(props)
    this.Bombbox = this.Bombbox.bind(this)
    this.state = {
      isBombbox:false
    }
  }
  Bombbox(){
    this.setState({
      isBombbox: !this.state.isBombbox
    })
  }
  render(){
    return(
        <div className="PointDivBox">

          <div className="PointDivBoxXc">
            <a href="https://www.bagevent.com/event/768490">
              <div className="PointDivBoxXcT">
                <img src={goupiao} alt=""/>
              </div>
            </a>
          </div>

          <div className="PointDivBoxWx iconfont icon-weixin" onClick={this.Bombbox}>
            {
              this.state.isBombbox ?
                  <div className="PointDivBoxWxshow">
                    <img src={weixin} alt=""/>
                  </div>:""
            }
          </div>
          <BackTop style={{marginLeft:"20px"}}/>
        </div>
    )
  }
}
