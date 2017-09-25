import React, {Component} from 'react'
import ChildContainer from 'containers/child_container'
import Field from '../componets/Field'
import './index.scss'
import {issue} from "../../../services/issue";
import Star from '../componets/Star'
import Checkgroup from '../componets/Checkgroup'
import UploaderPage from '../componets/UploaderPage'
import {message} from 'antd'

let minHeight = parseInt(document.documentElement? document.documentElement.clientHeight : document.body.clientHeight) -80
let boxStyle = {
    height: '89%',
    borderRadius: '5px',
    overflow: 'hidden',
    background: '#fff',
    position: 'relative',
    paddingBottom: '10px',
    minHeight
}
let btnStyle = {
    width: '112px',
    height: '30px',
    color: "#fff",
    background: '#336cfa',
    lineHeight: '30px',
    fontSize: '12px',
    textAlign: 'center',
    marginTop: '30px',
    borderRadius: '15px'
}
let btnStyle1 = {
    width: '112px',
    height: '30px',
    color: "#fff",
    background: '#ccc',
    lineHeight: '30px',
    fontSize: '12px',
    textAlign: 'center',
    marginTop: '30px',
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
            photonew: '', //照片
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
            suggest:'',//意见建议,
            flag:true,
            posting: false
        }
    }

    componentWillMount(){
       // document.title='议题提交'
        this.setState({
            minHeight:document.documentElement?document.documentElement.clientHeight:document.body.clientHeight
        })
    }

    // 子组件改变state相应的值
    changeValue = async (name, value) => {
        await this.setState({
            [name]:value
        })
       /* if((name =='name'||name =='company'||name =='position'||name =='photonew'||name =='theme'||name =='content')&& value==''){
            console.log(name,"ceshiname")
            this.setState({
                flag:false
            })
        }else {
            this.setState({
                flag:true
            })
        }*/

        console.log('父组件', value ,name, this.state[name])
    }

    check = obj =>{
        for( let key in obj){
            if( key =="name" && this.state.name == ''){
                message.info("姓名不能为空!")
                this.setState({
                    flag:false
                })
            }
            if( key =="company" && this.state.company == ''){
                message.info("公司不能为空!")
                this.setState({
                    flag:false
                })
            }
            if( key =="position" && this.state.position == ''){
                message.info("职位不能为空!")
                this.setState({
                    flag:false
                })
            }
            if( key=="phone" && !(/^1[34578]\d{9}$/.test(this.state.phone))){
                message.info("手机号码有误，请重填");
                this.setState({
                    flag:false
                })
            }
            if( key=="email" && !(/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(this.state.email))){
                message.info("邮箱格式有误，请重填");
                this.setState({
                    flag:false
                })
            }
            if( key =="addr" && this.state.addr == ''){
                message.info("地址不能为空!")
                this.setState({
                    flag:false
                })
            }
            if( key =="photonew" && this.state.photonew == ''){
                message.info("请上传照片")
                this.setState({
                    flag:false
                })
            }
            if( key =="summary" && this.state.summary == ''){
                message.info("个人简介不能为空")
                this.setState({
                    flag:false
                })
            }

            if( key =="theme" && this.state.theme == ''){
                message.info("演讲主题不能为空!")
                this.setState({
                    flag:false
                })
            }
            if( key =="content" && this.state.content == ''){
                message.info("内容简介不能为空!")
                this.setState({
                    flag:false
                })
            }
            this.setState({
                flag:true
            })
        }

    }


    // 议题提交
    post = async () => {
        if (this.state.posting) {
            return
        }
        let {name, company, position, phone, email, addr,
            photonew,summary,speech_experience,interest,
            remark,theme,content,innovate,hot_topic,
            experience,generality,suggest
        } = this.state;

        await this.check({name, company, position, phone, email, addr,
            photonew,summary,speech_experience,interest,
            remark,theme,content,innovate,hot_topic,
            experience,generality,suggest
        })

        var dm_id = 3;
        let photo = photonew&&photonew.length>0?photonew.pop().dataUrl:""
        if(this.state.flag){
            this.setState({
                posting: true
            })
            issue({name,company, position, phone, email,
                addr,photo,summary,speech_experience,interest,remark,theme,content,innovate,hot_topic,
                experience,generality,suggest,dm_id})
                .then(res => res.json())
                .then(data => {
                    message.info(data.msg)
                    this.setState({
                        posting: false
                    })
                })
        }

    }
        render() {
            let {name, company, position, phone, email, addr,
            photo,summary,speech_experience,interest,
            remark,theme,content,innovate,hot_topic,
            experience,generality,suggest
        } = this.state;
        return (
            <ChildContainer  style={{position:"static",minHeight:`${this.state.minHeight}px`,paddingBottom:"10px"}}>
                <div style={boxStyle}>
                    <Field title='姓名 :' required={true} changeValue={this.changeValue}  name={'name'}></Field>
                    <Field title='公司 :' required={true} changeValue={this.changeValue}  name={'company'}></Field>
                    <Field title='职位 :' required={true} changeValue={this.changeValue}  name={'position'}></Field>
                    <Field title='手机 :' required={true} changeValue={this.changeValue}  name={'phone'}></Field>
                    <Field title='邮箱 :' required={true} changeValue={this.changeValue}  name={'email'}></Field>
                    <Field title='详细地址' required={true} textArea={{type:"yes"}} rows="2" placeholder=" (请填写详细地址)" model={addr} changeValue={this.changeValue}  name={'addr'}></Field>
                    <div className="shangchang">
                        <UploaderPage changeValue={this.changeValue} name="photonew"/>
                    </div>
                    <Field title='个人简介'  required={true} textArea={{type:"yes"}} rows="3" placeholder=" (200字即可)" model={summary} changeValue={this.changeValue}  name={'summary'}></Field>
                    <Field title='演讲经验' textArea={{type:"yes"}} rows="5" placeholder=" (在行业会议、论坛等的演讲、主持或荣誉简介)"   model={speech_experience} changeValue={this.changeValue}  name={'speech_experience'}></Field>
                    <div style={{padding: '13px'}}>
                        <div style={{fontSize: '13px', borderBottom: '1px solid rgb(227, 227, 227)'}}>
                            <span>选择你感兴趣的专场</span>
                            <span style={{color: "#2f72ff", marginLeft: '5px'}}>(选择1-2个)</span>
                            <Checkgroup name="interest" changeValue={this.changeValue}/>
                        </div>
                    </div>
                    <Field title='备注'textArea={{type:"yes"}} rows="1" changeValue={this.changeValue}  name={'remark'}></Field>
                    <Field title='演讲主题' required={true} textArea={{type:"yes"}} rows="2" placeholder=" (请确保该主题未在其他公开场合分享过)" changeValue={this.changeValue}  name={'theme'}></Field>
                    <Field title='内容简介' required={true} textArea={{type:"yes"}} rows="5"placeholder=" (用于演讲内容审核，200字左右即可)" changeValue={this.changeValue}  name={'content'}></Field>
                    <div style={{padding: '10px 13px'}}>
                        <div style={{borderBottom: '1px solid rgb(227, 227, 227)', padding: '10px 0'}}>
                            <Star title="主题创新" changeValue={this.changeValue} name="innovate"/>
                            <Star title="话题热度" changeValue={this.changeValue} name="hot_topic"/>
                            <Star title="实战经验" changeValue={this.changeValue} name="experience"/>
                            <Star title="内容通用性" changeValue={this.changeValue} name="generality"/>
                        </div>
                    </div>
                    <Field title='推荐人 :' changeValue={this.changeValue}  name={'content'}></Field>
                    <Field title='意见建议 :' textArea={{type:"yes"}} rows="5" changeValue={this.changeValue}  name={'suggest'}></Field>


                    <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                        <div  style={!this.state.posting?btnStyle:btnStyle1}  onClick={() => this.post()}>确定提交</div>
                    </div>
                </div>

            </ChildContainer>
        )
    }
}
