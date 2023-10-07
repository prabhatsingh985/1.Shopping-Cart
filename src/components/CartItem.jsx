import React from "react";
import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";
import './CartItem.css'; // Replace 'CartItem.css' with the path to your CSS file

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div className="overall">
      <div className="photo">
        <img src={item.image} alt={item.title} />
      </div>

      <div className="item-details">
        <h1 className="titlehai"> {item.title}</h1>
        <h1 className="descriptionhai"> {item.description}</h1>
        <div>
          <p className="pricehai">${item.price}</p>
          <div className="logohai" onClick={removeFromCart}>
            <FcDeleteDatabase />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
