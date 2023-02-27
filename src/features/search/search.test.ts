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
  test("Given Empty string; it should return all the products", () => {
    expect(getSearchedProducts(products, "")).toBe(products);
  });
});
