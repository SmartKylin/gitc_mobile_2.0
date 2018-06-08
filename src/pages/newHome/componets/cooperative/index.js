import React from 'react'
import './index.scss'
import Title from "../../../../components2/Title/index";
export default class Cooperative extends React.Component{


  render(){
    return(
        <div>
          <Title Title="合作伙伴" EnglishName="PARTNERS"/>
          <div className="CooperativeBox">
            <div className="CooperativeBoxImg">
              <img src='' alt=""/>
            </div>
          </div>
        </div>
    )
  }
}
