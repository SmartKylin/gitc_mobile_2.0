import React, {Component} from 'react'
import {Menu, Icon} from 'antd'
import 'antd/dist/antd.css'
import './index.scss'
// import avatarIcon from '../../../../images/yueguangjifeng.jpg'
import storage from '../../../../helper/storage'
import {getGuestList} from "../../../../services/collect";
import {TOKEN} from "../../../../helper/login";
import MyCollect from '../../component/MyCollect'
import FilesCollect from '../../component/FilesCollect'


const {SubMenu} = Menu

export default class extends Component {
  constructor () {
    super()
    this.state = {
      guestData: [],
      fileData: [],
      collapsed: true,
    }
  }
  changeCollapse = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  async componentWillMount() {
    let phone = storage.get(storage.PHONE_KEY)
    this.phone = phone
  
    if (phone) {
      // 获取文档列表和嘉宾列表
      let userData = await getGuestList({phone, token: TOKEN})
      .then(res => res && res.json())
      // console.log(userData.data, 'userdata');
      this.setState({
        guestData: userData && userData.data && userData.data.mycollect,
        fileData: userData && userData.data && userData.data.myfiles
      })
      // console.log(this.state.guestData, 'usermenu');
    }
  }
  render() {
    let subMenuStyle = {
      marginLeft: '-12px'
    }
    let {guestData, fileData, collapsed} = this.state
    let {openPop, closePop, setLoginCb} = this.props
    return (
     <div className="user">
  
       {
         guestData && guestData.length &&
         <MyCollect
           guestData={guestData}
           openPop={openPop}
           closePop={closePop}
           setLoginCb={setLoginCb}
         />
       }
  
       {
         guestData && guestData.length &&
         <FilesCollect
          fileData={fileData}
           openPop={openPop}
           closePop={closePop}
           setLoginCb={setLoginCb}
         />
       }
     </div>
    )
  }
}