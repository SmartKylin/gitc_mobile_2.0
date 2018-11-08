import React from 'react'
import './index.scss'
import Menu from 'containers/menu'
import {Link} from 'react-router-dom'
import ljbm from './images/ljbm.png'
import wdmp from './images/wdmp.png'
import storage from '../../helper/storage'


export default class Header extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      menuVisible: 'hidden',
      falg:false,
      styleTop:false,
      falgTop:true
    }
  }
  closeMenu = () => {
    this.setState({
      menuVisible: 'hidden'
    })
  }

  gradient =() =>{
    
    this.setState({
      falg: true
    })
  }


  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }


  handleScroll =() =>{
     let scrollTop =  this.getScrollTop();
       if(scrollTop > 0 ){
         this.setState({
           styleTop:true,
         })
       }else {
         this.setState({
           styleTop:false,
         })
       }


  }


   getScrollTop=()=>{
    let scrollTop=0;
    if(document.documentElement&&document.documentElement.scrollTop){
      scrollTop=document.documentElement.scrollTop;
    }else if(document.body){
      scrollTop=document.body.scrollTop;
    }
    return scrollTop;
  }
  
  handleClick = path => {
    let phone = storage.get(storage.PHONE_KEY)
    // console.log(phone);
    
    if (phone) {
      this.props.history.push(path)
    } else {
      this.props.openPop()
      let cb = () => {
        this.props.history.push(path)
      }
      this.props.setLoginCb(cb)
    }
  }
  render(){
    let styleTop = {
      background: 'rgba(0,0,0,0.5)'
    }
    return(
        <div className="HeaderBox">
          <div className="HeaderInner" style={this.state.styleTop?styleTop:{}}>
            <div className="HeaderBoxLogo">
            </div>
            <div className="HeaderBoxGPBox" >
              <a  href={'https://www.bagevent.com/event/1717742'} className={this.state.falg ? 'gradientA': 'gradient'} onClick={this.gradient}><img
                  src={ljbm} alt=""/></a>
              <a className={this.state.falg ? 'gradientA': 'gradient'} href="javascript:" onClick={() => this.handleClick('/ticket')}><img
                  src={wdmp} alt=""/></a>
  
          {/*    <Link  className={this.state.falg ? 'gradientA': 'gradient'}  to={'/ticket'}><a >现场购票</a></Link>
              <a  href={'https://www.bagevent.com/event/768490'} className={this.state.falg ? 'gradientA': 'gradient'} onClick={this.gradient}>我的门票</a>*/}
              <div className="HeaderBoxGPBox-sangang" onClick={() => this.setState({menuVisible: true})}/>
              <Menu
                visibility={this.state.menuVisible}
                closeMenu={this.closeMenu}
                openPop={this.props.openPop}
                history={this.props.history}
                setLoginCb={this.props.setLoginCb}/>
            </div>
          </div>
        </div>
    )
  }
}
