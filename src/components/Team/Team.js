import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Team.scss';
import HeadPortrait from '../HeadPortrait/HeadPortrait'
class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  static propTypes = {
    type: PropTypes.string,
  };
  render() {
    const {name,data}=this.props;
    console.log(data,'bbb')
    return (
      <div>
        <span className="title-btn "> {name}	</span>
        <ul className="guests-popole-ul clearfix">
          {this.props.data?this.props.data.map((data,index)=>(
<HeadPortrait name={data.name} show={data.position}  pics={data.pic} style={{ margin: '15px', float: 'left' }} />
          )):''}
         
          {/*<HeadPortrait name="lp" show="携程网携程网携程网" style={{ margin: '15px', float: 'left' }} />
          <HeadPortrait name="lp" show="携程网携程网携程网" style={{ margin: '15px', float: 'left' }} />
          <HeadPortrait name="lp" show="携程网携程网携程网" style={{ margin: '15px', float: 'left' }} />
          <HeadPortrait name="lp" show="携程网携程网携程网" style={{ margin: '15px', float: 'left' }} />*/}
        </ul>
 <a href="#" className="btn-all btn-all-bottoms" >查看更多 <div className="batn-t"></div>   </a>
      </div>

    );
  }
}

export default Team;
