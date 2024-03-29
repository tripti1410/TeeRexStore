import { describe, expect, test } from "vitest";
import getFilteredProducts from "./filter-products";
import products from "../../app/test-dummy-data";

const filter1 = { color: ["Blue", "Grey"] };
const filter2 = { gender: ["Men"] };
const filter3 = { color: ["Blue", "Black"], gender: ["Men"] };
const filter4 = {
  color: ["Blue", "Grey", "Black"],
  gender: ["Men", "Women"],
  type: ["Polo", "Hoodie"],
};
const filter5 = {
  price: ["Rs 0 - 250"],
  gender: ["Men", "Women"],
  type: ["Polo", "Hoodie"],
};
const filter6 = {
  price: ["Rs 451 & more"],
  gender: ["Men", "Women"],
  type: ["Polo", "Hoodie"],
};

describe("Filter products", () => {
  test("Given Empty object; it should return all the products", () => {
    expect(getFilteredProducts(products, {})).toStrictEqual(products);
  });
  test("Given filter1; it should return all the products which has blue and grey color", () => {
    expect(getFilteredProducts(products, filter1)).toStrictEqual([products[1]]);
  });
  test("Given filter2; it should return all the products which has Men as gender", () => {
    expect(getFilteredProducts(products, filter2)).toStrictEqual([
      products[0],
      products[2],
    ]);
  });
  test("Given filter3; it should return all the products which has Men as gender and color blue and black", () => {
    expect(getFilteredProducts(products, filter3)).toStrictEqual([products[0]]);
  });
  test("Given filter4; it should return all the products which has Men and Women as gender, color blue, black, Grey and type polo and hoodie", () => {
    expect(getFilteredProducts(products, filter4)).toStrictEqual([
      products[0],
      products[1],
    ]);
  });
  test("Given filter5; it should return all the products which has Men and Women as gender, price Rs 0 -250 and type polo and hoodie", () => {
    expect(getFilteredProducts(products, filter5)).toStrictEqual([products[0]]);
  });
  test("Given filter6; it should return all the products which has Men and Women as gender, price Rs 451 and more and type polo and hoodie", () => {
    expect(getFilteredProducts(products, filter6)).toStrictEqual([products[1]]);
  });
});
