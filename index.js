// document.addEventListener('DOMContentLoaded', function(event){
// console.log('hiya')
// const describedItem = []

  const header = document.querySelector('.header')
  const headerText = document.createElement('p')
  header.appendChild(headerText)
  headerText.style.fontFamily = "'Rozha One', serif"
  headerText.innerHTML = 'Click once to see Item Description and Double click to add to order!'
  const separate = document.querySelector('.separate')
  const separateText = document.createElement('p')
  separate.appendChild(separateText)
  separateText.style.fontFamily = "'Rozha One', serif"
  separateText.innerHTML = '<i class="fas fa-fire flame"></i> = Spicy,  <i class="fab fa-vuejs vee"></i> = Vegan,  <i class="fas fa-leaf leaf"></i> = Vegetarian,  <i class="fab fa-pagelines wheat"></i> = Gluten Free'


  const menuContainer = document.querySelector('.menu-container')
  const order = document.querySelector('.order')
  const descMid = document.querySelector('.descMid')
  const descLeft = document.querySelector('.descLeft')
  const descRight = document.querySelector('.descRight')
//Column 1 setup and interactivity
  const menuCol1 = document.createElement('div')
  menuContainer.appendChild(menuCol1)
  menuCol1.classList.add('col-1')
// create half-cricle and arrow
  const orderToggle = document.createElement('div')
  menuCol1.appendChild(orderToggle)
  orderToggle.classList.add('right')
  const arrow = document.createElement('i')
  arrow.classList.add("fas", "fa-angle-left")
  orderToggle.appendChild(arrow)
  // toggle order div
  // $('.right').click(function(){
  //   $('.menu-container').toggleClass( 'col-7' )
  //   $('.menu-container').toggleClass( 'col-10' )
  //   console.log($('.right')[0].firstChild)
  //   $('.right')[0].firstChild.toggleClass('fa-angle-left')
  //   $('.right')[0].firstChild.toggleClass('fa-angle-right')
  //   });


  orderToggle.addEventListener('click', function(event){
    const firstChild = event.target.querySelector('.fa-angle-left, .fa-angle-right')
    if(firstChild.classList.contains('fa-angle-left')){
      order.classList.add('hide')
      menuContainer.classList.remove('col-7')
      menuContainer.classList.add('col-10')
      firstChild.classList.remove('fa-angle-left')
      firstChild.classList.add('fa-angle-right')
    }
    else if(firstChild.classList.contains('fa-angle-right')){
      order.classList.remove('hide')
      menuContainer.classList.remove('col-10')
      menuContainer.classList.add('col-7')
      firstChild.classList.remove('fa-angle-right')
      firstChild.classList.add('fa-angle-left')
    }
  })
//Column 2 setup and interactivity
  const menuCol2 = document.createElement('div')
  menuContainer.appendChild(menuCol2)
  menuCol2.classList.add('col-11')

  const orderSection = document.querySelector('.order')
  let subT = 0;
  let tax = 0;
  let totalT = 0;

  const allButton = document.querySelector('.all')

  const flameButton = document.querySelector('.btn-outline-danger')
  const veganButton = document.querySelector('.btn-outline-info')
  const vegButton = document.querySelector('.btn-outline-success')
  const gfButton = document.querySelector('.btn-outline-warning')

  const entreeButton = document.querySelector('.entree')
  const appButton = document.querySelector('.app')
  const dessertButton = document.querySelector('.dessert')
  const saladButton = document.querySelector('.salad')
  const sideButton = document.querySelector('.side')

  const uniqueItem = itemData.map((ele, menuItemIndex) => {
    const div = document.createElement('div')
    div.appendChild(createVeil())
    const iconHolder = addIconCont()
    iconHolder.style.position = 'absolute'
    iconHolder.style.bottom = '0'
    iconHolder.style.right = '2.5px'
    // iconHolder.style.justifyContent = 'right'
    // iconHolder.style.textAlign = 'right'
    div.classList.add('menuItem')
    div.id = `menu-item-${menuItemIndex}`
    div.appendChild(createName(ele.name))
    div.appendChild(createPrice(ele.price))
    div.appendChild(iconHolder)
    if (ele.icon1 === true) {
      iconHolder.appendChild(addIcon1('<i class="fas fa-fire flame"></i>'))
    }
    if (ele.icon2 === true) {
      iconHolder.appendChild(addIcon2('<i class="fab fa-vuejs vee"></i>'))
    }
    if (ele.icon3 === true) {
      iconHolder.appendChild(addIcon3('<span><i class="fas fa-leaf leaf"></i></span>'))
    }
    if (ele.icon4 === true) {
      iconHolder.appendChild(addIcon4('<i class="fab fa-pagelines wheat"></i>'))
    }
    allButton.addEventListener('click', function(event){
      ele.hidden = false
      div.firstChild.classList.add('hide')
    })
    flameButton.addEventListener("click", function(event){
      ele.hidden = false
      if (ele.icon1 !== true) {
        ele.hidden = true
        div.firstChild.classList.remove('hide')
      }
    })
    veganButton.addEventListener("click", function(event){
      ele.hidden = false
      if (ele.icon2 !== true ) {
        ele.hidden = true
        div.firstChild.classList.remove('hide')
      }
    })
    vegButton.addEventListener("click", function(event){
      ele.hidden = false
      if (ele.icon3 !== true ) {
        ele.hidden = true
        div.firstChild.classList.remove('hide')
      }
    })
    gfButton.addEventListener("click", function(event){
      ele.hidden = false
      if (ele.icon4 !== true ) {
        ele.hidden = true
          div.firstChild.classList.remove('hide')
      }
    })
    entreeButton.addEventListener('click', function(){
      ele.hidden = false
      div.firstChild.classList.add('hide')
      if (ele.type !== 'entree') {
        ele.hidden = true
        div.firstChild.classList.remove('hide')
      }
    })
    appButton.addEventListener('click', function(){
      ele.hidden = false
      div.firstChild.classList.add('hide')
      if (ele.type !== 'appetizer') {
        ele.hidden = true
        div.firstChild.classList.remove('hide')
      }
    })
    dessertButton.addEventListener('click', function(){
      ele.hidden = false
      div.firstChild.classList.add('hide')
      if (ele.type !== 'dessert') {
        ele.hidden = true
        div.firstChild.classList.remove('hide')
      }
    })
    saladButton.addEventListener('click', function(){
      ele.hidden = false
      div.firstChild.classList.add('hide')
      if (ele.type !== 'salad') {
        ele.hidden = true
        div.firstChild.classList.remove('hide')
      }
    })
    sideButton.addEventListener('click', function(){
      ele.hidden = false
      div.firstChild.classList.add('hide')
      if (ele.type !== 'side') {
        ele.hidden = true
        div.firstChild.classList.remove('hide')
      }
    })


    div.addEventListener('dblclick', function(event){
      //add to array
      myCart.push({name:ele.name, price:ele.price})
      // empty orderSection
      orderSection.innerHTML = ''
      // rerender orderSection
      orderSection.append(renderCart(myCart))
    })
    div.addEventListener('click', function(event){
      const element = {id:menuItemIndex, name:ele.name, img: ele.img, desc: ele.desc, type: ele.type, price:ele.price}
      descMid.innerHTML = ''
      descMid.style.textAlign = 'center'
      descMid.style.color = '#e6e6e6'
      descMid.style.paddingTop = '20px'

      descLeft.innerHTML = ''
      descLeft.style.textAlign = 'right'
      descLeft.appendChild(leftButton())

      descRight.innerHTML = ''
      descRight.style.textAlign = 'left'
      descRight.appendChild(rightButton())

      descMid.append(makeDescribedItem(element))

    })


    return div
  })
  flameButton.addEventListener("click", function(event){
    if (flameButton.classList.contains('off')){
      flameButton.classList.add('on')
      flameButton.classList.remove('off')
    } else if (flameButton.classList.contains('on')){
      flameButton.classList.add('off')
      flameButton.classList.remove('on')
    }
  })
  spawnItems()
// row creation
function spawnItems(){
  for (let row = 0; row < 5; row++){
    const menuRow = document.createElement('div')
    menuCol2.appendChild(menuRow)
    menuRow.classList.add('menuRow')
  //item creation
    for (let item = 0; item < 3; item++){
      const menuItem = uniqueItem[(row * 3) + item]
      menuRow.appendChild(menuItem)
    }
  }
}

function renderCart(myCart){
  const cart = document.createElement('div')

  const quantity = Object.values(myCart.reduce((acc, ele) => {
    if(acc.hasOwnProperty(ele.name)){
      acc[ele.name].quantity += 1
    }
    else {
      acc[ele.name] = Object.assign({}, ele, { quantity: 1})
    }
    return acc
  }, {}))


  const cartElements = quantity.map(function(ele){
    const row = document.createElement('div')
    row.classList.add('row')
    const name = document.createElement('div')
    name.classList.add('col-8')
    if (ele.quantity > 1) {
    name.innerHTML = ele.name + " (x" + ele.quantity + ")"
  } else {
    name.innerHTML = ele.name
  }
    row.appendChild(name)
    const price = document.createElement('div')
    price.classList.add('col-4')
    price.innerHTML = ele.price * ele.quantity
    row.appendChild(price)
    return row
  })

  const subTotal = myCart.reduce((acc, ele) => acc + Number(ele.price),0)
  const subRow = document.createElement('div')
    subRow.classList.add('row')
  const subText = document.createElement('div')
    subText.classList.add('col-8')
    subText.innerHTML = 'Subtotal'
    subText.style.textAlign = 'right'
    subRow.appendChild(subText)
  const subNum = document.createElement('div')
    subNum.classList.add('col-4')
    subNum.innerHTML = subTotal
    subRow.appendChild(subNum)
  const taxRow = document.createElement('div')
    taxRow.classList.add('row')
  const taxText = document.createElement('div')
    taxText.classList.add('col-8')
    taxText.innerHTML = 'Tax'
    taxText.style.textAlign = 'right'
    taxRow.appendChild(taxText)
  const taxNum = document.createElement('div')
    taxNum.classList.add('col-4')
    let tax = (subTotal * .08).toFixed(2);
    taxNum.innerHTML = tax
    taxRow.appendChild(taxNum)
  const totalRow = document.createElement('div')
    totalRow.classList.add('row')
  const totalText = document.createElement('div')
    totalText.classList.add('col-8')
    totalText.innerHTML = 'Total'
    totalText.style.textAlign = 'right'
    totalRow.appendChild(totalText)
  const totalNum = document.createElement('div')
    totalNum.classList.add('col-4')
    totalNum.innerHTML = Number(subTotal) + Number(tax)
    totalRow.appendChild(totalNum)


  cartElements.forEach(ele => {
    cart.appendChild(ele)
    cart.appendChild(subRow)
    cart.appendChild(taxRow)
    cart.appendChild(totalRow)
  })

  return cart
}

function makeDescribedItem(item){
  const wideItem = document.createElement('div')
  wideItem.setAttribute('data-id', item.id)
  wideItem.classList.add('current')
  wideItem.style.width = '100%'
  wideItem.appendChild(addImg(item.img))
  wideItem.appendChild(createName(item.name))
  wideItem.appendChild(createPrice(item.price))
  wideItem.appendChild(createType(item.type))
  wideItem.appendChild(createDesc(item.desc))
  if (item.icon1 === true) {
    wideItem.appendChild(addIcon1('<i class="fas fa-fire flame"></i>'))
  }
  if (item.icon2 === true) {
    wideItem.appendChild(addIcon2('<i class="fab fa-vuejs vee"></i>'))
  }
  if (item.icon3 === true) {
    wideItem.appendChild(addIcon3('<i class="fas fa-leaf leaf"></i>'))
  }
  if (item.icon4 === true) {
    wideItem.appendChild(addIcon4('<i class="fab fa-pagelines wheat"></i>'))
  }
  return wideItem
}

// })
