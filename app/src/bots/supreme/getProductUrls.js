async function getProductUrls(browser, order) {
  const page = await browser.newPage()

  const orderCategory = order.category.toLowerCase()
  const orderKeywords = order.keywords.map(k => k.toLowerCase())
  const orderColor = order.color.toLowerCase()

  let attempts = 0

  try {
    await page.goto(`http://www.supremenewyork.com/shop/all/${orderCategory}`, {
      waitUntil: 'domcontentloaded'
    })

    attempts += 1
  } catch (e) {
    if (attempts > 10) throw new Error('DAMMIT')
    await page.reload()
  }

  const productUrls = await page.$$eval(
    '#container article',
    (products, keywords, color) => {
      const stripBom = s => s.replace(/[^A-Za-z 0-9 .,?""!@#$%^&*()-_=+;:<>/\\|}{[\]`~]*/g, '')

      const urls = []

      products.forEach(product => {
        const nameElement = product.querySelector('h1 .name-link')

        const productName = stripBom(nameElement.innerHTML).toLowerCase()
        const productColor = stripBom(product.querySelector('p .name-link').innerHTML).toLowerCase()

        if (
          keywords.filter(k => productName.includes(k)).length > 0 &&
          productColor.includes(color)
        ) {
          urls.push(nameElement.href)
        }
      })

      return urls
    },
    orderKeywords,
    orderColor
  )

  return productUrls
}

export default getProductUrls
