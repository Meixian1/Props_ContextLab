import React, { useContext } from "react";
import { ProductContext } from "../ProductContext";

const ProductDisplay = () => {
  const { products } = useContext(ProductContext);

  const handleProductClick = (id) => {
    // Handle product click logic
  };

  return (
    <div>
      {products.map((product) => (
        <div key={product.id} onClick={() => handleProductClick(product.id)}>
          {product.name}
        </div>
      ))}
    </div>
  );
};

export default ProductDisplay;
