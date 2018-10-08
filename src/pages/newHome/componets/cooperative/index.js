import React from 'react'
import './index.scss'
import hezuohuoban from './iamges/hezuohuoban.png'
import logo from './iamges/logo.png'
import Title from "../../../../components/Title";

export default class Cooperative extends React.Component {


    render() {
        return (
            <div className="CooperativeBox">
                <div className="CooperativeBoxImg">
                    <Title name='合作伙伴'/>
                   {/* <img src={hezuohuoban} alt=""/>
                    <img src={logo} alt=""/>*/}
                </div>
            </div>
        )
    }
}
