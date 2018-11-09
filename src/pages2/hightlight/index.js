import React, {Component} from 'react'
import './index.scss'

import {getAgenda, getLightDot} from "../../services/home";
import HighLight from '../../components2/Highlight'
import Title from "../../components/Title";

const generateImgAry = () => {
    let ary = [];
    for (let i = 1; i < 17; i++) {
        ary.push(require(`../../images2/accordionA_bg${i}.png`))
    }
    return ary
}

let imgAry = generateImgAry()


export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            agendaData: [],
            highlightData: [],
        }
    }

    async componentWillMount() {
        // console.log(this.props.history, 'fdfd');

       /* let res = await getAgenda()
            .then(res => res.json())
        await this.setState({
            agendaData: res.data
        })*/
        let data = await getLightDot().then(res => res.json())
        await this.setState({
            highlightData: data.data
        })

    }

    render() {

        let {highlightData} = this.state        
        return (
            <div style={{paddingTop:'45px'}} className="entry-page">
                {/*亮点环节*/}
                <div className="light-dot-img">
                    <Title name='亮点环节'/>
                </div>

                <div className="accordion-wrapper">
                    <div className="accordion">
                        {
                            highlightData && highlightData.length > 0 && highlightData.map((item, ind) => (
                                <HighLight key={ind} light={item} bgImg={imgAry[ind]}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}