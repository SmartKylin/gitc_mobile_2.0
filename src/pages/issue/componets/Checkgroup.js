import {Checkbox} from 'antd';
import React, {Component} from 'react'
let CheckboxGroup = Checkbox.Group

function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}

const options = [
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
];
export default class extends Component {
    onChange = (e) => {
        console.log(e.target.value)
    }

    render() {
        return (
            <div className="checkgroup">
                {
                    options.map(name => (
                        <Checkbox onChange={(e) => this.onChange(e)}>
                            {name}
                        </Checkbox>
                    ))
                }
            </div>
        )
    }
}