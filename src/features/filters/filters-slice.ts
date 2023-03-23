import { createSlice } from "@reduxjs/toolkit";
import getFilters from "./get-filters";

const filtersSlice = createSlice({
  name: "filter",
  initialState: {
    initialFilters: {},
    selectedFilters: {
      color: ["Blue", "Grey"],
      gender: ["Women"],
    },
  },
  reducers: {
    setInitialFilters(state, { type, payload }) {
      state.initialFilters = getFilters(payload);
    },
    setSelectedFilters(state, payload) {
      console.log(payload, "payload");
    },
  },
});

export const { setInitialFilters, setSelectedFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
