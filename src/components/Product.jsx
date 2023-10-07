import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";
import "./Product.css"; // Import your CSS file

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to Cart");
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from Cart");
  };

  return (
    <div className="product-container">
      <div>
        <p className="product-title">{post.title}</p>
      </div>
      <div>
        <p className="product-description">
          {post.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </div>
      <div className="product-image-container">
        <img src={post.image} alt={post.title} className="product-image" />
      </div>
      <div className="flex justify-between gap-12 items-center w-full mt-5">
        <div>
          <p className="product-price">${post.price}</p>
        </div>
        {cart.some((p) => p.id === post.id) ? (
          <button
            className="remove-from-cart-button"
            onClick={removeFromCart}
          >
            Remove Item
          </button>
        ) : (
          <button className="add-to-cart-button" onClick={addToCart}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
