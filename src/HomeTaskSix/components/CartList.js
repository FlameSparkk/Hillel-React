import React from 'react';
import { List } from "semantic-ui-react";
import CartListItem from './CartListItem';
import CartSummary from "./CartSummary";

function CartList({ cartProducts }) {
  return (
    <List divided verticalAlign='middle' style={{ width: '50%' }} size='huge'>
      {cartProducts.map(product => (
        <CartListItem key={product.id} product={product} />
      ))}
      <CartSummary cartProducts={cartProducts} />
    </List>
  )
}

export default CartList;
