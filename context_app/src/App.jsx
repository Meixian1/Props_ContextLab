import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import React, { useState } from "react";
import { ProductContextProvider } from "./components/ProductContext";

export function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop', price: 1000, inCart: false },
    { id: 2, name: 'Smartphone', price: 500, inCart: false },
    { id: 3, name: 'Headphones', price: 100, inCart: false },
    { id: 4, name: 'Keyboard', price: 50, inCart: false },
    { id: 5, name: 'Mouse', price: 30, inCart: false }
  ]);

  return (
    <ProductContextProvider products={products}>
      {/* Wrap your app with ProductContextProvider */}
      <div>
        <h1>My Props App</h1>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </ProductContextProvider>) /* Close the ProductContextProvider */; { /* Close the ProductContextProvider */ };
}

export default App