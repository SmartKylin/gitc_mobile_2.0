import { Rate } from 'antd';
import React, {Component} from 'react'

export default class extends Component {
    state = {
        value: 0,
        count: null,
    }
    handleChange = (value) => {
        this.setState({ value });
        this.props.changeValue(this.props.name, value)
    }
    render() {
        const { value } = this.state;
        return (
            <span style={{display: 'flex', alignItems: 'center'}} className="issue">
                <div style={{width: '30%', fontSize: '13px'}}>{this.props.title}</div>
                <Rate onChange={this.handleChange} value={value} />
            </span>
        );
    }
}
