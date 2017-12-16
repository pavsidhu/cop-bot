import puppeteer from 'puppeteer'
import getProductUrls from './getProductUrls'
import addItem from './addItem'
import checkout from './checkout'

async function supremeBot(order, account) {
  const browser = await puppeteer.launch({ headless: false })

  const productUrls = await getProductUrls(browser, order)

  const responses = await Promise.all(
    productUrls.map(async url => addItem(browser, url, order.size)),
  )

  if (await responses.includes(true)) {
    return checkout(browser, account)
  }
  return false
}

export default supremeBot

// supremeBot(
//   {
//     keywords: ['shearling'],
//     color: 'Black',
//     size: 'Large',
//     category: 'Jackets',
//   },
//   {
//     name: 'Pav Sidhu',
//     email: 'pavsidhu@outlook.com',
//     phone: '07429337715',
//     addressOne: '26 Meirwen Drive',
//     addressTwo: 'Culverhouse Cross',
//     addressThree: '',
//     city: 'Cardiff',
//     postCode: 'CF5 4ND',
//     country: 'GB',
//     cardType: 'visa',
//     cardNumber: '4659425746210256',
//     cardExpiryMonth: '0109',
//     cardExpiryYear: '2020',
//     cardCvv: '291',
//   },
// )
