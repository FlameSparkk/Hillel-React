import { addProductToCart, removeProductFormCart } from '../actions/cart'

export const cartLocalStorage = store => next => action => {

  if ([addProductToCart.type, removeProductFormCart.type].includes(action.type)) {
    next(action);
    const nextState = store.getState();
    try {
      localStorage.setItem('products', JSON.stringify(nextState.cart));
    } catch (e) {
      console.log('ERROR SAVING STATE')
    }
    return;
  }
  return next(action);
};
