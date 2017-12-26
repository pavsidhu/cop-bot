async function checkout(browser, account) {
  const page = await browser.newPage()

  let attempts = 0

  try {
    await page.goto('https://www.supremenewyork.com/checkout', {
      waitUntil: 'domcontentloaded'
    })

    attempts += 1
  } catch (e) {
    if (attempts > 10) throw new Error()
    await page.reload()
  }

  // Set personal information
  await page.type('#order_billing_name', account.name)
  await page.type('#order_email', account.email)
  await page.type('#order_tel', account.phone)
  await page.type('.order_billing_address input', account.addressOne)
  await page.type('.order_billing_address_2 input', account.addressTwo)
  await page.type('.order_billing_address_3 input', account.addressThree || '')
  await page.type('#order_billing_city', account.city)
  await console.log(1)
  await console.log(account)
  await console.log(2)
  await page.type('#order_billing_zip', account.postCode)
  await page.select('#order_billing_country', account.country)

  // Set debit card information
  await page.select('#credit_card_type', account.cardType)

  // Supreme jumbles the card number unless I set the value directly
  const cardNumber = account.cardNumber.replace(/(.{4})/g, '$1 ').trim()
  await page.evaluate(number => {
    document.querySelector('.credit_card_number input').value = number
  }, cardNumber)

  await page.select('#credit_card_month', account.cardExpiryMonth)
  await page.select('#credit_card_year', account.cardExpiryYear)
  await page.type('#vval', account.cardCvv)

  // Accept terms
  await page.click('#order_terms')

  // Remove reCaptcha
  await page.$eval('.g-recaptcha', e => e.remove())

  // Submit payment
  await page.click('input[name=commit]')

  return true
}

export default checkout
