import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import data from './data';
import { useState } from 'react';
import { faHourglass1 } from '@fortawesome/free-solid-svg-icons';
import Answer from './components/Answer';
function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    if (cartItems.length === 4) {
      return;
    }
    const exist = cartItems.find(x => x.id === product.id);
    if (exist) {
      // setCartItems(cartItems.map(x => x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x));
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const selected = (cartItems) => {
    const index = Math.floor(Math.random() * cartItems.length);
    const randomItem = cartItems[index];
    alert(randomItem.name)
  }
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(cartItems.map((x) => x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x));
    }
  };
  return (
    <div className="App">
      <Header ></Header>
      <div className='cart-for-mobile'><Basket onRemove={onRemove} cartItems={cartItems} selected={selected}></Basket></div>
      <div className='row'>
        <Main onAdd={onAdd} products={products}></Main>
        <div className='cart-for-desktop'>
          <Basket onRemove={onRemove} cartItems={cartItems} selected={selected}></Basket>
        </div>
      </div>
      <Answer></Answer>
    </div>
  );
}

export default App;
