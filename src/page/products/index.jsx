import React from "react";
import { useProduct } from "../../context/productContext";
import ProductListing from "../../component/product/productList";

export const Products = () => {
  const {
    products,
    productsMessage: { loading, error },
    categories,
    categoriesMessage,
  } = useProduct();
  return (
    <div>
      <h1>All Products</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <>{error}</>
      ) : (
        <ProductListing products={products} />
      )}
    </div>
  );
};
