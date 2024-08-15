import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface NewsState {
  data: any[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: NewsState = {
  data: [],
  status: 'idle',
  error: null,
};

export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
  const response = await fetch('https://pmb.alkautsar.ponpes.id/api/cms/news');
  return response.json();
});

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default newsSlice.reducer;
