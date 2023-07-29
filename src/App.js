import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import HeaderCartButton from "./components/Layout/HeaderCartButton";
import Meals from "./components/Meals/Meals";
import CartContextProvider from "./store/CartContextProvider.js";

function App() {

  const [cartIsVisible, setCartIsVisible] = useState(false);

  return (
    <CartContextProvider>
      <Header onShowCart = {()=>setCartIsVisible(true)}/>
      {cartIsVisible && <Cart onCloseCart = {()=> setCartIsVisible(false)}/>}
      <main>
      <Meals/>
      </main>
    </CartContextProvider>
  );
}

export default App;
