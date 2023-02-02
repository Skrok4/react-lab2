import React from 'react';

import Body from './components/Body';
import Bottom from './components/Bottom';
import Header from './components/Header';
import Menu from './components/Menu';

const App = () => {
  const [products, setProducts] = React.useState([
    { id: 1, name: 'Apple', price: 0.5, category: 'Fruit', imgUrl: 'https://purepng.com/public/uploads/large/purepng.com-fresh-applefoodsweettastyhealthyfruitappleleaf-981524677946vfurf.png', emoji: '🍎' },
    { id: 2, name: 'Banana', price: 0.25, category: 'Fruit', imgUrl: 'https://static.vecteezy.com/system/resources/previews/008/848/350/original/fresh-yellow-banana-fruit-free-png.png', emoji: '🍌' },
    { id: 3, name: 'Carrot', price: 0.75, category: 'Vegetable', imgUrl: 'https://purepng.com/public/uploads/large/purepng.com-carrotscarrotvegetablesfreshdeliciousefoodhealthycarrots-481521740717jmglq.png', emoji: '🥕' },
    { id: 4, name: 'Donut', price: 1.5, category: 'Bakery', imgUrl: 'https://i.ibb.co/6sYg2c0/584fcc806a5ae41a83ddee8c.png', emoji: '🍩' },
    { id: 5, name: 'Egg', price: 0.3, category: 'Dairy', imgUrl: 'https://pngimg.com/uploads/egg/egg_PNG97943.png', emoji: '🥚' },
    { id: 6, name: 'Grapes', price: 0.4, category: 'Fruit', imgUrl: 'https://www.freepnglogos.com/uploads/grapes-png/grapes-dimidwa-12.png', emoji: '🍇' },
    { id: 7, name: 'Tomato', price: 0.6, category: 'Vegetable', imgUrl: 'https://i.ibb.co/2g3QJP7/pngimg-com-tomato-PNG12590.png', emoji: '🍅' },
    { id: 8, name: 'Cake', price: 2.0, category: 'Bakery', imgUrl: 'https://pngimg.com/uploads/cake/cake_PNG13097.png', emoji: '🧁' },
    { id: 9, name: 'Cheese', price: 6.0, category: 'Dairy', imgUrl: 'https://i.pinimg.com/originals/b3/77/8e/b3778ed590bc573ecd266d6b7d92d658.png', emoji: '🧀' },
    { id: 10, name: 'Watermelon', price: 1.5, category: 'Fruit', imgUrl: 'https://i.postimg.cc/PJT1CDdh/pngegg.png', emoji: '🍉' }
  ]);

  const [selectedProducts, setSelectedProducts] = React.useState([]);
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [displayedProducts, setDisplayedProducts] = React.useState(0);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const addToCart = (product) => {
    let updatedSelectedProducts = [...selectedProducts];
    let productIndex = updatedSelectedProducts.findIndex(
      (selectedProduct) => selectedProduct.name === product.name
    );
    if (productIndex === -1) {
      updatedSelectedProducts.push({ ...product, quantity: 1 });
    } else {
      updatedSelectedProducts[productIndex].quantity += 1;
    }
    setSelectedProducts(updatedSelectedProducts);
  };

  const filterProducts = () => {
    if (selectedCategory === 'All') {
      return products;
    }
    return products.filter((product) => product.category === selectedCategory);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="app">
      <Header
        isLoggedIn={isLoggedIn}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
      />
      <Menu
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
        displayedProducts={displayedProducts}
      />
      <Body
        products={filterProducts()}
        addToCart={addToCart}
        setDisplayedProducts={setDisplayedProducts}
      />
      <Bottom selectedProducts={selectedProducts} />
    </div>
  );
};

export default App;
