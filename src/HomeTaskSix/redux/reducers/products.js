import { createReducer } from "@reduxjs/toolkit";
import { FETCH_PRODUCT_ERROR, FETCH_PRODUCT_PENDING, FETCH_PRODUCT_SUCCESS, fetchProducts } from '../actions/products';

const initialState = {
  loading: false,
  data: [],
  error: null
};

const productsReducer = createReducer(initialState, {
  [fetchProducts.pending]: (state) => {
    state.loading = true;
    state.error = null
  },
  [fetchProducts.fulfilled]: (state, action) => {
    state.data = action.payload;
    state.loading = false;
  },
  [fetchProducts.rejected]: (state, action) => {
    state.error = action.payload;
    state.loading = false;
  }
});

export default productsReducer;



export function productsReducerLegacy(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCT_PENDING:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case FETCH_PRODUCT_ERROR:
      return {
        ...state,
        data: [],
        loading: false,
        error: action.payload
      };
    default: return state;
  }
}
