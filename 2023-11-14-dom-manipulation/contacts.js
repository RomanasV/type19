const mainContent = document.querySelector('#content')

const container = document.createElement('div')
container.classList.add('container')
mainContent.append(container)

const content = document.createElement('div')
content.classList.add('content')
container.append(content)

const shopsWrapper = document.createElement('div')
shopsWrapper.classList.add('shops-wrapper')
content.append(shopsWrapper)


const pageTitle = document.createElement('h1')
pageTitle.classList.add('shops-section-title')
pageTitle.textContent = 'Find us'

const shopsList = document.createElement('div')
shopsList.classList.add('shops-list')

shopsWrapper.append(pageTitle, shopsList)


const shopItem1 = document.createElement('div')
shopItem1.classList.add('shop-item')

const shopTitle1 = document.createElement('h2')
shopTitle1.classList.add('shop-title')
shopTitle1.textContent = 'Parduotuve 1'

const shopAddressList1 = document.createElement('ul')
shopAddressList1.classList.add('shop-address-list')

const phone1 = document.createElement('li')
// phone1.textContent = 'Phone: '

const phoneLink1 = document.createElement('a')
phoneLink1.textContent = '+37045431321'
phoneLink1.href = 'tel:+37045431321'

phone1.append('Phone: ', phoneLink1)

shopAddressList1.append(phone1)

const email1 = document.createElement('li')

const emailLink1 = document.createElement('a')
emailLink1.textContent = 'info@parduotuve.lt'
emailLink1.href = 'mailto:info@parduotuve.lt'

email1.append('Email: ', emailLink1)

shopAddressList1.append(email1)

const address1 = document.createElement('li')

const addressLink1 = document.createElement('a')
addressLink1.textContent = 'Vilniaus g. 20, Vilnius'
addressLink1.href = '#'
addressLink1.target = '_blank'

address1.append('Address: ', addressLink1)

shopAddressList1.append(address1)

shopItem1.append(shopTitle1, shopAddressList1)


const shopItem2 = document.createElement('div')
shopItem2.classList.add('shop-item')

const shopTitle2 = document.createElement('h2')
shopTitle2.classList.add('shop-title')
shopTitle2.textContent = 'Parduotuve 2'

const shopAddressList2 = document.createElement('ul')
shopAddressList2.classList.add('shop-address-list')

const phone2 = document.createElement('li')
// phone2.textContent = 'Phone: '

const phoneLink2 = document.createElement('a')
phoneLink2.textContent = '+37045432322'
phoneLink2.href = 'tel:+37045432322'

phone2.append('Phone: ', phoneLink2)

shopAddressList2.append(phone2)

const email2 = document.createElement('li')

const emailLink2 = document.createElement('a')
emailLink2.textContent = 'info@parduotuve2.lt'
emailLink2.href = 'mailto:info@parduotuve.lt'

email2.append('Email: ', emailLink2)

shopAddressList2.append(email2)

const address2 = document.createElement('li')

const addressLink2 = document.createElement('a')
addressLink2.textContent = 'Vilniaus g. 20, Vilnius'
addressLink2.href = '#'
addressLink2.target = '_blank'

address2.append('Address: ', addressLink2)

shopAddressList2.append(address2)

shopItem2.append(shopTitle2, shopAddressList2)


const shopItem3 = document.createElement('div')
shopItem3.classList.add('shop-item')

const shopTitle3 = document.createElement('h3')
shopTitle3.classList.add('shop-title')
shopTitle3.textContent = 'Parduotuve 3'

const shopAddressList3 = document.createElement('ul')
shopAddressList3.classList.add('shop-address-list')

const phone3 = document.createElement('li')
// phone3.textContent = 'Phone: '

const phoneLink3 = document.createElement('a')
phoneLink3.textContent = '+37045433333'
phoneLink3.href = 'tel:+37045433333'

phone3.append('Phone: ', phoneLink3)

shopAddressList3.append(phone3)

const email3 = document.createElement('li')

const emailLink3 = document.createElement('a')
emailLink3.textContent = 'info@parduotuve3.lt'
emailLink3.href = 'mailto:info@parduotuve.lt'

email3.append('Email: ', emailLink3)

shopAddressList3.append(email3)

const address3 = document.createElement('li')

const addressLink3 = document.createElement('a')
addressLink3.textContent = 'Vilniaus g. 30, Vilnius'
addressLink3.href = '#'
addressLink3.target = '_blank'

address3.append('Address: ', addressLink3)

shopAddressList3.append(address3)

shopItem3.append(shopTitle3, shopAddressList3)

const shopItem4 = document.createElement('div')
shopItem4.classList.add('shop-item')

const shopTitle4 = document.createElement('h4')
shopTitle4.classList.add('shop-title')
shopTitle4.textContent = 'Parduotuve 4'

const shopAddressList4 = document.createElement('ul')
shopAddressList4.classList.add('shop-address-list')

const phone4 = document.createElement('li')
// phone4.textContent = 'Phone: '

const phoneLink4 = document.createElement('a')
phoneLink4.textContent = '+47045444444'
phoneLink4.href = 'tel:+47045444444'

phone4.append('Phone: ', phoneLink4)

shopAddressList4.append(phone4)

const email4 = document.createElement('li')

const emailLink4 = document.createElement('a')
emailLink4.textContent = 'info@parduotuve4.lt'
emailLink4.href = 'mailto:info@parduotuve.lt'

email4.append('Email: ', emailLink4)

shopAddressList4.append(email4)

const address4 = document.createElement('li')

const addressLink4 = document.createElement('a')
addressLink4.textContent = 'Vilniaus g. 40, Vilnius'
addressLink4.href = '#'
addressLink4.target = '_blank'

address4.append('Address: ', addressLink4)

shopAddressList4.append(address4)

shopItem4.append(shopTitle4, shopAddressList4)

shopsList.append(shopItem1, shopItem2, shopItem3, shopItem4)

const mapWrapper = document.createElement('div')
mapWrapper.classList.add('map-wrapper')
content.append(mapWrapper)

// mapWrapper.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18343.57087900314!2d23.95217678894304!3d54.921413391696255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e718f6251ea27b%3A0x30ae10233e1119a3!2sDainavos%20sen.%2C%20Kaunas%2C%20Kaunas%20City%20Municipality!5e0!3m2!1sen!2slt!4v1680257621120!5m2!1sen!2slt" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'

const map = document.createElement('iframe')
map.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18343.57087900314!2d23.95217678894304!3d54.921413391696255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e718f6251ea27b%3A0x30ae10233e1119a3!2sDainavos%20sen.%2C%20Kaunas%2C%20Kaunas%20City%20Municipality!5e0!3m2!1sen!2slt!4v1680257621120!5m2!1sen!2slt'
map.width = '600'
map.height = '450'
map.style = 'border:0;'
map.loading = 'lazy'
map.setAttribute('allowfullscreen', '')
map.setAttribute('referrerpolicy', 'no-referrer-when-downgrade')

mapWrapper.append(map)