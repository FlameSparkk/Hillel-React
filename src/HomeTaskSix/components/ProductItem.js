import React from 'react';
import { Button, Card, Image } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../redux/actions/cart";


function ProductItem({product}) {
  const dispatch = useDispatch();
  return (
    <Card>
      <Card.Content>
        <Image
          style={{ marginBottom: 20 }}
          src={product.image}
        />
        <Card.Header>{product.title}</Card.Header>
        <Card.Meta>{product.category}</Card.Meta>
        <Card.Description>
          Price: {product.price}$
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green' onClick={() => dispatch(addProductToCart(product.id))}>
            Buy
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
}

export default ProductItem;
