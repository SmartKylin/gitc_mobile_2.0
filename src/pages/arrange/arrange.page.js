import React, { Component } from 'react';
// import {
//     Link
// } from 'react-router-dom'
// import { PREFIX_URL,request } from "../common"
// import { getShopList, handlePhone } from "../common"
import ClassDetails from "../../components/ClassDetails/ClassDetails"
import ClassRooms from "../../components/ClassRooms/ClassRooms"
import AgendaPople from "../../components/AgendaPople/AgendaPople"
// // import fetchJsonp from 'fetch-jsonp';
import './arrange.page.css';
// import StgItem from "../components/stg.item";
// const LOGO_1 = require('../../components/images/logo1.jpg')
// const LOGO_2 = require('../../components/images/logo2.jpg')
// const HEADER = require('../../components/images/logo2.jpg')
// const MAP = require('../../components/images/map.png')

export default class Arrange extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
        }
    }
    componentWillMount() {

    }
    componentDidMount() {

    }

    render() {

        return (
            <div className="arrange-content">
                <div className="arrange-btn-content ">
                    <div className="arrange-btn-23 arrange-btn"><em></em><span>11月23日</span></div>
                    <div className="arrange-btn-24 arrange-btn">11月24日</div>
                </div>
                <div className="arrange-titile">
                    <span className="arrange-titile-name">技术管理&产品专场</span>s
                    <span className="arrange-number">308A</span>
                </div>
                <ul>
                    <AgendaPople />
                    <AgendaPople />
                </ul>
            </div>

        );
    }
}

