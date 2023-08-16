import React from "react";
import pic from "../../assests/images/olympics.jpg";

const ProductCard = ({ title, author, _id, categoryName, price }) => {
  return (
    <div className="product-card" key={_id}>
      <img className="product-img" src={pic} alt="olympics" />
      <h4>{title}</h4> by {author} in category:
      {categoryName} at $ {price}
    </div>
  );
};

export default ProductCard;
