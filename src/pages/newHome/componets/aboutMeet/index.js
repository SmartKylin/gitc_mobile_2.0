import React from 'react'
import './aboutMeet.scss'
import Title from "../../../../components2/Title/index";

class AboutMeet extends React.Component{
    render(){
        return(
            <div className='aboutMeet-main'>
                <Title Title='大会简介' EnglishName='ABOUT GITC'/>
                <div className='describe'>
                2018，着眼2018互联网领域的最新技术成果，聚焦未来行业发展趋势。
结合AI、大数据、区块链、AR／VR应用、互联网金融、新零售、平台架构、产业升级等重磅热点，分享互联网核心技术信息及最有料的前瞻性行业观念，让思想和智慧激荡出风暴！
7月5-6日，上海·宝华万豪酒店，和我们一起迎接这场席卷而来的知识盛宴！
                </div>
            </div>
        )
    }
}

export default AboutMeet