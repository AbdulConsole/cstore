const products = {
    1: {
      name: "Body Oil",
      price: "19.99",
      url: "assets/img/p1.avif"
    },
    2: {
      name: "Organic Cosmetics",
      price: "17.99",
      url: "assets/img/p2.avif"
    },
    3: {
      name: "Elsa Onitment",
      price: "14.99",
      url: "assets/img/p3.avif"
    },
    4: {
      name: "ILCE-7M2",
      price: "17.99",
      url: "assets/img/p4.avif"
    },
    5: {
      name: "Cocooil",
      price: "12.0",
      url: "assets/img/p5.avif"
    },
    6: {
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

// Call the display function here
window.onload = displayProduct();