import React from 'react'
import './index.scss'
import hezuohuoban from './iamges/hezuohuoban.png'
import logo from './iamges/logo.png'
import Title from "../../../../components/Title";
import {getListImgs} from "../../../../services/getListNews";

export default class Cooperative extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data:''
        }
    }

    async componentWillMount() {

        let expertData = await getListImgs(98).then(res => res.json())

        console.log(expertData,'expertDataexpertDataexpertData-');
        await this.setState({
            data: expertData.data
        })

    }

    render() {
        const {data} = this.state
        return (
            <div className="CooperativeBox">
                <div className="CooperativeBoxImg">
                    <Title name='合作伙伴'/>
                    {data && <img src={data[0].img} alt=""/>}
                </div>

            </div>
        )
    }
}
