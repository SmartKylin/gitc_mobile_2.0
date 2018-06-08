import React from 'react'
import './index.scss'

export default class Title extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    let {Title,EnglishName} = this.props
    return  <div className="Title_box">
        <span>{Title}</span>
        <span>{EnglishName}</span>
    </div>
  }
}
