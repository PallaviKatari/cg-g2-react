//npm install react-use-cart --force
import { CartProvider } from "react-use-cart";
import Cart from "./Cart";
import Products from "./Products";
import React from "react";

function AddToCart() {
  return (
    <div className="App">
      <CartProvider>
        <Products />
        <Cart />
      </CartProvider>
    </div>
  );
}
export default AddToCart;