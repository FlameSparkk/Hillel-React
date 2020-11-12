import React from 'react';
import './CardIcon.css';
import { Icon } from "semantic-ui-react";
import { useSelector } from "react-redux";

function CartIcon() {
  const cart = useSelector(state => state.cart);
  const count = cart.reduce((sum, product) => {
    return sum + (1 * product.count)
  }, 0);
  return (
    <div className='cart-icon'>
      <Icon name='cart' />
      {count > 0 && <span className='badge'>{count}</span> }
    </div>
  );
}

export default CartIcon;
