const content = document.querySelector('#content')



const shopsWrapper = document.createElement('div')
shopsWrapper.classList.add('shops-wrapper')

content.append(shopsWrapper)


const pageTitle = document.createElement('h1')
pageTitle.textContent = 'Find us'

const shopsList = document.createElement('div')
shopsList.classList.add('shops-list')

shopsWrapper.append(pageTitle, shopsList)


const shopItem1 = document.createElement('div')
shopItem1.classList.add('shop-item')




const shopItem2 = document.createElement('div')
shopItem2.classList.add('shop-item')

const shopItem3 = document.createElement('div')
shopItem3.classList.add('shop-item')

const shopItem4 = document.createElement('div')
shopItem4.classList.add('shop-item')

shopsList.append(shopItem1, shopItem2, shopItem3, shopItem4)










const mapWrapper = document.createElement('div')
mapWrapper.classList.add('map-wrapper')

content.append(mapWrapper)
