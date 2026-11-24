const buttons = document.querySelectorAll('.filter');
const products = document.querySelectorAll('.product');

buttons.forEach(function (button) {
  button.addEventListener('click', function () {
    const category = button.dataset.filter;

    // подсвечиваем нажатую кнопку
    buttons.forEach(function (b) {
      b.classList.remove('active');
    });
    button.classList.add('active');

    // показываем нужные товары, остальные прячем
    products.forEach(function (product) {
      if (category === 'all' || product.dataset.category === category) {
        product.classList.remove('hidden');
      } else {
        product.classList.add('hidden');
      }
    });
  });
});
// Запись на приём
const bookButton = document.getElementById('book-button');
const message = document.getElementById('message');

bookButton.addEventListener('click', function () {
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const service = document.getElementById('service').value;
  const specialist = document.getElementById('specialist').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;

  // проверяем, что всё заполнено
  if (!name || !phone || !service || !specialist || !date || !time) {
    message.textContent = 'Please fill in all fields.';
    message.className = 'error';
    return;
  }

  message.textContent =
    'Thank you, ' + name + '! You are booked: ' + service +
    ' with ' + specialist + ' on ' + date + ' at ' + time + '.';
  message.className = 'success';
});
// Корзина
const cart = [];
const cartCount = document.getElementById('cart-count');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

document.querySelectorAll('.buy').forEach(function (button) {
  button.addEventListener('click', function () {
    const card = button.closest('.product');
    const name = card.querySelector('h3').textContent;
    const priceText = card.querySelector('.price').textContent;
    const price = Number(priceText.replace('€', ''));

    cart.push({ name: name, price: price });
    renderCart();
  });
});

function removeItem(index) {
  cart.splice(index, 1);
  renderCart();
}

function renderCart() {
  cartItems.innerHTML = '';
  let total = 0;

  if (cart.length === 0) {
    cartItems.innerHTML = '<li>Your cart is empty.</li>';
  }

  cart.forEach(function (item, index) {
    total += item.price;

    const li = document.createElement('li');
    li.textContent = item.name + ' — €' + item.price + ' ';

    const removeButton = document.createElement('button');
    removeButton.textContent = '✕';
    removeButton.className = 'remove';
    removeButton.addEventListener('click', function () {
      removeItem(index);
    });

    li.appendChild(removeButton);
    cartItems.appendChild(li);
  });

  cartCount.textContent = cart.length;
  cartTotal.textContent = total.toFixed(2);
}

renderCart();// Корзина
const cart = [];
const cartCount = document.getElementById('cart-count');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

document.querySelectorAll('.buy').forEach(function (button) {
  button.addEventListener('click', function () {
    const card = button.closest('.product');
    const name = card.querySelector('h3').textContent;
    const priceText = card.querySelector('.price').textContent;
    const price = Number(priceText.replace('€', ''));

    cart.push({ name: name, price: price });
    renderCart();
  });
});

function removeItem(index) {
  cart.splice(index, 1);
  renderCart();
}

function renderCart() {
  cartItems.innerHTML = '';
  let total = 0;

  if (cart.length === 0) {
    cartItems.innerHTML = '<li>Your cart is empty.</li>';
  }

  cart.forEach(function (item, index) {
    total += item.price;

    const li = document.createElement('li');
    li.textContent = item.name + ' — €' + item.price + ' ';

    const removeButton = document.createElement('button');
    removeButton.textContent = '✕';
    removeButton.className = 'remove';
    removeButton.addEventListener('click', function () {
      removeItem(index);
    });

    li.appendChild(removeButton);
    cartItems.appendChild(li);
  });

  cartCount.textContent = cart.length;
  cartTotal.textContent = total.toFixed(2);
}

renderCart();