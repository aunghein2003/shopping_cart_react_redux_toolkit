import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/userSlice';
import './ShopCard.css';

const ShopCard = ({ products }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cardClicking = () => {
    navigate(`product/${products.id}`);
  };
  const cartHandler = (e) => {
    dispatch(addToCart(products.price));
    e.target.innerHTML = 'Added !';
    setTimeout(() => {
      e.target.innerHTML = 'Add to cart';
    }, 1000);
  };

  return (
    <div className='shop__card'>
      <img src={products.image} alt='products__imgae' onClick={cardClicking} />
      <h2 className='shop__price'>${products.price}</h2>
      <button className='addToCart' onClick={cartHandler}>
        Add to cart
      </button>
    </div>
  );
};

export default ShopCard;
