import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Team.scss';
import $ from 'jquery';
import HeadPortrait from '../HeadPortrait/HeadPortrait'

class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      positionbtn: true,
      top:''

    }
  }
  
  static propTypes = {
    type: PropTypes.string,
  };
  _heandToggle(e) {
    // console.log($(document).scrollTop(),'lllllllllllll')
    this.setState({
      toggle: !this.state.toggle,
    })
    // $(e.target).addClass('rosition-fix')
    if (this.state.toggle) {
      $(e.target).children(":first").addClass('rotate')
      $(e.target).removeClass('rosition-fix')

    } else {
      // $('body').scrollTop = this.state.top
      $(e.target).children(":first").removeClass('rotate')
      //  $(e.target).addClass('rosition-fix');
      $('.rosition-fix').css('display', 'none')
      $(e.target).next().css('display', 'block')

      let that = e.target;
      let _this = this;
      document.onscroll = function () {
        // console.log(parseInt($(that).next().offset().top), 'a');
        // console.log(parseInt($(that).prev().offset().top), 'c');
        let a = $(that).next().offset().top;
        let c = $(that).prev().offset().top
        let c_height = $(that).prev().height()
        console.log(c_height, 'hemoxing')
        if ((parseInt(a) <= parseInt(c)) || (parseInt(a) >= parseInt(c) + c_height)) {
          // console.log(1)
          _this.setState({
            positionbtn: true
          })
        } else {
          _this.setState({
            positionbtn: false
          })
          // console.log(2)
        }
      }
    }

  }
  
  render() {


    const {name, data, basedata} = this.props;
    // console.log(data, 'team');
    return (
    <div>
      <span className="title-btn "> {name}	</span>
      <ul className="guests-popole-ul clearfix">
        {
          this.props.data.length && this.props.basedata.length && this.state.toggle ?
          this.props.data.map((data, index) => (
          <HeadPortrait key={index} name={data.name}
                        show={data.position}
                        pics={data.pic}
                        style={{margin: '15px', float: 'left'}}
                        data={data}
                        speech={this.props.name === '演讲嘉宾'}
                        openPop={this.props.openPop}
                        closePop={this.props.closePop}
                        setLoginCb={this.props.setLoginCb}
          />
          )) :
          this.props.basedata.map((data, index) => (
          <HeadPortrait key={index}
                        name={data.name}
                        show={data.position}
                        pics={data.pic}
                        style={{margin: '15px', float: 'left'}}
                        data={data}
                        speech={this.props.name === '演讲嘉宾'}
                        openPop={this.props.openPop}
                        closePop={this.props.closePop}
                        setLoginCb={this.props.setLoginCb}
          />
          ))
        }
        
        
        {/*{this.props.basedata ? : ''}*/}
        {/*<HeadPortrait name="lp" show="携程网携程网携程网" style={{ margin: '15px', float: 'left' }} />
          <HeadPortrait name="lp" show="携程网携程网携程网" style={{ margin: '15px', float: 'left' }} />
          <HeadPortrait name="lp" show="携程网携程网携程网" style={{ margin: '15px', float: 'left' }} />
          <HeadPortrait name="lp" show="携程网携程网携程网" style={{ margin: '15px', float: 'left' }} />*/}
      </ul>
      <div style={{ display: this.state.positionbtn ? 'block' : 'none' }} className="btn-all btn-all-bottoms" onClick={this._heandToggle.bind(this)}>查看更多<div className="batn-t"></div>   </div>
        <div style={{  visibility: this.state.positionbtn ? 'hidden' :  'visible'}} className="btn-all btn-all-bottoms rosition-fix  disnone" onClick={this._heandToggle.bind(this)}>查看更多<div className="batn-t"></div>   </div>
    </div>
    );
  }
}
export default Team;
