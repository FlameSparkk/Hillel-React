import React from 'react';
import { Button, Icon, Image, List } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { addProductToCart, removeProductFormCart } from "../redux/actions/cart";

function CartListItem({ product }) {
  const dispatch = useDispatch();
  const addMoreProducts = () => dispatch(addProductToCart(product.id));

  const removeProducts = () => product.count === 1
    ? window.confirm('Are you sure you want to remove the product') && dispatch(removeProductFormCart(product.id))
    : dispatch(removeProductFormCart(product.id));

  return (
    <List.Item>
      <List.Content floated='right'>
        <Button icon onClick={addMoreProducts}><Icon name='plus'/></Button>
        <Button icon onClick={removeProducts}><Icon name='minus'/></Button>
      </List.Content>
      <Image avatar src={product.image}/>
      <List.Content>
        {product.title} - <span className='muted'>{product.price}$ x {product.count} = {product.price * product.count}$</span>
      </List.Content>
    </List.Item>
  );
}

export default CartListItem;
