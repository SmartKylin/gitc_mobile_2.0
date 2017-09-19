/**
 * 集中管理整个应用要用到的所有接口地址：
 *   1. 整个应用用到了哪些接口一目了然
 *   2. 接口地址很可能会发生格式变化，集中起来方便修改
 */

// const prefix = window.__CONFIG__.apiPath
const prefix = 'http://120.92.10.182:8000'
export default (config => {
  return Object.keys(config).reduce((copy, name) => {
    copy[name] = `${prefix}${config[name]}`
    return copy
  }, {})
})({
  // 个人中心
  'sendCode': '/api/gitc/user/',
  // 触点统计数据
  'popleList':'/api/gitc/person-'
})




// 人员列表
// http://120.92.10.182:8000/api/gitc/person-{page_id}
// /list.json?token=1afb756d16740266efde290917ca1a8e