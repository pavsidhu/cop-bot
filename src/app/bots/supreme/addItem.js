import 'chrome-extension-async'

async function addItem(url, orderSize) {
  const tab = await chrome.tabs.create({ url })

  await chrome.tabs.executeScript(tab.id, {
    code: `var orderSize = "${orderSize}"`
  })

  await chrome.tabs.executeScript(tab.id, {
    file: 'pageScripts/jQuery.js'
  })

  const result = await chrome.tabs.executeScript(tab.id, {
    file: 'pageScripts/addItem.js'
  })

  return result[0]
}

export default addItem
