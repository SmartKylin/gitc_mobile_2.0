import React, {Component} from 'react';
import PropTypes from 'prop-types';
import GuestDetailPop from '../AgendaPople/GuestDetailPop'
// import AgendaPople from '../AgendaPople/AgendaPople'
// import CollectedModal from '../CollectedModal'
import './HeadPortrait.scss';
import $ from 'jquery'

class HeadPortrait extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: '',
      guestPopDisplay: false
    }
  }
  
  componentDidMount() {
    if (this.props.pics) {
      this.setState({
        img: this.props.pics
      })
    } else {
      this.setState({
        img: require('../images/陈洋.jpg')
      })
    }
  }
  
  static propTypes = {
    type: PropTypes.string,
  };
  
  stopBgScroll() {

    $('html').css('height', '100%')
    $('body').css('height', '100%')
    $('body').css('overflow', 'hidden')
    $('html').css('overflow', 'hidden')
  }
  
  recoveryBgScroll() {
    $('html').css('overflow', 'visible').scrollTop(this.top)
    $('body').css('overflow', 'visible').scrollTop(this.top)
  }
  
  _handleOnClick = async () => {
    await this.setState({
      guestPopDisplay: true
    })
    console.log($('body').scrollTop())
    this.top = $('body').scrollTop()
    this.stopBgScroll()
  }
  _handleOffClick = async (e) => {
    e.stopPropagation()
    await this.setState({
      guestPopDisplay: false
    })
    this.recoveryBgScroll()
  }
  
  render() {
    const {
      company,
      pics,
      name,
      show,
      style,
      data,
      // 是否为演讲嘉宾栏
      speech,
      position
    } = this.props
    return (
    <div className="headportrait-content" style={style} onClick={this.props.speech ? this._handleOnClick : null}>
      <img src={this.state.img} alt="" className="headportrait-img"/>
      <div className="headportrait-font">
        <div className="headportrait-font-title">{name}</div>
        <div>{data.company} {data.position}</div>
      </div>
      
      <div className="windowPop" style={{display: this.state.guestPopDisplay ? "block" : 'none'}}>
          {this.props.speech ? <GuestDetailPop
              _handleOffClick={this._handleOffClick}
              data={data}
              speech={this.props.speech}
              openPop={this.props.openPop}
              closePop={this.props.closePop}
              setLoginCb={this.props.setLoginCb}
          /> : null }
      </div>
    
    </div>
    );
  }
}

export default HeadPortrait;
