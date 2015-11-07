angular.module('starter.services')

.factory('Shops', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var shops = [
    {
      id: 0,
      name: 'Palau Blaugrana Frankfurts 1',
      location: '',
      description: 'El lloc perfecte per menjar un frankfurt a la mitja part - Porta 1',
      img: 'img/palau.jpg'
    },
    {
      id: 1,
      name: 'Palau Blaugrana Frankfurts 2',
      location: '',
      description: 'El lloc perfecte per menjar un frankfurt a la mitja part - Porta 2',
      img: 'img/palau.jpg'
    },
    {
      id: 2,
      name: 'Zara',
      location: '',
      description: 'Compra tu vestido preferido!',
      img: 'img/zara.png'
    }
  ];

  return {
    all: function() {
      return shops;
    },
    remove: function(chat) {
      shops.splice(shops.indexOf(shop), 1);
    },
    get: function(shopId) {
      for (var i = 0; i < shops.length; i++) {
        if (shops[i].id === parseInt(shopId)) {
          return shops[i];
        }
      }
      return null;
    }
  };
})

.factory('Products', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var products0 = [
    {
      id: 0,
      name: 'Frankfurt',
      price: 3,
      //description: 'El lloc perfecte per menjar un frankfurt a la mitja part - Porta 1',
      img: 'img/frankfurt.jpg'
    },
    {
      id: 1,
      name: 'CocaCola',
      price: 2,
      description: 'El lloc perfecte per menjar un frankfurt a la mitja part - Porta 2',
      img: 'img/cola.jpg'
    },
    {
      id: 2,
      name: 'Estrella Damn',
      price: 2.5,
      //description: 'Compra tu vestido preferido!',
      img: 'img/estrella.png'
    }
  ];

  var products1 = [
    {
      id: 0,
      name: 'Frankfurt',
      price: 3,
      //description: 'El lloc perfecte per menjar un frankfurt a la mitja part - Porta 1',
      img: 'img/frankfurt.jpg'
    },
    {
      id: 1,
      name: 'CocaCola',
      price: 2,
      //description: 'El lloc perfecte per menjar un frankfurt a la mitja part - Porta 2',
      img: 'img/cola.jpg'
    },
    {
      id: 2,
      name: 'Estrella Damn',
      price: 2.5,
      //description: 'Compra tu vestido preferido!',
      img: 'img/estrella.png'
    }
  ];

  var products2 = [
    {
      id: 0,
      name: 'Samarreta Blanca',
      price: 10,
      //description: 'El lloc perfecte per menjar un frankfurt a la mitja part - Porta 1',
      img: 'img/white-shirt.jpg'
    },
    {
      id: 1,
      name: 'Mitjons',
      price: 2,
      //description: 'El lloc perfecte per menjar un frankfurt a la mitja part - Porta 2',
      img: 'img/mitjons.jpg'
    },
    {
      id: 2,
      name: 'Camisa',
      price: 23,
      //description: 'Compra tu vestido preferido!',
      img: 'img/camisa.png'
    }
  ];

  var products = [products0, products1, products2];

  return {
    all: function() {
      return products;
    },
    get: function(shopId) {
      return products[shopId];
    },
    getProduct: function(shopId, prodId) {
      var productList = products[shopId];
      for (var i = 0; i < productList.length; i++) {
        if (productList[i].id === parseInt(prodId)) {
          return productList[i];
        }
      }
      return null;
    }
  };
})

.factory('Cart', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var cart = [];
  var items = 0;

  return {
    all: function() {
      return cart;
    },
    remove: function(product) {
      items--;
      for (var i = cart.length - 1; i >= 0; i--) {
        if (cart[i].name == product.name) {
          if (cart[i].quantity == 1) {
            cart.splice(cart.indexOf(product), 1);
          }
          else {
            cart[i].quantity--;
          }
          return;
        }
      }
    },
    add: function(product) {
      items++;
      for (var i = cart.length - 1; i >= 0; i--) {
        if (cart[i].name == product.name) {
          cart[i].quantity++;
          return;
        }
      }
      product.quantity = 1;
      cart.push(product);
    },
    getItems: function() {
      return items;
    },
    get: function(shopId) {
      for (var i = 0; i < shops.length; i++) {
        if (shops[i].id === parseInt(shopId)) {
          return shops[i];
        }
      }
      return null;
    }
  };
});
