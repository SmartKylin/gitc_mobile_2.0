/**
 * 集中管理整个应用要用到的所有接口地址：
 *   1. 整个应用用到了哪些接口一目了然
 *   2. 接口地址很可能会发生格式变化，集中起来方便修改
 */

// const prefix = window.__CONFIG__.apiPath
const prefix = 'http://api.thegitc.com'
export default (config => {
  return Object.keys(config).reduce((copy, name) => {
    copy[name] = `${prefix}${config[name]}`
    return copy
  }, {})
})({
  // 发送验证码
  'sendCode': '/api/gitc/code/',

  //大会新闻列表
  'getListNews':'/api/gitc/article-',

  //图片
  'getListImgs':'/api/gitc/img-',

  //  大会新闻详情页
  'getDetalisNews':'/api/gitc/article',
  'popleList':'/api/gitc/person-',
  // 注册或者登陆
  'user': '/api/gitc/user/',
  // 赞助
  'sponsor': '/api/gitc/sponsor/',
  // 调取某页全部人员
  // http://api.thegitc.com/api/gitc/person-4/all/list.json?token=1afb756d16740266efde290917ca1a8e
  'pagepople':'/api/gitc/',

   
   'pople':'/api/gitc/person-',
// 接口地址：http://api.thegitc.com/api/gitc/person-{library_id}/list.json

  //议题提交
   'issue':'/api/gitc/meetissue/',
  // 获取门票列表
  'getTicketList': '/api/gitc/tricket/list/',
  // 获取门票详情
  'getTicketDetail': '/api/gitc/tricket/',
  // 获取个人收藏文档列表
  'getDocumentList': '/api/gitc/file/',
  // 获取个人收藏嘉宾列表
  'getGuestList': '/api/gitc/collect/',
  // 收藏文档
  'collectDocument': '/api/gitc/file/add/',
  // 收藏嘉宾
  'collectGuest': '/api/gitc/collect/add/',
  // 取消收藏文档
  'disCollectDocument': '/api/gitc/file/del/',
  // 取消收藏嘉宾
  'disCollectGuest': '/api/gitc/collect/del/',
  //大会简介
  'getBriefList': '/api/gitc/article-',
  //分会场详情
  'gatMeetingDetails': '/api/gitc/article/beijing/all/',
  //微信群
  'getListPageImgs': '/api/gitc/page/img-'

})

// 人员列表
// http://api.thegitc.com/api/gitc/person-{page_id}
// /list.json?token=1afb756d16740266efde290917ca1a8e