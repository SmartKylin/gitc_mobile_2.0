import React from 'react';
import Logo from './images/homeLogo.png'
import './index.scss'
import AnAssembly from './componets/AnAssembly'
import Squared from './componets/squared'
import Introduction from './componets/introduction'
import Brief from './componets/brief'

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
          {/*九宫格*/}
          <Squared/>
          {/*大会介绍*/}
          <Introduction/>
          {/*大会亮点*/}
          <AnAssembly/>
          {/*大会介绍*/}
          <Brief/>


        </div>
    )
  }




}
