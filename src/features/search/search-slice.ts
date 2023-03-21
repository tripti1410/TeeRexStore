import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    value: "",
  },
  reducers: {
    setSearchTerm(state, { type, payload }) {
      state.value = payload;
    },
  },
});

export const { setSearchTerm } = searchSlice.actions;
export default searchSlice.reducer;
