import React, {Component} from 'react'
import {Menu} from 'antd'
import 'antd/dist/antd.css'
import '../index.scss'
import {getListImgs} from "../../../services/getListNews";

const {SubMenu} = Menu
export default class AddGroupContainer extends Component {
    constructor(props) {
        super(props)
        this.GroupPop = this.GroupPop.bind(this)
        this.closePopImg = this.closePopImg.bind(this)
        this.state={
            datas:[],
            flag:false,
            curPopImg: ''
        }
    }

    componentWillMount () {
        getListImgs(8).then(res => res && res.json())
            .then(data => {
                this.setState({
                    datas: data.data,
                    minHeight: document.documentElement ? document.documentElement.clientHeight : document.body.clientHeight
                })
            })
    }

    GroupPop(img){
    //   console.log(img, 'pop');
      this.setState({
        img,
        flag:true
      })
    }
    closePopImg(e){
      e.stopPropagation();
      this.setState({
        flag: false
      })
    }

    render() {

      return (
            <div className="AddGroupContainer-">
                <Menu
                    mode="inline"
                    style={{background: '#fff',borderRadius: '5px',paddingBottom:'3px'}}
                >
                    {
                        this.state.datas &&  this.state.datas.length>0 && this.state.datas.map((item,index)=>(
                            <SubMenu key={'i'+index}  title={<span style={{fontSize:'14px'}}>{item.title}</span>}>
                                <div className="AddGroupContainer-Box">
                                    <div className="AddGroupContainer-Item">
                                        {
                                            item.data &&  item.data.length>0 && item.data.map( (innerItem,index)=> {
                                               return index < 4 ?
                                                    <div key={index}>
                                                        <img style={{width: '0.84rem', height: '0.84rem'}} onClick={() => this.GroupPop(innerItem.img)} src={innerItem.img} alt=""/>
                                                        <div>{innerItem.title}</div>
                                                    </div>:""

                                            })
                                        }
                                    </div>
                                </div>
                            </SubMenu>
                        ))
                    }
                  {this.state.flag ? <div className="AddGroupContainerBig"><img src={this.state.img}  onClick={this.closePopImg} alt=""/></div> :""}
                </Menu>

            </div>
        )
    }
}