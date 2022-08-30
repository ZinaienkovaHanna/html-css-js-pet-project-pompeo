(function () {
  const products = [
    {
      id: '1',
      title: 'Decor Plate',
      image: 'img/online-store/pottery-collection-1.png',
      price: 65.0,
    },
    {
      id: '2',
      title: 'Mint Pottery',
      image: 'img/online-store/pottery-collection-2.png',
      price: 75.0,
    },
    {
      id: '3',
      title: 'Set Of Potterys',
      image: 'img/online-store/pottery-collection-3.png',
      price: 125.0,
    },
    {
      id: '4',
      title: 'Orange Ceramic',
      image: 'img/online-store/pottery-collection-4.png',
      price: 55.0,
    },
    {
      id: '5',
      title: 'Dark Bowl',
      image: 'img/online-store/pottery-collection-5.png',
      price: 115.0,
    },
    {
      id: '6',
      title: 'Square Pottery',
      image: 'img/online-store/pottery-collection-6.png',
      price: 75.0,
    },
  ];

  function renderProducts(products) {
    const productContainer = document.querySelector('.online-store__cards');
    productContainer.innerHTML = '';
    for (const product of products) {
      productContainer.innerHTML += `
        <article class="online-store__card">
            <img class="card__image" src="${product.image}" alt="${product.title}" />
            <h4 class="card__title">${product.title}</h4>
            <p class="card__price">$ ${product.price} USD</p>
            <button class="card__button">Add to Cart</button>
        </article>`;
    }
  }

  renderProducts(products);
})();
