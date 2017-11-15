import React, {Component} from 'react'
import {Menu, Icon} from 'antd'
import 'antd/dist/antd.css'
import './index.scss'
// import avatarIcon from '../../../../images/yueguangjifeng.jpg'
import GuestItem from '../../component/CollectionItem'
import storage from '../../../../helper/storage'
import {getGuestList} from "../../../../services/collect";
import {TOKEN} from "../../../../helper/login";
import MyCollect from '../../component/MyCollect'
import AccordionHeader from '../../../../components2/AccordionHeader'


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
      console.log(this.state.guestData, 'usermenu');
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
       <Menu
       mode="inline"
       style={{background: '#fff', marginTop: '35px', borderRadius: '5px',paddingBottom:'3px'}}
       >
         <SubMenu
          key="sub1"
          title={<span style={subMenuStyle}><Icon type="file-text" style={{color: '#336cfa', fontSize: '17px'}}/><span>我的收藏</span></span>}>
           {
             guestData && guestData.length ?
             <Menu.Item>
               <div><div className='collectionItemtime'>11月23日</div><div className='xian'></div></div>
             </Menu.Item> : null
           }
         
           {
             guestData && guestData[0] && guestData[0].data.map((item, index) => (
             <Menu.Item key={index}>
               <GuestItem
                data={item}
                openPop={openPop}
                closePop={closePop}
                setLoginCb={setLoginCb}
               />
             </Menu.Item>
             ))
           }
          
           {
             guestData && guestData.length ?
             <Menu.Item>
               <div><div className='collectionItemtime'>11月24日</div><div className='xian'></div></div>
             </Menu.Item>
             : null
           }
  
           {
             guestData && guestData[1] && guestData[1].data.map((item, index) => (
             <Menu.Item key={index + 1000}>
               <GuestItem
                data={item}
                openPop={openPop}
                closePop={closePop}
                setLoginCb={setLoginCb}
               />
             </Menu.Item>
             ))
           }
         </SubMenu>
         
         <SubMenu key="sub2" title={<span style={subMenuStyle}><Icon type="file-add" style={{color: '#336cfa', fontSize: '17px'}}/><span>文档收藏</span></span>}>
           {
             fileData && fileData.map((item, index) => (
                <Menu.Item key={index + 20}>
                  <div className='box'>
                    <div className='boximg'>
                      <div ><Icon type="file-pdf" style={{fontSize: '20px', color: '#263c68'}}/></div>
                      <div className='boxiner'>
                        <div className='boxinerTextA'><span>{item.name}</span></div>
                        <div className='boxinerTextB'><span style={{fontSize:"8px"}}>{item.user__name}   {item.user__company}|{item.user__position}</span></div>
                      </div>
                    </div>
                    <div> <a href={item.url}>查看</a></div>
                  </div>
                </Menu.Item>
             ))
           }
         </SubMenu>
       </Menu>
  
       {/*{
         guestData && guestData.length &&
         <MyCollect
           guestData={guestData}
           openPop={openPop}
           closePop={closePop}
           setLoginCb={setLoginCb}
         />
       }*/}
     </div>
    )
  }
}