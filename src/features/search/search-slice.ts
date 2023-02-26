import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchInput: "",
  },
  reducers: {
    setSearchInput(state, { type, payload }) {
      state.searchInput = payload;
    },
  },
});

export const { setSearchInput } = searchSlice.actions;
export default searchSlice.reducer;
