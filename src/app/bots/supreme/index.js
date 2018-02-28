import getProductUrls from './getProductUrls'
import addItem from './addItem'
import checkout from './checkout'

const delay = duration => new Promise(resolve => setTimeout(resolve, duration))

async function supremeBot(order, account, showChrome) {
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
