(async function () {
  const response = await fetch('api/online-store-products.json');
  const products = await response.json();

  function renderProducts(products) {
    const productContainer = document.querySelector('.online-store__cards');
    productContainer.innerHTML = '';
    for (const product of products) {
      productContainer.innerHTML += `
        <article class="online-store__card">
            <img class="card__image" src="${product.image}" alt="${product.title}" />
            <h4 class="card__title">${product.title}</h4>
            <p class="card__price">$ ${product.price} USD</p>
            <button class="card__button button">Add to Cart</button>
        </article>`;
    }
  }

  renderProducts(products);
})();
