import React, {Component} from 'react'
import ChildContainer from 'containers/child_container'
import Field from '../componets/Field'
import './index.scss'
import {issue} from "../../../services/issue";
import Star from '../componets/Star'
import Checkgroup from '../componets/Checkgroup'
import {message} from 'antd'

let btnStyle = {
    width: '112px',
    height: '30px',
    color: "#fff",
    background: '#336cfa',
    lineHeight: '30px',
    fontSize: '12px',
    textAlign: 'center',
    margin: '20px 0',
    borderRadius: '15px'
}

export default class Issus extends Component {
    constructor () {
        super()
        this.state = {
            minHeight:'',
            uploadList1: [],
            name: '',//姓名
            company: '',//公司
            position: '', //职位
            phone: '',//手机号
            email: '', //邮箱
            addr: '', //地址
            photo: '', //照片
            summary:'', //简介
            speech_experience:'',//演讲经验
            interest:'',//兴趣专场
            remark:'',//备注
            theme:'',//演讲主题
            content:'',//演讲内容
            innovate:'',//主题创新
            hot_topic:'',//话题热度
            experience:'',//实战经验
            generality:'',//通用性
            suggest:'',//意见建议
        }
    }

    componentWillMount(){
        this.setState({
            minHeight:document.documentElement?document.documentElement.clientHeight:document.body.clientHeight
        })
    }

    // 子组件改变state相应的值
    changeValue = async (name, value) => {
        await this.setState({
            [name]:value
        })
        console.log(name, this.state[name])
    }

    // 议题提交
    post = () => {
        let {name, company, position, phone, email, addr,
            photo,summary,speech_experience,interest,
            remark,theme,content,innovate,hot_topic,
            experience,generality,suggest
        } = this.state;
        issue({name, company, position, phone, email,
            addr,photo,summary,speech_experience,interest,remark,theme,content,innovate,hot_topic,
            experience,generality,suggest})
            .then(res => res.json())
            .then(data => {
                message.info(data.msg)
            })
    }
    render() {
        let {name, company, position, phone, email, addr,
            photo,summary,speech_experience,interest,
            remark,theme,content,innovate,hot_topic,
            experience,generality,suggest
        } = this.state;
        return (
            <ChildContainer  style={{position:"static",minHeight:`${this.state.minHeight}px`,paddingBottom:"10px"}}>
                <div style={{background: '#fff',borderRadius:'4px'}}>
                    <Field title='姓名' required={true} changeValue={this.changeValue}  name={'name'}></Field>
                    <Field title='公司' required={true} changeValue={this.changeValue}  name={'company'}></Field>
                    <Field title='职位' required={true} changeValue={this.changeValue}  name={'position'}></Field>
                    <Field title='手机' required={true} changeValue={this.changeValue}  name={'phone'}></Field>
                    <Field title='邮箱' required={true} changeValue={this.changeValue}  name={'email'}></Field>
                    <Field title='详细地址' required={true} textArea={{type:"yes"}} rows="2" placeholder="(请填写详细地址)" model={addr} changeValue={this.changeValue}  name={'addr'}></Field>
                    <Field title='照片' required={true} changeValue={this.changeValue}  name={'photo'}></Field>
                    <Field title='简介'    textArea={{type:"yes"}} rows="3" placeholder="(200字即可)" model={summary} changeValue={this.changeValue}  name={'summary'}></Field>
                    <Field title='演讲经验' textArea={{type:"yes"}} rows="5" placeholder="(在行业会议、论坛等的演讲、主持或荣誉简介)"   model={speech_experience} changeValue={this.changeValue}  name={'speech_experience'}></Field>
                    <div style={{padding: '13px'}}>
                        <div style={{fontSize: '13px', borderBottom: '1px solid rgb(227, 227, 227)'}}>
                            <span>选择你感兴趣的专场</span>
                            <span style={{color: "#2f72ff", marginLeft: '5px'}}>(选择1-2个)</span>
                            <Checkgroup name="interest" changeValue={this.changeValue}/>
                        </div>
                    </div>
                    <Field title='备注' changeValue={this.changeValue}  name={'remark'}></Field>
                    <Field title='演讲主题' required={true} textArea={{type:"yes"}} rows="2" placeholder="(请确保该主题未在其他公开场合分享过)" changeValue={this.changeValue}  name={'theme'}></Field>
                    <Field title='内容简介' required={true} textArea={{type:"yes"}} rows="5"placeholder="(用于演讲内容审核，200字左右即可)" changeValue={this.changeValue}  name={'content'}></Field>
                    <div style={{padding: '10px 13px'}}>
                        <div style={{borderBottom: '1px solid rgb(227, 227, 227)'}}>
                            <Star title="主题创新" changeValue={this.changeValue} name="innovate"/>
                            <Star title="话题热度" changeValue={this.changeValue} name="hot_topic"/>
                            <Star title="实战经验" changeValue={this.changeValue} name="experience"/>
                            <Star title="内容通用性" changeValue={this.changeValue} name="generality"/>
                        </div>
                    </div>
                    <Field title='推荐人'   model={content}  changeValue={this.changeValue}  name={'content'}></Field>
                    <Field title='意见建议' model={suggest}  textArea={{type:"yes"}} rows="5" changeValue={this.changeValue}  name={'suggest'}></Field>


                    <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                        <div  style={btnStyle} onClick={() => this.post()}>确定提交</div>
                    </div>
                </div>

            </ChildContainer>
        )
    }
}
