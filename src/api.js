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

  //大会新闻列表
  'getListNews':'/api/gitc/article-',
  //  大会新闻详情页
  'getDetalisNews':'/api/gitc/article',
  // 注册或者登陆
  'user': '/api/gitc/user/',
  // 赞助
  'sponsor': '/api/gitc/sponsor/',
})
