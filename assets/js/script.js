const products = {
    1: {
      id: 1,
      name: "Body Oil",
      price: "15.99",
      url: "assets/img/p1.avif"
    },
    2: {
      id: 2,
      name: "Organic Cosmetics",
      price: "17.99",
      url: "assets/img/p2.avif"
    },
    3: {
      id: 3,
      name: "Elsa Ointment",
      price: "14.99",
      url: "assets/img/p3.avif"
    },
    4: {
      id: 4,
      name: "ILCE-7M2",
      price: "11.99",
      url: "assets/img/p4.avif"
    },
    5: {
      id: 5,
      name: "Cocooil",
      price: "12.0",
      url: "assets/img/p5.avif"
    },
    6: {
      id: 6,
      name: "Natural X",
      price: "19.99",
      url: "assets/img/p6.avif"
    }
  };


// A function to create html element for each products
function createProductElement(product) {
    const productBox  = document.createElement("div");
    productBox.className = "product-box";

    productBox.innerHTML = `
        <div class="card">
            <h1>${product.name}</h1>
            <img src="${product.url}" alt="${product.name}">
            <div class="row">
                <h2>&pound;${product.price}</h2>
                <button class="add-to-cart" onclick="addToCart(${product.id})">Add to cart</button>
            </div>
        </div>
    `;

    return productBox;
}

// A function to fetch the createProductEleent function and display it
function displayProduct() {
    const productContainer = document.getElementById("container");

    // Loop through all products object
    for (const productId in products) {
        if (products.hasOwnProperty(productId)) {
            const productElement = createProductElement(products[productId]);
            productContainer.appendChild(productElement);
        }
    }
}

// A function to add product to cart
function addToCart(productId) {
    console.log(`Product added to cart with ID: ${productId}`);
}



// Call the display function here
window.onload = displayProduct;