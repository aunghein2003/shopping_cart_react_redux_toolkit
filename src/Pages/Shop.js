import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchShopItems,
  getDefaultInitialState,
} from '../redux/shopItemsSlice';
import { deleteCart } from '../redux/userSlice';
import ShopCard from './ShopCard';
import './shop.css';

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
  }, []);

  return data.loading ? (
    <h1>Loading ...</h1>
  ) : data.error ? (
    <h1>{data.error}</h1>
  ) : (
    <>
      <div className='cart__section'>
        <div>
          <img src='https://img.icons8.com/external-icongeek26-outline-icongeek26/64/000000/external-cart-user-interface-icongeek26-outline-icongeek26.png' />
          <span>Item : {cart.item}</span>
          <span>Total : {cart.price}$</span>
          <img
            onClick={deleteCartHandler}
            className='delete__cart'
            src='https://img.icons8.com/carbon-copy/100/000000/filled-trash.png'
          />
        </div>
      </div>
      <div className='shop__cart'>
        {data.data?.map((products) => (
          <ShopCard products={products} key={products.id} />
        ))}
      </div>
    </>
  );
};

export default Shop;
