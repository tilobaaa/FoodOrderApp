import { useState } from "react";
import CartProvider from "./store/CartProvider";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {

  const [cartIsShown, setCartIsShown] = useState(false)

  const showCart = ()=>{
    setCartIsShown(true)
  }

  const closeCart = ()=>{
    setCartIsShown(false)
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={closeCart}/>}
      <Header onTouch={showCart}/>
      <Meals />
    </CartProvider>
  );
}

export default App;
