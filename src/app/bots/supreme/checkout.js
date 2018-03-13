import 'chrome-extension-async'

async function checkout(account, options) {
  const tab = await chrome.tabs.create({
    url: 'https://www.supremenewyork.com/checkout'
  })

  await chrome.tabs.executeScript(tab.id, {
    code: `
      var account = ${JSON.stringify(account)};
      var reCaptcha = ${options.reCaptcha};
    `
  })

  await chrome.tabs.executeScript(tab.id, {
    file: 'pageScripts/jQuery.js'
  })

  const result = await chrome.tabs.executeScript(tab.id, {
    file: 'pageScripts/checkout.js'
  })

  return result[0]
}

export default checkout
