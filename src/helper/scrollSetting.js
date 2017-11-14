export const forbiddenScroll = () => {
  document.body.style.height = '100%'
  document.documentElement.style.height = '100%'
  document.body.style.overflow = 'hidden'
  document.documentElement.style.overflow = 'hidden'
}


export const allowScroll = top => {
  document.body.style.height = '100%'
  document.documentElement.style.height = '100%'
  document.body.style.overflow = 'visible'
  document.documentElement.style.overflow = 'visible'
  document.documentElement.scrollTop = top
  document.body.scrollTop = top
}

