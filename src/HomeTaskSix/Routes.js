import { Container, Header, Menu } from "semantic-ui-react";
import { BrowserRouter as Router, NavLink, Route, Switch } from "react-router-dom";
import React, { useEffect } from "react";
import NotFoundPage from "../dz4/blog-v2/containers/404";
import Products from "./containers/Products";
import Cart from "./containers/Cart";
import CartIcon from "./components/CartIcon";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./redux/actions/products";

export default function Routes() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <Container>
      <Router>
        <Header>
          <NavLink to='/' activeClassName='active-nav'>Shop</NavLink>
        </Header>
        <Menu>
          <NavLink to='/' exact className='item' activeClassName='active-nav'>Products</NavLink>
          <NavLink to='/cart' className='item' activeClassName='active-nav'>
            <CartIcon />
          </NavLink>
        </Menu>
        <Switch>
          <Route path='/' exact component={Products} />
          <Route path='/cart' component={Cart} />
          <Route path='*' component={NotFoundPage} />
        </Switch>
      </Router>
    </Container>
  )
}
