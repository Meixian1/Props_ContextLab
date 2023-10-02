import React, { useContext } from "react";
import { ProductContext } from "../../components/ProductContext";

const Cart = () => {
  const { products } = useContext(ProductContext);

  return (
    <div>
      <h1>Cart Page</h1>
      <div>
        {/* Display products in the cart */}
        {products
          .filter((product) => product.inCart)
          .map((product) => (
            <div key={product.id}>
              {product.name} - ${product.price}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Cart;
