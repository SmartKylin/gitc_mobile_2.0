import React from 'react'
import {Link} from 'react-router-dom'
import './index.scss'
import dahuiliangdian from './images/大会亮点.png'
import dahuiliangdian2 from './images/大会亮点new.png'
import Title from "../../../../components/Title";
import TimelineItem from 'antd/lib/timeline/TimelineItem';
import {getListImgs} from "../../../../services/getListNews";

const brightdata = [
  {
     img: require(`./images/bright_01.png`),
     tit: '关门垂直峰会',
     content: '一场互联网领域大脑的洗礼'
  }, {
      img: require(`./images/bright_02.png`),
      tit: '新型独角兽',
      content: '成功的企业都是相似的，揭秘互联网领域新星企业家的创业故事'
  }, {
    img: require(`./images/bright_03.png`),
    tit: '颁奖典礼',
    content: '揭晓新一代科技扛旗者行业中榜样的力量'
  }, {
    img: require(`./images/bright_04.png`),
    tit: '互联"网"红',
    content: '此"网"红非彼网红，我们更看重技术'
  }, {
    img: require(`./images/bright_05.png`),
    tit: '黑科技游乐园',
    content: '未来世界的跨纬度体验'
  }, {
    img: require(`./images/bright_06.png`),
    tit: '多云迁移',
    content: '来自速度的比赛'
  }, {
    img: require(`./images/bright_07.png`),
    tit: '宴请晚宴',
    content: '塑造互联网社交重头戏'
  }, {
    img: require(`./images/bright_08.png`),
    tit: '领导力峰会',
    content: '共启愿景,打造互联网行业风向标'
  }
]

export default class AnAssembly extends  React.Component{
  constructor(props){
    super(props)
    this.state = {
      lightData: null
    }
  }
  componentWillMount () {
    getListImgs(84).then(res => res && res.json())
        .then(data => {
            this.setState({
              lightData: data.data,
            })
        })
  }
  render(){
    const {lightData} = this.state
    return(
        <div className="AnAssemblyBox">
          <Title name='大会亮点'/>
          {/* <img src={dahuiliangdian} alt=""/> */}
          {/* <img src={dahuiliangdian2} alt=""/> */}
          <ul>
            {
              lightData && lightData.map(v => 
                <li>
                  <img src={v.img}/>
                  <h3>{v.title}</h3>
                  <p>{v.content}</p>
                </li>)
            }
          </ul>
        </div>
    )
  }

}
