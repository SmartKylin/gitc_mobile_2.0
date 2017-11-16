import wx from 'weixin-js-sdk'
import ShareLog from '../images2/share-log.png'

export function initWeixinSDK(config) {
  wx.config({
    // 开启调试模式,调用的所有api的返回值会在客户端alert出来，
    // 若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    debug: false,
    // 必填，公众号的唯一标识
    appId: config.appId,
    // 必填，生成签名的时间戳
    timestamp: config.timestamp,
    // 必填，生成签名的随机串
    nonceStr: config.nonceStr,
    // 必填，签名，见附录1
    signature: config.signature,
    // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    jsApiList: [
      'onMenuShareTimeline',
      'onMenuShareAppMessage'
    ],
  })
}

/*export function weixinShare(share) {

}*/

export const weixinShare = share => {
  wx.ready(() => {
    //分享到朋友圈
    wx.onMenuShareTimeline({
      title: share.title, // 分享标题
      link: share.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      // imgUrl: 'https://devs.zhongfl.com/jyw/static/images/logo.png', // 分享图标
      imgUrl: ShareLog,
      success: function () {
        // 用户确认分享后执行的回调函数
 
      },
      cancel: function () {
        // 用户取消分享后执行的回调函数
      }
    })
    // 发送给朋友
    wx.onMenuShareAppMessage({
      title: share.title, // 分享标题
      desc: share.desc, // 分享描述
      link: share.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: ShareLog,
      type: 'link', // 分享类型,music、video或link，不填默认为link
      dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
      success: () => {
        // 用户确认分享后执行的回调函数
      },
      cancel: () => {
        // 用户取消分享后执行的回调函数
      }
    })
  })
}
