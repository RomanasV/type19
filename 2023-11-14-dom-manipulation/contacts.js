const mainContent = document.querySelector('#content')

const container = createElement('div', 'container')
mainContent.append(container)

const content = createElement('div', 'content')
container.append(content)

const shopsWrapper = createElement('div', 'shops-wrapper')
content.append(shopsWrapper)

const pageTitle = createElement('h1', 'shops-section-title', 'Find us')
const shopsList = createElement('div', 'shops-list')
shopsWrapper.append(pageTitle, shopsList)

const shopItem1 = createShopItem('Parduotuvė 1', '+37045461201', 'info@parduotuve1.lt', 'Vilniaus g. 21, Vilnius', 'https://maps.app.goo.gl/Pw8LYgP1gdq2eU8CA')
const shopItem2 = createShopItem('Parduotuvė 2', '+37045461202', 'info@parduotuve2.lt', 'Vilniaus g. 22, Vilnius', 'https://maps.app.goo.gl/jwD622kJub13MFrG7')
const shopItem3 = createShopItem('Parduotuvė 3', '+37045461203', 'info@parduotuve3.lt', 'Vilniaus g. 23, Vilnius', '#')
const shopItem4 = createShopItem('Parduotuvė 4', '+37045461204', 'info@parduotuve4.lt', 'Vilniaus g. 24, Vilnius', '#')

shopsList.append(shopItem1, shopItem2, shopItem3, shopItem4)

const mapWrapper = createElement('div', 'map-wrapper')
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


function createShopItem(title, phoneNumber, emailAddress, addressText, addressUrl) {
  const shopItem = createElement('div', 'shop-item')
  const shopTitle = createElement('h2', 'shop-title', title)
  const shopAddressList = createElement('ul', 'shop-address-list')

  const phone = createElement('li')
  const phoneLink = createElement('a', '', phoneNumber)
  phoneLink.href = 'tel:' + phoneNumber
  phone.append('Phone: ', phoneLink)

  const email = createElement('li')
  const emailLink = createElement('a', '', emailAddress)
  emailLink.href = 'mailto:' + emailAddress
  email.append('Email: ', emailLink)

  const address = createElement('li')
  const addressLink = createElement('a', '', addressText)
  addressLink.href = addressUrl
  addressLink.target = '_blank'
  address.append('Address: ', addressLink)

  shopAddressList.append(phone, email, address)
  shopItem.append(shopTitle, shopAddressList)

  return shopItem
}

function createElement(type = 'div', className, text) {
  const element = document.createElement(type)

  if (className) {
    element.classList.add(className)
  }

  if (text) {
    element.textContent = text
  }

  return element
}
