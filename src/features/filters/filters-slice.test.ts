import { describe, expect, test } from "vitest";
import reducer, {
  addSelectedFilter,
  removeSelectedFilter,
  initialState,
} from "./filters-slice";

const filter1 = { ...initialState, selectedFilters: { gender: ["Women"] } };

const filter2 = {
  ...initialState,
  selectedFilters: { gender: ["Women", "Men"] },
};
const filter3 = {
  ...initialState,
  selectedFilters: { gender: ["Women", "Men"], color: ["Black"] },
};
const filter4 = {
  ...initialState,
  selectedFilters: {
    gender: ["Women", "Men"],
    color: ["Black"],
    price: ["Rs 0 - 250"],
  },
};
describe("Suit for ADDING selected filter", () => {
  test("First filter", () => {
    expect(
      reducer(
        initialState,
        addSelectedFilter({ attributeName: "gender", filterName: "Women" })
      )
    ).toEqual(filter1);
  });
  test("Add existing attributes filter", () => {
    expect(
      reducer(
        filter1,
        addSelectedFilter({ attributeName: "gender", filterName: "Men" })
      )
    ).toEqual(filter2);
  });
  test("Add another attributes filter", () => {
    expect(
      reducer(
        filter2,
        addSelectedFilter({ attributeName: "color", filterName: "Black" })
      )
    ).toEqual(filter3);
  });
  test("Add another attributes filter", () => {
    expect(
      reducer(
        filter3,
        addSelectedFilter({ attributeName: "price", filterName: "Rs 0 - 250" })
      )
    ).toEqual(filter4);
  });
});

describe("Suit for REMOVING selected filter", () => {
  test("Remove one filter", () => {
    expect(
      reducer(
        filter2,
        removeSelectedFilter({ attributeName: "gender", filterName: "Men" })
      )
    ).toEqual(filter1);
  });
  test("Remove one filter, check if it is last filter then remove attribute as well", () => {
    expect(
      reducer(
        filter1,
        removeSelectedFilter({ attributeName: "gender", filterName: "Women" })
      )
    ).toEqual(initialState);
  });
});
