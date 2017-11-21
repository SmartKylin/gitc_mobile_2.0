import React from 'react';
import ExpertGroup from '../../components2/ExpertGroup';

export default class AdvisoryGroup extends React.Component {
  componentWillMount() {
    document.title = '专家顾问团';
  }

  render() {
    return (
      <div className="AdvisoryGroupBox">
        <ExpertGroup bjImg="yes" fouter="yes" />
      </div>
    );
  }
}
