import React from 'react'
import './index.scss'

export default class Title extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    let {Title,EnglishName,style} = this.props
    return  <div className="Title_box" style={style}>
        <span>{Title}</span>
        <span>{EnglishName}</span>
    </div>
  }
}
