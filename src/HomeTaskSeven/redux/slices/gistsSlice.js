import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const fetchGists = createAsyncThunk('files/fetchGists', async () => {
  const data = await fetch('https://api.github.com/gists/public').then(res => res.json());
  return data;
});

const gistsSlice = createSlice({
  name: 'gists',
  initialState: {
    isFetching: false,
    data: [],
    error: null
  },
  reducers: {},
  extraReducers: {
    [fetchGists.pending]: state => {
      state.isFetching = true;
    },
    [fetchGists.fulfilled]: (state, action) => {
      state.isFetching = false;
      state.data = action.payload.map(gist => ({
        ...gist,
        files: Object.values(gist.files)
      }));

    },
    [fetchGists.rejected]: (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    }
  }
});

export default gistsSlice.reducer;

export { fetchGists }
