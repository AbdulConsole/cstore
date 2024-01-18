let iconCart = document.querySelector('.icon-cart');
let body = document.querySelector('body');
let closeCart = document.querySelector('.close');
let btn_addCart = document.querySelector('.addCart');
let productContainer = document.querySelector('#container');
let listCart = document.querySelector('.listCart');
let counter = document.querySelector('.cart span')

let listProducts = [];
let carts = [];



iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})
closeCart.addEventListener('click', () => {
    body.classList.remove('showCart');
})

// addCart.addEventListener('click', () => {
//     console.log(1);
// })
productContainer.addEventListener('click', (event) => {
    let positionClick = event.target;
    if (positionClick.classList.contains('addCart')) {
        let product_id = positionClick.parentElement.parentElement.parentElement.dataset.id;
        addToCart(product_id);
    }
})


const initApp = () => {
    //get data from json file
    fetch('products.json')
    .then(response => response.json())
    .then(data => {
        listProducts = data;
        displayProduct();
    })
}

initApp();











// A function to create html element for each products
function createProductElement(product) {
    const productBox  = document.createElement("div");
    productBox.className = "product-box";
    productBox.dataset.id = product.id;
    productBox.innerHTML = `
        <div class="card">
            <h1>${product.name}</h1>
            <img src="${product.image}" alt="${product.name}">
            <div class="row">
                <h2>₦${product.price}</h2>
                <button class="addCart" >Add to cart</button>
            </div>
        </div>
    `;

    return productBox;
}
// A function to fetch the createProductEleent function and display it
function displayProduct() {
    // Loop through all products object
    for (const productId in listProducts) {
        if (listProducts.hasOwnProperty(productId)) {
            const productElement = createProductElement(listProducts[productId]);
            productContainer.appendChild(productElement);
        }
    }
}
// A function to display Carted products 
function displayCart() {
    listCart.innerHTML = '';
    if(carts.length > 0) {
        carts.forEach(cart => {
            let newCart = document.createElement('div');
            newCart.classList.add('item');
            let positionProduct = listProducts.findIndex((value) => value.id == cart.product_id);
            let info = listProducts[positionProduct];
            newCart.innerHTML = `
                <div class="image">
                    <img src="${info.image}" alt="${info.name}">
                </div>
                <div class="name">
                ${info.name}
                </div>
                <div class="totalPrice">${info.price}</div>
                <div class="quantity">
                    <span class="minus"><</span>
                    <span>${cart.quantity}</span>
                    <span class="plus">></span>
                </div>
            `;
            listCart.appendChild(newCart);
        })
    }
}
// A function to add product to cart
function addToCart(product_id) {
    console.log(`Product added to cart with ID: ${product_id}`);
    // alert(product_id);
    let positionThisProductInCart = carts.findIndex((value) => value.product_id == product_id);
    if (carts.length <= 0) {
        
        carts = [{
            product_id: product_id,
            quantity: 1
        }]
    } else if (positionThisProductInCart < 0) {
        carts.push({
            product_id: product_id,
            quantity: 1
        })
    } else {
        carts[positionThisProductInCart].quantity += 1;
    }
    // console.log(carts);
    displayCart();
}
