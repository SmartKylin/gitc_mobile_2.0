import React, {Component} from 'react'
import GuestItem from '../../components2/GuestItem'
import {getPopleList, getSpeecherGroup} from "../../services/home";
import SpeecherImg from '../../images2/speecher-header.png'
import Logo from '../../pages/newHome/images/logo.png'
import './index.scss'
import NewFouter from "../Fouter/index";
import Title from "../../components/Title";

export default class SpeecherGroup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            speecherData: [],
        }
    }

    async componentWillMount() {
        document.title = "演讲嘉宾"
        let speecherData = await getSpeecherGroup().then(res => res.json())
        await this.setState({
            speecherData: speecherData.data
        })

        console.log(this.props,'speecherspeecher');

    }

    render() {
        let {speecherData} = this.state
        let {openPop, closePop, setLoginCb} = this.props.history
        const {isFlay} = this.props
        return (
            <div className="speecher-group">
                {!isFlay ? <img src={Logo} alt="" className="item-header"/> : null}
                {/*<div className="speecher-header"/>*/}
                <Title name='演讲嘉宾'/>
                <div className="people-group">
                    {
                        speecherData && speecherData.length > 0
                            ? speecherData.map((item, index) => (
                                <GuestItem
                                    data={item}
                                    key={index}
                                    hasPop={true}
                                    openPop={openPop}
                                    closePop={closePop}
                                    setLoginCb={setLoginCb}
                                />
                            ))
                            : null
                    }
                </div>
                {!isFlay ? <NewFouter/> : null}
            </div>
        )
    }
}