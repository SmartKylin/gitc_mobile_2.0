export function authCheck(cb) {
  let cookies = document.cookie.split(";")
  let cookiesObj = {}
  cookies.map(item => {
    let key = item.split("=")[0];
    let val = item.split("=")[1];
    cookiesObj[key] = val
  })
  console.log(cookiesObj);
  let phone = cookiesObj['iphone']
  window.phone = phone
  window.login = !!phone
  cb && cb();
  return phone
}

export function setIphone(phone) {
  let cookie = document.cookie
  document.cookie = cookie ? cookie + ";phone=" + phone : "phone=" + phone
}