import React from 'react'
import './index.scss'
import dahuijieshao from './images/introduce.png'
import Title from "../../../../components/Title";
import {getListImgs} from "../../../../services/getListNews";

const titdetail = `GITC全球互联网技术大会将于11月22日-23日在北京国家会议中心盛大召开，以“知者创物”为主题，寓意在互联网领域中，
  这群本着创新精神为核心，以开放协作，通过迭代创新方式推动行业前进的人。是他们赋予了互联网经久不衰的突破潜力以及思考、辨证精神，
  深度挖掘了创新力之于互联网行业的核心内涵和外延边界，并把握住了未来互联网技术的发展、突破方向。`

export default class Introduction extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      introData: null
    }
  }
  componentWillMount () {
    getListImgs(83).then(res => res && res.json())
        .then(data => {
            this.setState({
              introData: data.data,
            })
        })
  }
  render() {
    const {introData} = this.state
    return (
      <div className="IntroductionBox">
        <Title name='大会简介' />
        
          {
            introData && introData.map(v => 
              <dl>
                <dt>
                <img src={v.img} alt=""/>
                </dt>
                <dd>
                  {v.content}
                </dd>
              </dl>)
          }
        
      </div>
    )
  }
}

