const setValue = (selector, value) =>
  (document.querySelector(selector).value = value)

// Remove reCaptcha
document.querySelector('.g-recaptcha').remove()

// Set personal information
setValue('#order_billing_name', account.name)
setValue('#order_email', account.email)
setValue('#order_tel', account.phone)
setValue('.order_billing_address input', account.addressOne)
setValue('.order_billing_address_2 input', account.addressTwo)
setValue('.order_billing_address_3 input', account.addressThree || '')
setValue('#order_billing_city', account.city)
setValue('#order_billing_zip', account.postCode)
setValue('#order_billing_country', account.country)

// Set debit card information
setValue('#credit_card_type', account.cardType)
setValue('.credit_card_number input', account.cardNumber)
setValue('#credit_card_month', account.cardExpiryMonth)
setValue('#credit_card_year', account.cardExpiryYear)
setValue('#vval', account.cardCvv)

$('input[name="order[terms]"]').attr('value', '1')

setTimeout(() => $('input[name=commit]').click(), 1380)

true
