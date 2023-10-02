import ProductsDisplay from "../../components/ProductsDisplay"
import React from "react"

const Products = ({products}) => {
  return (
    <div>
        <h1>This is the Products Page!</h1>
        <ProductsDisplay products={products}/>
    </div>
  )
}

export default Products