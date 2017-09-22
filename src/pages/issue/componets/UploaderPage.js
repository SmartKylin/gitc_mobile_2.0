import React from 'react'
import Uploader from '../../../components/Uploader/index'

class UploaderPage extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            uploadList1: []
        };
        this.handleUploadChange = this.handleUploadChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    changeValue = (value) => {
        this.props.changeValue(this.props.name, value)
    }


    handleUploadChange (obj) {

        if(obj.status === 'loading'){
            this.setState((previousState)=>{
                return previousState.uploadList1.push(obj);
            });
        } else {
            this.setState((previousState)=>{
                return previousState.uploadList1.map((item, index)=>{
                    if(item.id === obj.id){
                        previousState.uploadList1.splice(index, 1, obj)
                    }
                });
            });
            this.changeValue(this.state.uploadList1)
        }
    }

    handleDelete (id) {
        this.setState((previousState)=>{
            return previousState.uploadList1.map((item, index)=>{
                if(item.id === id){
                    previousState.uploadList1[index].status = 'deleted';
                    this.changeValue(this.state.uploadList1)
                }
            });
        });
    }
    render () {
        const {uploadList1} = this.state;
        return (
            <div className=''>
                <Uploader
                    data={uploadList1}
                    uploadUrl={'https://jsonplaceholder.typicode.com/posts/'}
                    onChange={this.handleUploadChange}
                    onDelete={this.handleDelete}
                    max={5}
                />
            </div>
        )
    }
}

export default UploaderPage