import React from 'react'
import './index.scss'
import Menu from 'containers/menu'
import {Link} from 'react-router-dom'

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


  render(){
    let styleTop = {
      background: 'rgba(0,0,0,0.5)'
    }
    return(
        <div className="HeaderBox">
          <div className="HeaderInner" style={this.state.styleTop?styleTop:{}}>
            <div className="HeaderBoxLogo">
            </div>
            <div className="HeaderBoxGPBox">
              <Link to={'/ticket'}><a  className={this.state.falg ? 'gradientA': 'gradient'} >我的门票</a></Link>
              <a  href={'https://www.bagevent.com/event/768490'} className={this.state.falg ? 'gradientA': 'gradient'} onClick={this.gradient}>现场购票</a>
              <div className="HeaderBoxGPBox-sangang" onClick={() => this.setState({menuVisible: true})}/>
              <Menu visibility={this.state.menuVisible} closeMenu={this.closeMenu} openPop={this.props.openPop} history={this.props.history} setLoginCb={this.props.setLoginCb}/>
            </div>
          </div>
        </div>
    )
  }
}
