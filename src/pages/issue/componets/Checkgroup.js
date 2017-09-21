import {Checkbox} from 'antd';
import React, {Component} from 'react'
let CheckboxGroup = Checkbox.Group

/*const options = [
    '主会场',
    '运维专场',
    '基础架构专场',
    '大数据专场',
    '互联网金融峰会',
    'IOT峰会',
    '网络安全专场',
    '技术管理&产品专场',
    '移动互联网专场',
    '前端技术专场',
    '质量和测试专场',
    '智慧物流论坛'
];*/
let ary = []
export default class extends Component {
    constructor () {
        super()
        this.state = {
            group: [
                {name: '主会场', checked: false},
                {name: '运维专场', checked: false},
                {name: '基础架构专场', checked: false},
                {name: '大数据专场', checked: false},
                {name: '互联网金融峰会', checked: false},
                {name: 'IOT峰会', checked: false},
                {name: '技术管理&产品专场', checked: false},
                {name: '移动互联网专场', checked: false},
                {name: '前端技术专场', checked: false},
                {name: '质量和测试专场', checked: false},
                {name: '智慧物流论坛', checked: false}
            ]
        }
    }

    changeValue = async (e) => {
        let src = e.target
        await this.setState({
            // group不可直接赋值,但是它的元素是个引用类型,可以直接赋值
            group: this.state.group.map(item => {
                if (item.name == src.name) {
                    item.checked = !(item.checked)
                    if (item.checked) {
                        // 限制checkbox选中最多为2个
                        if (ary.length >= 2) {
                            ary[0].checked = false
                            ary.shift()
                        }
                        ary.push(item)
                    }
                }
                return item
            })
        })
        let nameAry = ary.map(item => item.name)
        console.log(nameAry.join(','));
    }


    render() {
        return (
            <div className="checkgroup">
                {
                    this.state.group.map((item, index) => (
                        <Checkbox checked={item.checked} name={item.name} onChange={this.changeValue} key={index}>
                            {item.name}
                        </Checkbox>
                    ))
                }
            </div>
        )
    }
}