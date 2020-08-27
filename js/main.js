let carts = document.querySelectorAll(".add-cart");

let products = [
  {
    name: "Hello Coffee",
    tag: "HelloCoffee",
    price: 980,
    inCart: 0,
  },
  {
    name: "Impresso Espresso",
    tag: "ImpressoEspresso",
    price: 980,
    inCart: 0,
  },
  {
    name: "Cona Coffee",
    tag: "ConaCoffee",
    price: 980,
    inCart: 0,
  },
  {
    name: "Jack Coffee",
    tag: "JackCoffee",
    price: 1080,
    inCart: 0,
  },
];

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    cartNumbers(products[i]);
  });
}

function onLoadCartNumber() {
  let productNumber = localStorage.getItem("cartNumbers");
  if (productNumber) {
    document.querySelector(".cart-count span").textContent = productNumber;
  }
}

//count number items
function cartNumbers(product) {
  let productNumber = localStorage.getItem("cartNumbers");
  productNumber = parseInt(productNumber);
  if (productNumber) {
    localStorage.setItem("cartNumbers", productNumber + 1);
    document.querySelector(".cart-count span").textContent = productNumber + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".cart-count span").textContent = 1;
  }

  setItems(product);
}

//setItems
function setItems(product) {
  let cartItmems = localStorage.getItem("ProductsInCart");
  cartItmems = JSON.parse(cartItmems);

  if (cartItmems != null) {
    if (cartItmems[product.tag] == undefined) {
      cartItmems = {
        ...cartItmems,
        [product.tag]: product,
      };
    }
    cartItmems[product.tag].inCart += 1;
  } else {
    product.inCart = 1;
    cartItmems = {
      [product.tag]: product,
    };
  }
  localStorage.setItem("ProductsInCart", JSON.stringify(cartItmems));
}

//check cart count from localstorage
onLoadCartNumber();
