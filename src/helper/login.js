export function authCheck(cb) {
  console.log('authcheck');
  let cookies = document.cookie.split(";")
  let cookiesObj = {}
  cookies.map(item => {
    let key = item.split("=")[0];
    let val = item.split("=")[1];
    cookiesObj[key] = val
  })
  let phone = cookiesObj['phone']
  window.phone = phone
  window.login = !! phone
  cb && cb();
}