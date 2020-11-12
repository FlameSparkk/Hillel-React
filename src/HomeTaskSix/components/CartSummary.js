import React, { useMemo } from 'react';
import { Button, Icon, Label, List } from "semantic-ui-react";

function CartSummary({ cartProducts }) {

  const totalPrice = useMemo(() => {
    return cartProducts.reduce((sum, product) => {
      return sum + (product.price * product.count)
    }, 0);
  }, [cartProducts]);

  return (
    <List.Item className='cart-summary-row'>
      <List.Content floated='right'>
        <Button as='div' labelPosition='right'>
          <Button icon color='green'>
            <Icon name='dollar sign' style={{marginRight: 10}}/>
            Checkout
          </Button>
          <Label as='a' basic pointing='left'>
            {totalPrice}$
          </Label>
        </Button>
      </List.Content>
    </List.Item>
  );
}

export default CartSummary;
