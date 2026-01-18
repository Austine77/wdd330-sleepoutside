const cartList = document.querySelector(".product-list");
const cartTotal = document.getElementById("cart-total");
const emptyMessage = document.getElementById("cart-empty-message");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
  cartList.innerHTML = "";
  cartTotal.textContent = "";
  emptyMessage.textContent = "";

  if (cart.length === 0) {
    emptyMessage.textContent = "Your cart is empty.";
    return;
  }

  let total = 0;

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    const li = document.createElement("li");
    li.classList.add("cart-card", "divider");

    li.innerHTML = `
      <img src="${item.image}" alt="${item.name}" width="120" />
      <div>
        <h3>${item.name}</h3>
        <p>Price: $${item.price.toFixed(2)}</p>
        <p>Quantity: ${item.quantity}</p>
        <p>Item Total: $${itemTotal.toFixed(2)}</p>
        <button class="remove-btn" data-index="${index}">
          Remove
        </button>
      </div>
    `;

    cartList.appendChild(li);
  });

  cartTotal.textContent = `Cart Total: $${total.toFixed(2)}`;
}

cartList.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-btn")) {
    const index = e.target.dataset.index;
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  }
});

renderCart();
