async function checkout(browser, account) {
  const page = await browser.newPage()

  const address = encodeURI(
    `${account.name}|${account.addressOne}|${account.addressTwo}|${account.addressThree}|${
      account.city
    }|${account.postCode}|${account.country}|${account.email}|${account.phone}`,
  ).replace('%20', '+')

  await page.setCookie({
    name: 'address',
    value: address,
    domain: 'www.supremenewyork.com',
  })

  let attempts = 0

  try {
    await page.goto('https://www.supremenewyork.com/checkout', {
      waitUntil: 'domcontentloaded',
    })

    attempts += 1
  } catch (e) {
    if (attempts > 10) throw new Error('DAMMIT')
    await page.reload()
  }

  // await page.waitForSelector('#order_billing_name')

  // Set debit card information
  await page.select('#credit_card_type', account.cardType)
  await page.type('.credit_card_number input', account.cardNumber)
  await page.select('#credit_card_month', account.cardExpiryMonth)
  await page.select('#credit_card_year', account.cardExpiryYear)
  await page.type('#vval', account.cardCvv)

  // Accept terms
  await page.click('#order_terms')

  // Remove reCaptcha
  await page.$eval('.g-recaptcha', e => e.remove())

  // Submit payment
  // await page.click('input[name=commit]')

  return true
}

export default checkout
