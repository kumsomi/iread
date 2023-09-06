import React from "react";
import ProductCard from "./productCard";
import "./styles.css";

const productListing = ({ products }) => {
  return (
    <div className="grid-row">
      {products.map((product) => (
        <ProductCard
          key={product._id}
          title={product.title}
          author={product.author}
          _id={product._id}
          categoryName={product.categoryName}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default productListing;
