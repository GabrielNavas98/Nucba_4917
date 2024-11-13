const productsContainer = document.querySelector(".products-container");
const showMoreBtn = document.querySelector(".btn-load");
const categoriesContainer = document.querySelector(".categories");
const categoriesList = document.querySelectorAll(".category");

const cartBtn = document.querySelector(".cart-label");
const cartMenu = document.querySelector(".cart");

const menuBtn = document.querySelector(".menu-label");
const barsMenu = document.querySelector(".navbar-list");

const overlay = document.querySelector(".overlay");

//Clase 2----Carrito
const productsCart = document.querySelector(".cart-container");
const modal = document.querySelector(".add-modal");
const total = document.querySelector(".total");
const btnBuy = document.querySelector(".btn-buy");
const btnDelete = document.querySelector(".btn-delete");
const bubble = document.querySelector(".cart-bubble");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const saveCart = () => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

/*---------------------- Lógica de productos---------------------------- */
const createProductTemplate = (product) => {
  const { id, name, bid, user, cardImg, userImg } = product;
  return `
          <div class="product">
            <img src=${cardImg} alt=${name} />
            <div class="product-info">
              <div class="product-top">
                <h3>${name}</h3>
                <p>Current Bid</p>
              </div>

              <div class="product-mid">
                <div class="product-user">
                  <img src=${userImg} alt="user" />
                  <p>${user}</p>
                </div>
                <span>${bid} eTH</span>
              </div>

              <div class="product-bot">
                <div class="product-offer">
                  <div class="offer-time">
                    <img src="./assets/img/fire.png" alt="" />
                    <p>05:12:07</p>
                  </div>
                  <button
                    class="btn-add"
                    data-id="${id}"
                    data-name="${name}"
                    data-bid="${bid}"
                    data-img="${cardImg}"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div> 
  `;
};

const renderProducts = (productsList) => {
  productsContainer.innerHTML += productsList
    .map(createProductTemplate)
    .join("");
};

/*---------------------- Lógica de "ver más"---------------------------- */

const isLastIndexOf = () => {
  return appState.currenProductIndex === appState.productsLimit - 1;
};

const showMoreProducts = () => {
  appState.currenProductIndex += 1;
  let { products, currenProductIndex } = appState;
  renderProducts(products[currenProductIndex]);
  if (isLastIndexOf()) {
    showMoreBtn.classList.add("hidden");
  }
};

const setShowMoreVisibility = () => {
  if (!appState.activeFilter) {
    showMoreBtn.classList.remove("hidden");
    return;
  }
  showMoreBtn.classList.add("hidden");
};

/*------------------------ Lógica de filtros --------------------------- */

const renderFilteredProducts = () => {
  const filteredProducts = productsData.filter((product) => {
    return product.category === appState.activeFilter;
  });
  renderProducts(filteredProducts);
};

const isInactiveFilterBtn = (element) => {
  return (
    element.classList.contains("category") &&
    !element.classList.contains("active")
  );
};

const changeBtnActiveState = (selectedCategory) => {
  let categories = [...categoriesList];
  categories.forEach((categoryBtn) => {
    if (categoryBtn.dataset.category === selectedCategory) {
      categoryBtn.classList.add("active");
      return;
    }
    categoryBtn.classList.remove("active");
  });
};

const changeFilterState = (btn) => {
  appState.activeFilter = btn.dataset.category;
  changeBtnActiveState(appState.activeFilter);
  setShowMoreVisibility();
};

const applyFilter = ({ target }) => {
  //chequar que sea un boton y no este activo
  if (!isInactiveFilterBtn(target)) return;
  //cambiar el estado del appState
  changeFilterState(target);
  //si hay filtro activo => renderizar los prodcutos
  productsContainer.innerHTML = "";
  if (appState.activeFilter) {
    renderFilteredProducts();
    appState.currenProductIndex = 0;
    return;
  }
  //si no hay filtro activo => renderizar el primer array
  renderProducts(appState.products[0]);
};

/*-------------------------Menu interface--------------------------------*/

const toggleCart = () => {
  cartMenu.classList.toggle("open-cart");
  if (barsMenu.classList.contains("open-menu")) {
    barsMenu.classList.remove("open-menu");
    return;
  }
  overlay.classList.toggle("show-overlay");
};

const toggleMenu = () => {
  barsMenu.classList.toggle("open-menu");
  if (cartMenu.classList.contains("open-cart")) {
    cartMenu.classList.remove("open-cart");
    return;
  }
  overlay.classList.toggle("show-overlay");
};

const closeOnOverlayClick = () => {
  cartMenu.classList.remove("open-cart");
  barsMenu.classList.remove("open-menu");
  overlay.classList.remove("show-overlay");
};

const closeOnScroll = () => {
  if (
    barsMenu.classList.contains("open-menu") ||
    cartMenu.classList.contains("open-cart")
  ) {
    cartMenu.classList.remove("open-cart");
    barsMenu.classList.remove("open-menu");
    overlay.classList.remove("show-overlay");
  }
};

const closeOnClick = (e) => {
  if (e.target.classList.contains("navbar-link")) return;
  barsMenu.classList.remove("open-menu");
  overlay.classList.remove("show-overlay");
};

/*-------------------------Logica del carrito--------------------------------*/

const createCartProductTemplate = (item) => {
  const { name, bid, quantity, img, id } = item;
  return `
    <div class="cart-item">
      <img
        src=${img}
        alt="Nft del carrito"
      />
      <div class="item-info">
        <h3 class="item-title">${name}</h3>
        <p class="item-bid">Current bid</p>
        <span class="item-price">${bid} ETH</span>
      </div>
      <div class="item-handler">
        <span class="quantity-handler down" data-id=${id}>-</span>
        <span class="item-quantity">${quantity}</span>
        <span class="quantity-handler up" data-id=${id}>+</span>
      </div>
    </div>
  `;
};

const renderCart = () => {
  //validar si el carrito esta vacio
  if (!cart.length) {
    productsCart.innerHTML = `<p class="empty-msg">No hay productos en el carrito.</p>`;
    return;
  }
  productsCart.innerHTML = cart.map(createCartProductTemplate).join("");
};

const createProductData = (dataset) => {
  const { id, img, bid, name } = dataset;
  return { id, img, bid, name };
};

const isExistingCartProduct = (productID) => {
  return cart.find((product) => product.id === productID);
};

const addUnitToProduct = (productID) => {
  cart = cart.map((product) => {
    return product.id === productID
      ? { ...product, quantity: product.quantity + 1 }
      : product;
  });
};

const showModalSuccess = (msg) => {
  modal.classList.add("active-modal");
  modal.textContent = msg;

  setTimeout(() => {
    modal.classList.remove("active-modal");
  }, 3000);
};

const createCartProduct = (product) => {
  cart = [...cart, { ...product, quantity: 1 }];
};

const getTotalCart = () => {
  return cart.reduce((acc, value) => {
    return (acc = acc + Number(value.bid) * value.quantity);
  }, 0);
};

const showCartTotal = () => {
  total.innerHTML = `${getTotalCart().toFixed(2)} eTH`;
};

const disabledBtn = (btn) => {
  if (!cart.length) {
    btn.classList.add("disabled");
  } else {
    btn.classList.remove("disabled");
  }
};

const renderCartBubble = () => {
  bubble.textContent = cart.reduce(
    (acc, value) => (acc = acc + value.quantity),
    0
  );
};

const updateCartState = () => {
  //guardar el el ls
  saveCart();
  //renderizar el carrito
  renderCart();
  //mostrar el total
  showCartTotal();
  //chequear botones 'Comprar y vaciar'
  disabledBtn(btnBuy);
  disabledBtn(btnDelete);
  //actualizar bubble
  renderCartBubble();
};

const addProduct = ({ target }) => {
  if (!target.classList.contains("btn-add")) return;
  // traer la data del producto del dataset
  const product = createProductData(target.dataset);
  //Si el producto existe en el carrito
  if (isExistingCartProduct(product.id)) {
    //agregamos una unidad
    addUnitToProduct(product.id);
    //dar feedback
    showModalSuccess(`Agregaste una unidad al producto ${product.name}`);
  } else {
    //Si no existe el prod en el cart
    //crear el product en el cart
    createCartProduct(product);
    //dar feedback
    showModalSuccess("Agreaste un producto al carrito");
  }

  //(actualizar carrito)
  updateCartState();
};

const removeProductFromCart = (productID) => {
  cart = cart.filter((product) => product.id !== productID);
};

const substractProductUnit = (productID) => {
  cart = cart.map((product) => {
    return product.id === productID
      ? { ...product, quantity: product.quantity - 1 }
      : product;
  });
};

const handleMinusQuantity = (productID) => {
  //buscamos el producto en el carrito
  const existingProduct = isExistingCartProduct(productID);

  //verificamos si la cantidad es 1
  if (existingProduct.quantity === 1) {
    //preguntamos si desea eliminar
    if (window.confirm("¿Desea eliminar el producto?")) {
      removeProductFromCart(existingProduct.id);
    }
    return;
  }

  substractProductUnit(existingProduct.id);
};

const handleQuantity = (e) => {
  const { target } = e;
  if (target.classList.contains("up")) {
    addUnitToProduct(target.dataset.id);
  } else if (target.classList.contains("down")) {
    handleMinusQuantity(target.dataset.id);
  }
  updateCartState();
};

const resetCart = () => {
  cart = [];
  updateCartState();
};

const completeBtnAction = (confirmMsg, successMsg) => {
  if (!cart.length) return;
  if (window.confirm(confirmMsg)) {
    resetCart();
    alert(successMsg);
  }
};

const completeBuy = () => {
  completeBtnAction("¿Desea finalizar la compra?", "¡Gracias por su compra!");
};

const deleteCart = () => {
  completeBtnAction("¿Desea vaciar el carrito?", "Carrito vacio!");
};

const init = () => {
  renderProducts(appState.products[0]);
  showMoreBtn.addEventListener("click", showMoreProducts);
  categoriesContainer.addEventListener("click", applyFilter);
  cartBtn.addEventListener("click", toggleCart);
  menuBtn.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", closeOnOverlayClick);
  barsMenu.addEventListener("click", closeOnClick);
  window.addEventListener("scroll", closeOnScroll);

  window.addEventListener("DOMContentLoaded", renderCart);
  window.addEventListener("DOMContentLoaded", showCartTotal);
  productsContainer.addEventListener("click", addProduct);
  productsCart.addEventListener("click", handleQuantity);
  btnBuy.addEventListener("click", completeBuy);
  btnDelete.addEventListener("click", deleteCart);
  disabledBtn(btnBuy);
  disabledBtn(btnDelete);
  renderCartBubble();
};
init();
