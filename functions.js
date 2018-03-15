function createVeil() {
  const veil = document.createElement('div')
  veil.classList.add('veil', 'hide')
  return veil
}
function createName(name) {
  const nameEle = document.createElement('p')
  nameEle.innerHTML = name
  return nameEle
}
function createPrice(price) {
  const priceEle = document.createElement('p')
  priceEle.innerHTML = price
  return priceEle
}
function createType(type) {
  const typeEle = document.createElement('p')
  typeEle.innerHTML = type
  return typeEle
}
function createDesc(desc) {
  const descEle = document.createElement('p')
  descEle.innerHTML = desc
  return descEle
}
function addIconCont() {
  const iconCont = document.createElement('div')
  iconCont.style.display = 'flex'
  iconCont.style.position = 'absolute'
  iconCont.style.bottom = '0'
  iconCont.style.right = '2.5px'
  return iconCont
}
function addIcon1(icon1) {
  const icon1Ele = document.createElement('div')
  icon1Ele.innerHTML = icon1
  icon1Ele.style.color = '#dc3545'
  return icon1Ele
}
function addIcon2(icon2) {
  const icon2Ele = document.createElement('div')
  icon2Ele.innerHTML = icon2
  icon2Ele.style.color = '#17a2b8'
  return icon2Ele
}
function addIcon3(icon3) {
  const icon3Ele = document.createElement('div')
  icon3Ele.innerHTML = icon3
  icon3Ele.style.color = '#28a745'
  return icon3Ele
}
function addIcon4(icon4) {
  const icon4Ele = document.createElement('div')
  icon4Ele.innerHTML = icon4
  icon4Ele.style.color = '#ffc107'
  return icon4Ele
}
function addImg(imgsrc) {
  const img = document.createElement('img')
  img.setAttribute('src', imgsrc)
  return img
}
function leftButton(){
  const btn = renderLeftButton()
  btn.addEventListener('click',clickBack )
  return btn
}
function rightButton(){
  const btn = renderRightButton()
  btn.addEventListener('click',clickForward )
  return btn
}

function clickBack(event) {
  const menuItemIndex = parseInt(document.querySelector('.current').getAttribute('data-id'))
  descLeft.innerHTML = ''
  const btn = renderLeftButton()
  btn.addEventListener('click', clickBack)
  descLeft.appendChild(btn)
  let counter = 1
  let prev = itemData[menuItemIndex - counter]
  while (prev && prev.hidden) {
    counter += 1
    prev = itemData[menuItemIndex - counter]
  }
  prev.id = menuItemIndex - counter
  descMid.innerHTML = ''
  descMid.appendChild(makeDescribedItem(prev))
}
function renderLeftButton() {
  const descLeftButton = document.createElement('a')
  descLeftButton.classList.add('btn', 'btn-outline-dark', 'full')
  descLeftButton.style.marginTop = '100px'
  const arrow = document.createElement('i')
  arrow.classList.add("fas", "fa-angle-left")
  arrow.style.height = '100%'
  descLeftButton.appendChild(arrow)
  return descLeftButton
}

function clickForward(event) {
  const menuItemIndex = parseInt(document.querySelector('.current').getAttribute('data-id'))
  descRight.innerHTML = ''
  const btn = renderRightButton()
  btn.addEventListener('click', clickForward)
  descRight.appendChild(btn)
  let counter = 1
  let prev = itemData[menuItemIndex + counter]
  while (prev && prev.hidden) {
    counter += 1
    prev = itemData[menuItemIndex + counter]
  }
  prev.id = menuItemIndex + counter
  descMid.innerHTML = ''
  descMid.appendChild(makeDescribedItem(prev))
}
function renderRightButton() {
  const descRightButton = document.createElement('a')
  descRightButton.classList.add('btn', 'btn-outline-dark', 'full')
  descRightButton.style.marginTop = '100px'
  const arrow = document.createElement('i')
  arrow.classList.add("fas", "fa-angle-right")
  arrow.style.height = '100%'
  descRightButton.appendChild(arrow)
  return descRightButton
}
