import React from "react";
import "./styles.css";
import pic from "../../assests/images/olympics.jpg";
import { AiOutlineHeart, AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const ProductCard = ({ title, author, _id, categoryName, price }) => {
  const specialTag = "Hardcover";
  const originalPrice = 1490;
  const discount = 57;
  const rating = 4.5;
  const likeHandler = () => {
    console.log("liked product:", title);
  };
  const cartHandler = () => {
    console.log("add to cart:", title);
  };
  return (
    <div key={_id} className=" product-card">
      <div className="card-header">
        <Link to={`/products/${_id}`} className="link">
          <img className="product-img" src={pic} alt="olympics" />
        </Link>
        <div className="product-rating">
          {rating} <AiFillStar />
        </div>
        <div className="product-overhead">
          <span className="special-tag">{specialTag}</span>
          <span className="product-like-btn" onClick={likeHandler}>
            <AiOutlineHeart />
          </span>
        </div>
      </div>
      <div className="card-body">
        <Link to={`/products/${_id}`} className="link">
          <div className="product-title">{title}</div>
        </Link>
        <div className="product-author">{author}</div>
        <div className="product-price-tag">
          <span className="product-discount-price">₹{price}</span>
          <span className="product-discount">SAVE {discount}%</span>
          <span className="product-original-price">₹{originalPrice}</span>
        </div>

        <div>
          <span className="product-category">{categoryName}</span>
        </div>

        <button className="add-cart-btn" onClick={cartHandler}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
