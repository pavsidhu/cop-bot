import puppeteer from 'puppeteer'
import getProductUrls from './getProductUrls'
import addItem from './addItem'
import checkout from './checkout'

async function supremeBot(order, account, showChrome) {
  const browser = await puppeteer.launch({ headless: !showChrome })

  // Search for the item and get the URLs that match
  const productUrls = await getProductUrls(browser, order)

  // Search for the item and get the URLs that match
  const addItemResponses = await Promise.all(
    // Attempt to add each item to the cart
    productUrls.map(async url => addItem(browser, url, order.size))
  )

  if (await addItemResponses.includes(true)) {
    // Checkout order and get success response
    const checkoutResponse = await checkout(browser, account)

    if (!showChrome) {
      await browser.close()
    }

    return checkoutResponse
  }

  await browser.close()

  return false
}

export default supremeBot
