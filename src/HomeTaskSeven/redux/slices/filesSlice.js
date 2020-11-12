import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const fetchFiles = createAsyncThunk('files/fetchFiles', async ({ files, gistId }) => {
  const requests = files.map(file => fetch(file.raw_url).then(res => res.text()));
  return await Promise.all(requests);
},
  {
    condition: ({ gistId }, api) => {
      const { files } = api.getState();
      return !files.data[gistId]
    }
});

const filesSlice = createSlice({
  name: 'files',
  initialState: {
    isFetching: false,
    data: {},
    error: null
  },
  reducers: {},
  extraReducers: {
    [fetchFiles.pending]: state => {
      state.isFetching = true;
    },
    [fetchFiles.fulfilled]: (state, action) => {
      state.isFetching = false;
      state.data[action.meta.arg.gistId] = action.meta.arg.files.map((file, index) => ({
        ...file,
        fileContent: action.payload[index]
      }));
    },
    [fetchFiles.rejected]: (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    }
  }
});

export default filesSlice.reducer;

export { fetchFiles }






