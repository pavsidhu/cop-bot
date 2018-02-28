// Check if the item is sold out
if (document.querySelector('form .sold-out')) false
else {
  // Select size if it's an option
  if (document.querySelector('#size')) {
    document.querySelectorAll('#size option').forEach((size, index) => {
      if (orderSize === '' || (orderSize === null && index === 0))
        document.querySelector('#size').value = orderSize

      if (size.innerHTML.toLowerCase() === orderSize.toLowerCase())
        document.querySelector('#size').value = size.value
    })
  }

  // Add to cart
  $('form.add input[name=commit]').click()

  true
}
