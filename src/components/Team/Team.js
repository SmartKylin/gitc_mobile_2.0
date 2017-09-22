import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Team.scss';
import HeadPortrait from '../HeadPortrait/HeadPortrait'
class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle:true
    }
  }
  static propTypes = {
    type: PropTypes.string,
  };
  _heandToggle(){
    this.setState({
toggle:!this.state.toggle
    })
    
  }
  render() {
    const { name, data,basedata } = this.props;
    console.log(basedata,789)
    return (
      <div>
        <span className="title-btn "> {name}	</span>
        <ul className="guests-popole-ul clearfix">



          {
             this.props.data.length&&this.props.basedata.length&&this.state.toggle?
           this.props.data.map((data, index) => (
            <HeadPortrait name={data.name} show={data.position} pics={data.pic} style={{ margin: '15px', float: 'left' }} />
          )) :
           this.props.basedata.map((data, index) => (
            <HeadPortrait name={data.name} show={data.position} pics={data.pic} style={{ margin: '15px', float: 'left' }} />
          )) 
          }





{/*{this.props.basedata ? : ''}*/}
          {/*<HeadPortrait name="lp" show="携程网携程网携程网" style={{ margin: '15px', float: 'left' }} />
          <HeadPortrait name="lp" show="携程网携程网携程网" style={{ margin: '15px', float: 'left' }} />
          <HeadPortrait name="lp" show="携程网携程网携程网" style={{ margin: '15px', float: 'left' }} />
          <HeadPortrait name="lp" show="携程网携程网携程网" style={{ margin: '15px', float: 'left' }} />*/}
        </ul>
        <span  className="btn-all btn-all-bottoms" onClick={this._heandToggle.bind(this)}>查看更多 <div className="batn-t"></div>   </span>
      </div>

    );
  }
}

export default Team;
