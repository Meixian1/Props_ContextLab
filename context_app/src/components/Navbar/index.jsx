import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../ProductContext";

const Navbar = () => {
  const { products } = useContext(ProductContext);

  return (
    <div>
      <div>Random Product: {products[0].name}</div>
      <Link to="/">Products</Link>
      <Link to="/cart">Cart</Link>
    </div>
  );
};

export default Navbar;
