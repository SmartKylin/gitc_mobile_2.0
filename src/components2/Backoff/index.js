import React from 'react'
import './index.scss'
import PropTypes from 'prop-types';
export default class Backoff extends React.Component{
  static contextTypes = {
    router: PropTypes.object
  };
  onReturn = () => {
    this.context.router.history.goBack()
  }
  render(){
    return <div
        className="backoff-btn"
        onClick={this.onReturn}
    >
      返回
    </div>
  }
}
