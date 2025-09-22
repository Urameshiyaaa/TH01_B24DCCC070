import React, { useState } from 'react';
import Product from './Product';
import Cart from './Cart';
function App() {
  const [cart, setCart] = useState([]);
  const [products] = useState([
    { name: 'Sách - 10000đ', price: 10000 },
    { name: 'Bút - 5000đ', price: 5000 },
    { name: 'Vở - 7000đ', price: 7000 },
  ]);

  const addCart = (product) => {
    setCart([...cart, product]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
        <Product products={products} addCart={addCart} />
        <Cart cart={cart} total={total} />
    </div>
  );
}
export default App;