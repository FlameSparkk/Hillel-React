import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const data = await fetch('https://fakestoreapi.com/products').then(res => res.json());
  return data;
});

export const FETCH_PRODUCT_PENDING = 'FETCH_PRODUCT_PENDING';
export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS';
export const FETCH_PRODUCT_ERROR = 'FETCH_PRODUCT_ERROR';

const createAsyncThunkExample = (typePrefix, payloadCreator) => {
  return (...args) => dispatch => {
    dispatch({
      type: `${typePrefix}/pending`
    });
    payloadCreator(...args)
      .then(data => {
      dispatch({
        type: `${typePrefix}/fulfilled`,
        payload: data
      })
    })
      .catch(err => {
      dispatch({
        type: `${typePrefix}/rejected`,
        payload: err
      })
    })
  }
}

export const fetchProductsLegacy = () => async dispatch => {
  dispatch({ type: FETCH_PRODUCT_PENDING });
  try {
    const data = await fetch('https://fakestoreapi.com/products').then(res => res.json());
    dispatch({
      type: FETCH_PRODUCT_SUCCESS,
      payload: data
    })
  } catch (e) {
    dispatch({
      type: FETCH_PRODUCT_ERROR,
      payload: e.message
    });
    throw e;
  }
};
