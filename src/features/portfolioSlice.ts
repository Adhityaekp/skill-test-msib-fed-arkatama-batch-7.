import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface Portfolio {
  id: number;
  title: string;
  description: string;
}

interface PortfolioState {
  data: Portfolio[];
  status: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: PortfolioState = {
  data: [],
  status: "idle",
};

export const fetchPortfolios = createAsyncThunk("portfolio/fetchPortfolios", async () => {
  const response = await fetch("/api/portfolios"); // Adjust the API endpoint accordingly
  return (await response.json()) as Portfolio[];
});

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPortfolios.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPortfolios.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchPortfolios.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default portfolioSlice.reducer;
