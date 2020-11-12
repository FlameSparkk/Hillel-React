import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const data = await fetch('https://fakestoreapi.com/products').then(res => res.json());
  return data;
});

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    data: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: {
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
  },
});

export default productsSlice.reducer;

export { fetchProducts };
