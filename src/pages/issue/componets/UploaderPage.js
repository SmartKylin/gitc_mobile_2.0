import React from 'react';
import Uploader from '../../../components/Uploader/index';
import './index.scss';
class UploaderPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadList1: []
    };
    this.handleUploadChange = this.handleUploadChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  changeValue = value => {
    this.props.changeValue(this.props.name, value);
  };

  handleUploadChange(obj) {
    if (obj.status === 'loading') {
      this.setState(previousState => {
        return previousState.uploadList1.push(obj);
      });
    } else {
      this.setState(previousState => {
        return previousState.uploadList1.map((item, index) => {
          if (item.id === obj.id) {
            previousState.uploadList1.splice(index, 1, obj);
          }
        });
      });
      this.changeValue(this.state.uploadList1);
    }
  }

  handleDelete(id) {
    this.setState(previousState => {
      return previousState.uploadList1.map((item, index) => {
        if (item.id === id) {
          previousState.uploadList1[index].status = 'deleted';
          this.changeValue(this.state.uploadList1);
        }
      });
    });
  }
  render() {
    const { uploadList1 } = this.state;
    return (
      <div className="xingBox">
        <Uploader
          data={uploadList1}
          uploadUrl={
            'http://120.92.10.182:8000/api/gitc/meetissue/upload.json?token=1afb756d16740266efde290917ca1a8e?doamin=3'
          }
          onChange={this.handleUploadChange}
          onDelete={this.handleDelete}
          max={5}
        />
        <div className="xing">*</div>
      </div>
    );
  }
}

export default UploaderPage;
