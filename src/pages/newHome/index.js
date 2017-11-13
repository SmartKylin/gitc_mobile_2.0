import React from 'react';
import Logo from './images/homeLogo.png'
import './index.scss'
export default class NewHome extends React.Component{
  constructor(props){
    super(props)
    this.state= {

    }
  }

  render(){
    return(
        <div className="NewHomeBox">
          <div className="bg">
            <img src={Logo} alt=""/>
          </div>
          {/*大会亮点*/}

        </div>
    )
  }




}
