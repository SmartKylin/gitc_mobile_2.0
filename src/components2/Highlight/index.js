import React, {Component} from 'react'
import './index.scss'
import AccordionHeader from '../../components2/AccordionHeader'
import {Link} from 'react-router-dom'

const styleLink = {
    color: '#FFF',
    width: '80px',
    height: '25px',
    lineHeight: '25px',
    textAlign: 'center',
    border: '1px solid',
    display: 'inline-block',
    borderRadius: '25px',
}

function getLinkbyName(name) {
    if (name.indexOf('品牌专场') > -1) {
        return <Link style={styleLink} to="/brand">查看详情</Link>
    } else if (name.indexOf('活动路演1') > -1) {
        return <Link style={styleLink} to="/roadshow">查看详情</Link>
    } else if (name.indexOf('集印章') > -1) {
        return <Link style={styleLink} to="/collectstamp">查看详情</Link>
    } else {
        return null
    }
}

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
        let {light, bgImg} = this.props
        let content = null;
        try {
            content = JSON.parse(light.content)
        } catch (e) {
            console.log(e);
        }
        
        return (
            <div className="my-accordion">

                <AccordionHeader
                    name={light.name}
                    changeCollapse={this.changeCollapse}
                    bgImg={bgImg}
                    enName={light.summary}
                    collapsed={collapsed}
                />
                {
                    collapsed
                        ? <div className="light-content">
                            <div className="time">
                                <span className="light-item-title">时间</span>
                                {content && content.time}
                            </div>
                            <div className="addr">
                                <span className="light-item-title">地点</span>
                                {content && content.addr}
                            </div>
                            <div className="summary">
                                <span className="light-item-title" style={{verticalAlign: 'top', width: '7%'}}>介绍</span>
                                <span style={{
                                    display: 'inline-block',
                                    width: '88%',
                                    textAlign: 'justify'
                                }}>{content && content.summary}</span>
                                <div style={{color: '#FFF', textAlign: 'right'}}>
                                    {
                                        getLinkbyName(light.name)
                                    }
                                </div>
                            </div>
                        </div>
                        : null
                }
            </div>
        )
    }
}