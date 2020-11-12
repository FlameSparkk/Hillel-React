import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import rootReducer from './reducers';
import { cartLocalStorage } from './middlewares/cartLocalStorage';

export default () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware().concat([
      cartLocalStorage
    ]),
    devTools: true,
  })
};
