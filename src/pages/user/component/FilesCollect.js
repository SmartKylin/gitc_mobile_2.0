import React, { Component } from 'react';
import AccordionHeader from '../../../components2/AccordionHeader';
import CollectItem from './CollectionItem';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
      fileData: props.fileData || []
    };
  }

  changeCollapse = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  render() {
    // let { fileData } = this.state;
    let { fileData } = this.props;
    console.log(fileData, 'fileData');
    let { collapsed } = this.state;
    return (
      <div
      // className="my-accordion"
      >
        <AccordionHeader
          name={'文档收藏'}
          changeCollapse={this.changeCollapse}
          collapsed={collapsed}
          iconName={'icon-wendangtianjiadianjixiaoguo'}
        />

        {/*<div
          className={collapsed ? 'accor-content hidden-style' : 'accor-content'}
        >
          {fileData &&
            fileData.map((item, index) => (
              <CollectItem key={index} data={item} isFile={true}/>
            ))}
        </div>*/}
        {collapsed ? (
          <div>
            {fileData &&
              fileData.map((item, index) => (
                <CollectItem key={index} data={item} isFile={true} />
              ))}
          </div>
        ) : null}
      </div>
    );
  }
}
