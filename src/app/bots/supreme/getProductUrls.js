import 'chrome-extension-async'

async function getProductUrls(order) {
  const category = order.category.toLowerCase()

  const tab = await chrome.tabs.create({
    url: `http://www.supremenewyork.com/shop/all/${category}`
  })

  await chrome.tabs.executeScript(tab.id, {
    code: `var order = ${JSON.stringify(order)}`
  })

  const result = await chrome.tabs.executeScript(tab.id, {
    file: 'pageScripts/getProductUrls.js'
  })

  await chrome.tabs.remove(tab.id)

  return result[0]
}

export default getProductUrls
