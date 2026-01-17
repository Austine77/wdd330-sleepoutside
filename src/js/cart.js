import { getLocalStorage } from "./utils.js";

function renderCart() {
  const cartItems = getLocalStorage("cart") || [];
  const cartList = document.querySelector(".cart-list");

  cartList.innerHTML = "";

  cartItems.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <h3>${item.Name}</h3>
      <p>$${item.FinalPrice}</p>
    `;
    cartList.appendChild(li);
  });
}

renderCart();
