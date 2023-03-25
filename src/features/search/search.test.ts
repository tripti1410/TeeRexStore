import { describe, expect, test } from "vitest";
import getSearchedProducts from "./search";
import products from "../../app/test-dummy-data";

describe("Search products", () => {
  test("Given Empty string; it should return all the products", () => {
    expect(getSearchedProducts(products, "")).toBe(products);
  });
  test("Given 'dddddd'; it should return empty array", () => {
    expect(getSearchedProducts(products, "dddddd")).toStrictEqual([]);
  });
  test("Given 'green'; it should return all the products which has green in the name or type or color attribute", () => {
    expect(getSearchedProducts(products, "green")).toStrictEqual([products[2]]);
  });
  test("Given 'Green'; it should return all the products which has green in the name or type or color  attribute", () => {
    expect(getSearchedProducts(products, "Green")).toStrictEqual([products[2]]);
  });
  test("Given 'GREEN'; it should return all the products which has green in the name or type or color  attribute", () => {
    expect(getSearchedProducts(products, "GREEN")).toStrictEqual([products[2]]);
  });
});
