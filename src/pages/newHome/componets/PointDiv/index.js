import React from 'react'
import './index.scss'
import {BackTop} from 'antd';
import weixin from './images/weixin.png'
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
                <div>现场</div>
                <div>购票</div>
              </div>
            </a>
          </div>

          <div className="PointDivBoxWx iconfont icon-weixin1" onClick={this.Bombbox}>
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
