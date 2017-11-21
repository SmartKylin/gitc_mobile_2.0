import React from 'react';
import ChildContainer from 'containers/child_container';
import AwardsComponent from './component/AwardsComponent';
export default class Awards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    document.title = '奖项评选';
  }
  render() {
    let style = {
      backgroundColor: '#000'
    };
    return (
      <ChildContainer Awards={style}>
        <AwardsComponent />
      </ChildContainer>
    );
  }
}
