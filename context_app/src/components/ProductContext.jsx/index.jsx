import React, { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop', price: 1000, inCart: false },
    { id: 2, name: 'Smartphone', price: 500, inCart: false },
    { id: 3, name: 'Headphones', price: 100, inCart: false },
    { id: 4, name: 'Keyboard', price: 50, inCart: false },
    { id: 5, name: 'Mouse', price: 30, inCart: false }
  ]);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};
