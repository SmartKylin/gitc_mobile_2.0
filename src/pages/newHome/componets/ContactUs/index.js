import React from 'react'
import './index.scss'
import footer from './images/footer.png'
export default class ContactUs extends React.Component{



  render(){
    return(
        <div className="ContactUsBox">
          <div className="ContactUsBoxImg">
            <img src={footer} alt=""/>
          </div>
        </div>
    )
  }
}
