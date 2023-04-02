import { describe, expect, test } from "vitest";
import reducer, { setSearchTerm } from "./search-slice";
const initialState = {
  value: "",
};
describe("Suit for search products", () => {
  test("Set the search term", () => {
    expect(reducer(initialState, setSearchTerm("green"))).toBe({
      value: "green",
    });
  });
});
