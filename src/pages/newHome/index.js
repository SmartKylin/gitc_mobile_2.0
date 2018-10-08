import React from 'react';
import Logo from '../../images2/banner.jpg'
import './index.scss'
import AnAssembly from './componets/AnAssembly'
import Introduction from './componets/introduction'
import Brief from './componets/brief'
import ListMeetings from '../../components2/AllPeople'

import Cooperative from './componets/cooperative'
import MapWJ from './componets/Mapwj/index'
import Footer1 from './componets/ContactUs/index'
import PointDiv from './componets/PointDiv/index'
import MeetingGuide from '../../components2/MeetingGuide'
import NineSquare from '../../components2/NineSquare'

export default class NewHome extends React.Component {

    componentWillMount() {
        // 设置二级页面标题
        document.title = "GITC"
    }

    render() {
        return (
            <div className="NewHomeBox">

                {/*banner ---王杰修改*/}
                <div className="bg">
                    <img src={Logo} alt=""/>
                </div>

                {/*九宫格----库素修改*/}
                <NineSquare/>

                {/*大会简介-----库素修改*/}
                <Introduction/>

                {/*大会亮点-----库素修改*/}
                <AnAssembly/>

                {/*会议结构 --- 修改王杰*/}
                <Brief/>

                {/*主席团  ||  顾问团  --- 王杰修改*/}
                <ListMeetings/>

                {/*合作伙伴 --王杰修改*/}
                <Cooperative/>
                {/*会议地址---王杰修改+++交通信息*/}
                <MeetingGuide/>
                {/*联系我们*/}
                <Footer1/>
                {/*定位组件*/}
                <PointDiv/>
            </div>
        )
    }
}
