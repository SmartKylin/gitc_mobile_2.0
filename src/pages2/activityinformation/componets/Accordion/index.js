import React, {Component} from 'react'
import './index.scss'
import AccordionHeader from '../AccordionHeader'

export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed: false,
        }
    }

    changeCollapse = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }

    render() {
        let {collapsed} = this.state
        let {name, bgImg, enname} = this.props
        return (
            <div className="my-accordion">
                <AccordionHeader
                    name={name}
                    changeCollapse={this.changeCollapse}
                    bgImg={bgImg}
                    collapsed={collapsed}
                    enName={enname}
                />

                <div className={collapsed ? 'accor-content hidden-style' : 'accor-content'}>
                    <img style={{width: '100%'}} src={this.props.imgA} alt=""/>
                </div>
            </div>
        )
    }
}