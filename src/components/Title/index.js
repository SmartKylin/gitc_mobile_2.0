import React from 'react'
import './index.scss'

export default class Title extends React.Component {
    render() {
        const {name} = this.props
        return (
            <div className='title-box'>
                {name}
            </div>
        );
    }
}