const stripBom = s =>
  s.replace(/[^A-Za-z 0-9 .,?""!@#$%^&*()-_=+;:<>/\\|}{[\]`~]*/g, '')

const orderKeywords = order.keywords.map(k => k.toLowerCase())
const orderColor = order.color ? order.color.toLowerCase() : null
const urls = []

const productUrls = document.querySelectorAll('#container article')

productUrls.forEach(product => {
  const nameElement = product.querySelector('h1 .name-link')

  const productName = stripBom(nameElement.innerHTML).toLowerCase()
  const productColor = stripBom(
    product.querySelector('p .name-link').innerHTML
  ).toLowerCase()

  if (orderKeywords.filter(k => productName.includes(k)).length > 0) {
    if (orderColor == null || productColor.includes(orderColor))
      urls.push(nameElement.href)
  }
})

urls
