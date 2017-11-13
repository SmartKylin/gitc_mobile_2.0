import React from 'react'
import './index.scss'
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

          <div className="PointDivBoxWx" onClick={this.Bombbox}>
            {
              this.state.isBombbox ?
                  <div className="show">

                  </div>:""
            }
          </div>

        </div>
    )
  }
}
