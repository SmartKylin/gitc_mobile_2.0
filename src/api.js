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
  // 发送验证码
  'sendCode': '/api/gitc/code/',
  // 触点统计数据
  'popleList':'/api/gitc/person-',
  // 注册或者登陆
  'user': '/api/gitc/user/',
  // 赞助
  'sponsor': '/api/gitc/sponsor/',
  // 调取某页全部人员
// http://120.92.10.182:8000/api/gitc/person-4/all/list.json?token=1afb756d16740266efde290917ca1a8e
  'pagepople':'/api/gitc/'
})




// 人员列表
// http://120.92.10.182:8000/api/gitc/person-{page_id}
// /list.json?token=1afb756d16740266efde290917ca1a8e