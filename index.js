// document.addEventListener('DOMContentLoaded', function(event){
const myCart = []

const itemData = [
  { name: 'Penne Rigatta',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkDtIE2ZlT-XAnqWLFhhq9Zb7boPQxvHlRR_Wfv3TkjiWdxyQC',
    description: 'Delicious Penne, veg and meat',
    type: 'entree',
    price: '10.50',
    icon1: true,
    icon2: true,
    icon3: true,
    icon4: false,
  },
  { name: 'Truffle Pasta',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMXBDjGURLnAiYoZ99_0plsyIKIJd2YCRvPHjVlPauPytoaG5Q1Q',
    description: 'Pasta with truffles',
    type: 'entree',
    price: '15.50',
    icon1: false,
    icon2: true,
    icon3: false,
    icon4: true,
  },
  { name: 'Steak Tips',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyupMobW6mp9DTxSxqC6QDviYUA4pWOcUb9u-m3bDpnYmDiP4D',
    description: 'good steak',
    type: 'side',
    price: '7.50',
    icon1: true,
    icon2: false,
    icon3: false,
    icon4: true,
  },
  { name: 'Chicken with Citrus',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO2wF9wpA2hNSqTr_7OTNnVzf3wOM4tlDjaPpoAeJ9GI7LMSeucA',
    description: 'slimy chicken boiiiii',
    type: 'entree',
    price:'3.00',
    icon1: true,
    icon2: false,
    icon3: false,
    icon4: true,
  },
  { name: 'Chinese noodles',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5ZQ981lVKqrZTAW1R4mjXEOJ5YJ5YwIlpEPbBIYTVr1Kp3pIt1g',
    description: 'tasty',
    type: 'side',
    price: '13.25',
    icon1: true,
    icon2: false,
    icon3: false,
    icon4: false,
  },
  { name:'Chinese dumplings',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx9L-TJT6QHPE3JKQrxMymf52WP6lxW-EkUcWOULo1mn_L0ppCQA',
    description:'sweet and nutty',
    type: 'salad',
    price:'8.00',
    icon1: false,
    icon2: false,
    icon3: true,
    icon4: true,
  },
  { name:'shrimp bangaroos',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3w1zibq6O4vt5_B_-PEmk8KdGh_5YmGrQzXc7k5MUvkl4hRO1gA',
    description:'crunchy, savory, bangaroo',
    type: 'entree',
    price:'8.50',
    icon1: false,
    icon2: false,
    icon3: true,
    icon4: false,
  },
  { name:'Chocolate Cake',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMVo-OeRcXXk-d2F7ymofbRMHBJzrXx8izKbva15aWR0l9Sf1g7A',
    description:'death to all',
    type: 'dessert',
    price:'5.00',
    icon1: true,
    icon2:false,
    icon3:true,
    icon4:false,
  },
  { name:'Good ol doggys',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAW-IgX4Nhnxkd6Ab2ydxwySw0Xb2PMNsK86HC-q0Kty9SqCkc',
    description:'nothing left',
    type: 'appetizer',
    price:'5.00',
    icon1:false,
    icon2:true,
    icon3:false,
    icon4:true,
  },
  { name:'Sushi',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxUromC9Zu94XcgzZUQhGlMuScWxAVyUc3F6xgmj7O9FEgdcVjwA',
    description:'gonna get a gut disease',
    type: 'entree',
    price:'5.00',
    icon1:true,
    icon2:true,
    icon3:false,
    icon4:false,
  },
  { name:'Shrimp and Rice',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC7LZkkhQJubdBgpa5-nRasf2yGVeXxRl0hqmaoYHxkhmhi5Br',
    description:'little bois swimmin in my stomach',
    type: 'dessert',
    price:'5.00',
    icon1:false,
    icon2:false,
    icon3:true,
    icon4:true,
  },
  { name:'Pizzen',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFWX5kL5VeRcZK9XzI7Br0X-mHUDCyT0238m9tQtELIUjDr5Sj',
    description:'Favorite round food',
    type: 'entree',
    price:'5.00',
    icon1:true,
    icon2:false,
    icon3:true,
    icon4:false,
  },
  { name:'Sushi Platter',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyWXP0l8J7d_NcfNl0TvBe3GRF3OOjYE14eyYZ-HELzRIcWgEijA',
    description:'Aint no party like a salmonela party',
    type: 'appetizer',
    price:'5.00',
    icon1:false,
    icon2:false,
    icon3:true,
    icon4:true,
  },
  { name:'Avalanche of Tomatos',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2n4kICsIhwozCmxx_L4WJuxF0EOrQJ5CkqjGEn7BhOYSlF04P',
    description:'good luck',
    type: 'dessert',
    price:'5.00',
    icon1:true,
    icon2: false,
    icon3:true,
    icon4:false,
  },
  { name:'Stacked food',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV_lAvZJF2jXxrueZyF7ac5ENnonh_5xg59m9hJ3jZempvNQI5',
    description:'payin extra for a tower',
    type: 'appetizer',
    price:'5.00',
    icon1: false,
    icon2:true,
    icon3:true,
    icon4: false,
  },
]




  const menuContainer = document.querySelector('.menu-container')
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
  const order = document.querySelector('.order')
  // toggle order div
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
  function addIconCont() {
    const iconCont = document.createElement('div')
    iconCont.style.display = 'flex'
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
    img.classList.add('img-fluid')
  }
  const = document.querySelector('.order')
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

  const uniqueItem = itemData.map(ele => {
    const div = document.createElement('div')
    div.appendChild(createVeil())
    const iconHolder = addIconCont()
    div.classList.add('menuItem')
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
      div.firstChild.classList.add('hide')
    })
    flameButton.addEventListener("click", function(event){
      if (ele.icon1 !== true ) {
        div.firstChild.classList.remove('hide')
      }
    })
    veganButton.addEventListener("click", function(event){
      if (ele.icon2 !== true ) {
        div.firstChild.classList.remove('hide')
      }
    })
    vegButton.addEventListener("click", function(event){
      if (ele.icon3 !== true ) {
        div.firstChild.classList.remove('hide')
      }
    })
    gfButton.addEventListener("click", function(event){
      if (ele.icon4 !== true ) {
        div.firstChild.classList.remove('hide')
      }
    })
    entreeButton.addEventListener('click', function(){
      if (ele.type !== 'entree') {
        div.firstChild.classList.remove('hide')
      }
    })
    appButton.addEventListener('click', function(){
      if (ele.type !== 'app') {
        div.firstChild.classList.remove('hide')
      }
    })
    dessertButton.addEventListener('click', function(){
      if (ele.type !== 'dessert') {
        div.firstChild.classList.remove('hide')
      }
    })
    saladButton.addEventListener('click', function(){
      if (ele.type !== 'salad') {
        div.firstChild.classList.remove('hide')
      }
    })
    sideButton.addEventListener('click', function(){
      if (ele.type !== 'side') {
        div.firstChild.classList.remove('hide')
      }
    })
    // div.addEventListener('click', function(event){
    //
    // })
    div.addEventListener('dblclick', function(event){
      //add to array
      myCart.push({name:ele.name, price:ele.price})
      // empty orderSection
      orderSection.innerHTML = ''
      // rerender orderSection
      orderSection.append(renderCart(myCart))
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
  console.log(subTotal)
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



// })
