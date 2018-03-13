// Make payment button bigger
$('#pay *:not(.checkout)').css({ display: 'none' })
$('#pay .checkout').css({ width: '100%', margin: '0' })
$('#cart-footer').css({ padding: '0' })

// Remove reCaptcha
if (!reCaptcha) document.querySelector('.g-recaptcha').remove()

// Set personal information
$('#order_billing_name').val(account.name)
$('#order_email').val(account.email)
$('#order_tel').val(account.phone)
$('.order_billing_address input').val(account.addressOne)
$('.order_billing_address_2 input').val(account.addressTwo)
$('.order_billing_address_3 input').val(account.addressThree || '')
$('#order_billing_city').val(account.city)
$('#order_billing_zip').val(account.postCode)
$('#order_billing_country').val(account.country)

// Set debit card information
$('#credit_card_type').val(account.cardType)
$('.credit_card_number input').val(account.cardNumber)
$('#credit_card_month').val(account.cardExpiryMonth)
$('#credit_card_year').val(account.cardExpiryYear)

// Accept terms
$('input[name="order[terms]"]').attr('value', '1')
$('.icheckbox_minimal').addClass('checked')

$('#vval').focus()

true
