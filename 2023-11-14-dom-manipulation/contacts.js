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


const shopItem1 = createShopItem('Parduotuvė 1', '+37045461201', 'info@parduotuve1.lt', 'Vilniaus g. 21, Vilnius', 'https://maps.app.goo.gl/Pw8LYgP1gdq2eU8CA')
const shopItem2 = createShopItem('Parduotuvė 2', '+37045461202', 'info@parduotuve2.lt', 'Vilniaus g. 22, Vilnius', 'https://maps.app.goo.gl/jwD622kJub13MFrG7')
const shopItem3 = createShopItem('Parduotuvė 3', '+37045461203', 'info@parduotuve3.lt', 'Vilniaus g. 23, Vilnius', '#')
const shopItem4 = createShopItem('Parduotuvė 4', '+37045461204', 'info@parduotuve4.lt', 'Vilniaus g. 24, Vilnius', '#')

shopsList.append(shopItem1, shopItem2, shopItem3, shopItem4)

function createShopItem(title, phoneNumber, emailAddress, addressText, addressUrl) {
  const shopItem = document.createElement('div')
  shopItem.classList.add('shop-item')

  const shopTitle = document.createElement('h2')
  shopTitle.classList.add('shop-title')
  shopTitle.textContent = title

  const shopAddressList = document.createElement('ul')
  shopAddressList.classList.add('shop-address-list')



  const phone = document.createElement('li')

  const phoneLink = document.createElement('a')
  phoneLink.textContent = phoneNumber
  phoneLink.href = 'tel:' + phoneNumber

  phone.append('Phone: ', phoneLink)

  shopAddressList.append(phone)



  const email = document.createElement('li')

  const emailLink = document.createElement('a')
  emailLink.textContent = emailAddress
  emailLink.href = 'mailto:' + emailAddress

  email.append('Email: ', emailLink)

  shopAddressList.append(email)



  const address = document.createElement('li')

  const addressLink = document.createElement('a')
  addressLink.textContent = addressText
  addressLink.href = addressUrl
  addressLink.target = '_blank'

  address.append('Address: ', addressLink)

  shopAddressList.append(address)



  shopItem.append(shopTitle, shopAddressList)

  return shopItem
}




















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
