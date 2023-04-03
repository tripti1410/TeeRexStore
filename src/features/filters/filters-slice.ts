import { createSlice } from "@reduxjs/toolkit";
import { getFilterValuesFromAttribute } from "./get-filters";
import { FiltersType, ProductFilterableKeys } from "../../types";

const initialFilters: FiltersType | Record<string, Array<string>> = {};
const selectedFilters: FiltersType | Record<string, Array<string>> = {};
const attributes: Array<ProductFilterableKeys> = [
  "gender",
  "color",
  "type",
  "price",
];
export const initialState = {
  initialFilters: initialFilters,
  selectedFilters: selectedFilters,
  attributes: attributes,
};

const filtersSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setInitialFilters(state, { type, payload }) {
      state.initialFilters = state.attributes.reduce(
        (accumulator, attribute) => ({
          ...accumulator,
          [attribute]: getFilterValuesFromAttribute(payload, attribute),
        }),
        {}
      );
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
