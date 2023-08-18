import React from "react";
import "./styles.css";
import pic from "../../assests/images/olympics.jpg";
import { AiOutlineHeart, AiFillStar } from "react-icons/ai";

const ProductCard = ({ title, author, _id, categoryName, price }) => {
  const specialTag = "Hardcover";
  const originalPrice = 1490;
  const discount = 57;
  const rating = 4.5;
  return (
    <div className="product-card" key={_id}>
      <img className="product-img" src={pic} alt="olympics" />

      <div className="product-title">{title}</div>
      <div className="product-author">{author}</div>
      <div className="product-price-tag">
        <span className="product-discount-price">₹{price}</span>
        <span className="product-original-price">₹{originalPrice}</span>
      </div>
      <span className="product-discount">{discount}%</span>

      <div>
        <span className="product-category">{categoryName}</span>
      </div>
      <div className="product-overhead">
        <span className="special-tag">{specialTag}</span>
        <span className="product-like-btn">
          <AiOutlineHeart />
        </span>
      </div>
      <div className="product-rating">
        {rating} <AiFillStar />
      </div>
      <button className="add-cart-btn">Add to cart</button>
    </div>
  );
};

export default ProductCard;
