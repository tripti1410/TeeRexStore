import { createSlice } from "@reduxjs/toolkit";
import getFilters from "./get-filters";

const filtersSlice = createSlice({
  name: "filter",
  initialState: {
    initialFilters: {},
    selectedFilters: {},
  },
  reducers: {
    setInitialFilters(state, { type, payload }) {
      state.initialFilters = getFilters(payload);
    },
    addSelectedFilter(state, { type, payload }) {
      if (
        Object.prototype.hasOwnProperty.call(
          state.selectedFilters,
          payload.attributeName
        )
      ) {
        state.selectedFilters[payload.attributeName] = [
          ...state.selectedFilters[payload.attributeName],
          payload.filterName,
        ];
      } else {
        state.selectedFilters = {
          ...state.selectedFilters,
          [payload.attributeName]: [payload.filterName],
        };
      }
    },
    removeSelectedFilter(state, { type, payload }) {
      const remainingValuesOfAttribute = state.selectedFilters[
        payload.attributeName
      ].filter(
        (selectedFilterName: string) =>
          selectedFilterName !== payload.filterName
      );
      if (remainingValuesOfAttribute.length === 0) {
        delete state.selectedFilters[payload.attributeName];
      } else {
        state.selectedFilters = {
          ...state.selectedFilters,
          [payload.attributeName]: remainingValuesOfAttribute,
        };
      }
    },
  },
});

export const { setInitialFilters, addSelectedFilter, removeSelectedFilter } =
  filtersSlice.actions;
export default filtersSlice.reducer;
