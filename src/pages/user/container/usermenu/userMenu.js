import React, {Component} from 'react'
import {Menu, Icon} from 'antd'
import 'antd/dist/antd.css'
import './index.scss'

// import DocumentItem from '../../component/DocumentItem'
// import CollectionItem from '../../component/CollectionItem'

// import Guest from '../../component/GuestItem'

const {SubMenu, MenuItemGroup} = Menu

export default class extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let subMenuStyle = {
      marginLeft: '-12px'
    }
    return (
     <div className="user">
       <Menu
       mode="inline"
       style={{background: '#fff', marginTop: '35px', borderRadius: '5px',paddingBottom:'3px'}}
       >
         <SubMenu key="sub1" title={<span style={subMenuStyle}><Icon type="file-text" style={{color: '#336cfa', fontSize: '17px'}}/><span>我的收藏</span></span>}>
           <Menu.Item>
             <div><div className='collectionItemtime'>11月23日</div><div className='xian'></div></div>
           </Menu.Item>
           {
             this.props.userData && this.props.userData.mycollect && this.props.userData.mycollect[0].data && this.props.userData.mycollect[0].data.map((item, index) => (
             <Menu.Item key={index}>
               <div className='box'>
                 <div className='boximg'>
                   <div ><Icon type="file-pdf" style={{fontSize: '20px', color: '#263c68'}}/></div>
                   <div className='boxiner'>
                     <div className='boxinerTextA'><span>{item.stheme}</span></div>
                     <div className='boxinerTextB'><span style={{fontSize:"8px"}}>{item.name}   {item.company}|{item.position}</span></div>
                   </div>
                 </div>
                 <div><span>{item.stime}</span></div>
               </div>
             </Menu.Item>
             ))
           }
           <Menu.Item>
             <div><div className='collectionItemtime'>11月24日</div><div className='xian'></div></div>
           </Menu.Item>
  
           {
             this.props.userData && this.props.userData.mycollect && this.props.userData.mycollect[1].data && this.props.userData.mycollect[1].data.map((item, index) => (
             <Menu.Item key={index + 10}>
               <div className='box'>
                 <div className='boximg'>
                   <div ><Icon type="file-pdf" style={{fontSize: '20px', color: '#263c68'}}/></div>
                   <div className='boxiner'>
                     <div className='boxinerTextA'><span>{item.stheme}</span></div>
                     <div className='boxinerTextB'><span style={{fontSize:"8px"}}>{item.name}  {item.company}|{item.position}</span></div>
                   </div>
                 </div>
                 <div><span>{item.stime}</span></div>
               </div>
             </Menu.Item>
             ))
           }
         </SubMenu>
         
         <SubMenu key="sub2" title={<span style={subMenuStyle}><Icon type="file-add" style={{color: '#336cfa', fontSize: '17px'}}/><span>文档收藏</span></span>}>
           {
             this.props.userData && this.props.userData.myfiles && this.props.userData .myfiles.map((item, index) => (
                <Menu.Item key={index + 20}>
                  <div className='box'>
                    <div className='boximg'>
                      <div ><Icon type="file-pdf" style={{fontSize: '20px', color: '#263c68'}}/></div>
                      <div className='boxiner'>
                        <div className='boxinerTextA'><span>前端开发等领域的技术热点</span></div>
                        <div className='boxinerTextB'><span style={{fontSize:"8px"}}>{item.name}   {item.company}|{item.position}</span></div>
                      </div>
                    </div>
                    <div> <a href={item.url}>查看</a></div>
                  </div>
                </Menu.Item>
             ))
           }
         </SubMenu>
       </Menu>
     </div>
    )
  }
}