let iconCart = document.querySelector('.icon-cart');
let body = document.querySelector('body');
let closeCart = document.querySelector('.close');
// let addCart = document.querySelector('.addCart');
const productContainer = document.querySelector("#container");
let listProducts = [];



iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})
closeCart.addEventListener('click', () => {
    body.classList.remove('showCart');
})
productContainer.addEventListener('click', (event) => {
    let positionClick = event.target;
    if (positionClick.classList.contains('addCart')) {
        let product_id = positionClick.parentElement.dataset.id;
        alert(product_id);
        alert(parentElement);
        // alert(1);
    }
})


const initApp = () => {
    //get data from json file
    fetch('products.json')
    .then(response => response.json())
    .then(data => {
        listProducts = data;
        // console.log(listProducts);
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
                <h2>&pound;${product.price}</h2>
                <button class="addCart">Add to cart</button>
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
// A function to add product to cart
function addToCart(productId) {
    console.log(`Product added to cart with ID: ${productId}`);
}
