import { describe, expect, test } from "vitest";
import getSearchedProducts from "./search";

const products = [
  {
    id: 1,
    imageURL:
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/black-polo-men.png",
    name: "Black Polo",
    type: "Polo",
    price: 250,
    currency: "INR",
    color: "Black",
    gender: "Men",
    quantity: 3,
  },
  {
    id: 7,
    imageURL:
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/blue-hoodie-women.png",
    name: "Blue Hoodie",
    type: "Hoodie",
    price: 500,
    currency: "INR",
    color: "Blue",
    gender: "Women",
    quantity: 2,
  },
  {
    id: 9,
    imageURL:
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/blue-round-men.png",
    name: "Green Round",
    type: "Basic",
    price: 300,
    currency: "INR",
    color: "Green",
    gender: "Men",
    quantity: 0,
  },
];
describe("Search products", () => {
  //  test("Given Empty string; it should return all the products", () => {
  //   expect(getSearchedProducts(products, "")).toBe(products);
  //  });
  //  test("Given 'dddddd'; it should return empty array", () => {
  //   expect(getSearchedProducts(products, "dddddd")).toBe([]);
  //  });
  test("Given 'green'; it should return all the products which has green in the name attribute", () => {
    expect(getSearchedProducts(products, "green")).toStrictEqual([products[2]]);
  });
  test("Given 'Green'; it should return all the products which has green in the name attribute", () => {
    expect(getSearchedProducts(products, "Green")).toStrictEqual([products[2]]);
  });
  test("Given 'GREEN'; it should return all the products which has green in the name attribute", () => {
    expect(getSearchedProducts(products, "GREEN")).toStrictEqual([products[2]]);
  });
});
