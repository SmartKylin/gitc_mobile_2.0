import React, {Component} from 'react'
import classNames from "classnames"
import './index.scss'

let FieldWrap = {
  margin: '0 13px',
  padding: '12px 0',
  background: '#fff',
  fontSize: '13px',
  display: 'flex',
  flexDirection: 'column',
  borderBottom: '1px solid #e3e3e3',
  flex: 1
}

let inputStyle = {
  flex: 6
}
export default class extends Component {
  constructor (props) {
    super(props)
    this.handleUploadChange = this.handleUploadChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.state = {
      value: ''
    }
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
        }
    }
    handleDelete (id) {
        this.setState((previousState)=>{
            return previousState.uploadList1.map((item, index)=>{
                if(item.id === id){
                    previousState.uploadList1[index].status = 'deleted';
                }
            });
        });
    }
  changeValue = (e) => {
    let value = e.target.value
    this.setState({
      value
    })
    this.props.changeValue(this.props.name, value)
  }
  render () {

    return (
      <div style={FieldWrap}>
        <div className="box">
          <span>{this.props.title}：<span style={{color:"#ccc", fontSize: '13px'}}>{this.props.placeholder}</span></span>
          {this.props.textArea ? null : <input type={this.props.type || 'text'} style={inputStyle} onInput={ (e) => this.changeValue(e)}/>}
          <i className={classNames({'required--star weizhi': this.props.required})}/>
        </div>
        {this.props.textArea ? <textarea style={{resize: 'none'}}  name="" id="" cols="30" rows={this.props.rows}  onInput={ (e) => this.changeValue(e)}></textarea> : null}

      </div>
    )
  }
  componentWillMount () {
    console.log(this.props.model);
  }
}