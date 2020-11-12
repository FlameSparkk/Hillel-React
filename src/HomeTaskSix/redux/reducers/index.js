import cartReducer from '../reducers/cart';
import productsReducer from '../reducers/products'
import { combineReducers } from 'redux';

export default combineReducers({
  cart: cartReducer,
  products: productsReducer
})

