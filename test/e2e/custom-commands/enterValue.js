exports.command = (selector, event, keyCode) => {
  return this.execute((selector, event, keyCode) => {
    let e = document.createEvent('HTMLEvents')
    e.initEvent(event, true, true)
    if (keyCode) {
      e.keyCode = keyCode
    }
    document.querySelector(selector).dispatchEvent(e)
  }, [selector, event, keyCode])
}
