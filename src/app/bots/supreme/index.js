import 'chrome-extension-async'
import getProductUrls from './getProductUrls'
import addItem from './addItem'
import checkout from './checkout'

const delay = duration => new Promise(resolve => setTimeout(resolve, duration))

async function supremeBot(order, account, showChrome) {
  // Get cookies from Supreme
  const cookies = await chrome.cookies.getAll({
    domain: '.supremenewyork.com'
  })

  // Delete them to clear basket to prevent issues
  await cookies.forEach(c =>
    chrome.cookies.remove({
      url: `http://www.supremenewyork.com${c.path}`,
      name: c.name
    })
  )

  // Search for the item and get the URLs that match
  const productUrls = await getProductUrls(order)

  // Search for the item and get the URLs that match
  const addItemResponses = await Promise.all(
    // Attempt to add each item to the cart
    productUrls.map(async url => addItem(url, order.size))
  )

  if (await addItemResponses.includes(true)) {
    // Checkout order and return success response
    await setTimeout(() => checkout(account), 100)
  }

  return false
}

export default supremeBot
