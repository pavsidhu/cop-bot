async function addItem(browser, url, orderSize) {
  const page = await browser.newPage()

  let attempts = 0

  try {
    await page.goto(url, {
      waitUntil: 'domcontentloaded',
    })

    attempts += 1
  } catch (e) {
    if (attempts > 10) throw new Error('DAMMIT')
    await page.reload()
  }

  // Check if the item is sold out
  if (await page.$('form .sold-out')) {
    await page.close()
    return false
  }

  // Select size if it's an option
  if (await page.$('#size')) {
    await page.$$eval(
      '#size option',
      (sizeOptions, size) => {
        sizeOptions.map(sizeOption => {
          if (sizeOption.innerHTML.toLowerCase() === size) {
            document.querySelector('#size').value = sizeOption.value
          }
        })
      },
      orderSize.toLowerCase(),
    )
  }

  // Add to cart
  await page.click('form.add input[name=commit]')
  return true
}

export default addItem
