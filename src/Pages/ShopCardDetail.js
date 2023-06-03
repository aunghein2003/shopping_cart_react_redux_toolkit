import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchShopItemsDetail,
  getDefaultInitialState,
} from "../redux/shopItemsSlice";
import { addToCart } from "../redux/userSlice";
import "./ShopCardDetail.css";

const ShopCardDetail = () => {
  const { productId } = useParams();
  const product = useSelector((state) => state.shop.productDetail);
  const loading = useSelector((state) => state.shop.loading);
  const error = useSelector((state) => state.shop.error);
  const dispatch = useDispatch();

  const cartHandler = (e) => {
    dispatch(addToCart(product.price));
    e.target.innerHTML = "Added !";
    setTimeout(() => {
      e.target.innerHTML = "Add to cart";
    }, 1000);
  };

  useEffect(() => {
    dispatch(fetchShopItemsDetail(productId));

    return () => {
      dispatch(getDefaultInitialState());
    };
  }, [dispatch, productId]);

  return loading ? (
    <div className="loading_indicator">
      <h1>Loading ...</h1>
    </div>
  ) : error ? (
    <h1>{error}</h1>
  ) : (
    <section>
      <div className="product__image">
        <img src={product.image} alt="product__image" />
      </div>
      <div className="product__details">
        <h2 className="product__title">{product.title}</h2>
        {/* <h4 className="product__description">
          <span>Description :</span> <span>{product?.description}</span>
        </h4>
        <h4 className="product__rating">
          <span>Rating :</span>
          <span>
            {product.rating?.rate} / {product.rating?.count}
          </span>
        </h4>
        <h4 className="product__price">
          <span>Price :</span> <span>{product?.price}$</span>
        </h4> */}
        <table>
          <tr>
            <td>Description : </td>
            <td>{product?.description}</td>
          </tr>
          <tr>
            <td>Rating : </td>
            <td>
              {product.rating?.rate} / {product.rating?.count}
            </td>
          </tr>
          <tr style={{ color: "red" }}>
            <td>Price : </td>
            <td>{product?.price}$</td>
          </tr>
        </table>
        <button className="addToCart" onClick={cartHandler}>
          Add to cart
        </button>
      </div>
    </section>
  );
};

export default ShopCardDetail;
