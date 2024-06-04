const users = [
    { id: 1, name: "Leanne Graham", email: "Sincere@april.biz" },
    { id: 2, name: "Ervin Howell", email: "Shanna@melissa.tv" },
    { id: 3, name: "Clementine Bauch", email: "Nathan@yesenia.net" },
    { id: 4, name: "Patricia Lebsack", email: "Julianne.OConner@kory.org" },
    { id: 5, name: "Chelsey Dietrich", email: "Lucio_Hettinger@annie.ca" },
    { id: 6, name: "Mrs. Dennis Schulist", email: "Karley_Dach@jasper.info" },
    { id: 7, name: "Kurtis Weissnat", email: "Telly.Hoeger@billy.biz" },
    { id: 8, name: "Nicholas Runolfsdottir V", email: "Sherwood@rosamond.me" },
    { id: 9, name: "Glenna Reichert", email: "Chaim_McDermott@dana.io" },
    { id: 10, name: "Clementina DuBuque", email: "Rey.Padberg@karina.biz" }
  ];
  
  const homePage = document.getElementById('home-page');
  const cartPage = document.getElementById('cart-page');
  const homeLink = document.getElementById('home-link');
  const cartLink = document.getElementById('cart-link');
  const userCards = document.getElementById('user-cards');
  const cartCards = document.getElementById('cart-cards');
  
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  function displayUsers() {
    userCards.innerHTML = '';
    users.forEach(user => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <h3>${user.name}</h3>
        <p>${user.email}</p>
        <button onclick="addToCart(${user.id})">Add to Cart</button>
      `;
      userCards.appendChild(card);
    });
  }
  
  function displayCart() {
    cartCards.innerHTML = '';
    cart.forEach(user => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <h3>${user.name}</h3>
        <p>${user.email}</p>
        <button onclick="removeFromCart(${user.id})">Delete</button>
      `;
      cartCards.appendChild(card);
    });
  }
  
  function addToCart(id) {
    const user = users.find(u => u.id === id);
    if (!cart.find(u => u.id === id)) {
      cart.push(user);
      localStorage.setItem('cart', JSON.stringify(cart));
      displayCart();
    }
  }
  
  function removeFromCart(id) {
    cart = cart.filter(user => user.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
  }
  
  function switchPage(page) {
    if (page === 'home') {
      homePage.classList.remove('hidden');
      cartPage.classList.add('hidden');
      homeLink.classList.add('active');
      cartLink.classList.remove('active');
    } else {
      homePage.classList.add('hidden');
      cartPage.classList.remove('hidden');
      homeLink.classList.remove('active');
      cartLink.classList.add('active');
      displayCart();
    }
  }
  
  homeLink.addEventListener('click', () => switchPage('home'));
  cartLink.addEventListener('click', () => switchPage('cart'));
  
  displayUsers();
  displayCart();
  switchPage('home');
  