import { createSlice } from "@reduxjs/toolkit";
import getFilters from "./get-filters";

const filtersSlice = createSlice({
  name: "filter",
  initialState: {
    initialFilters: {},
  },
  reducers: {
    setInitialFilters(state, { type, payload }) {
      state.initialFilters = getFilters(payload);
    },
  },
});

export const { setInitialFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
