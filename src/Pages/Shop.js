import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchShopItems,
  getDefaultInitialState,
} from "../redux/shopItemsSlice";
import { deleteCart } from "../redux/userSlice";
import ShopCard from "./ShopCard";
import { AiOutlineShoppingCart, AiFillDelete } from "react-icons/ai";
import "./Shop.css";
import LoadingSpinner from "../components/LoadingSpinner";

const Shop = () => {
  const data = useSelector((state) => state.shop);
  const cart = useSelector((state) => state.user.cart);
  const dispatch = useDispatch();

  const deleteCartHandler = () => {
    dispatch(deleteCart());
  };

  useEffect(() => {
    dispatch(fetchShopItems());

    return () => {
      dispatch(getDefaultInitialState());
    };
  }, [dispatch]);

  return data.loading ? (
    <LoadingSpinner />
  ) : data.error ? (
    <h1>{data.error}</h1>
  ) : (
    <>
      <div className="cart__section">
        <div>
          <AiOutlineShoppingCart className="shop_cart_icon" />
          <span>Item : {cart.item}</span>
          <span>Total : {cart.price}$</span>
          <AiFillDelete
            title="Remove Items"
            onClick={deleteCartHandler}
            className="delete_cart_icon"
          />
        </div>
      </div>
      <div className="shop__cart">
        {data.data?.map((products) => (
          <ShopCard products={products} key={products.id} />
        ))}
      </div>
    </>
  );
};

export default Shop;
