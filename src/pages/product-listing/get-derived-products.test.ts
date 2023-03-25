import { describe, expect, test } from "vitest";
import getDerivedProducts from "./get-derived-products";
import products from "../../app/test-dummy-data";

const searchedProducts = [
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
];
const filteredProducts = [
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
];
describe("Get derived products from the combination of search and filter applied", () => {
  test("Given only searchTerm should return searched Products", () => {
    expect(
      getDerivedProducts(products, true, false, searchedProducts, [], [])
    ).toStrictEqual([products[0]]);
  });
  test("Given only filters should return filtered Products", () => {
    expect(
      getDerivedProducts(products, false, true, [], filteredProducts, [])
    ).toStrictEqual([products[1]]);
  });
  test("Given search first and then filters should return filtered Products", () => {
    //  Assuming search term is polo and filter is Men
    expect(
      getDerivedProducts(
        products,
        true,
        true,
        searchedProducts,
        filteredProducts,
        searchedProducts
      )
    ).toStrictEqual(searchedProducts);
  });
  test("Given search first and then filters should return filtered Products", () => {
    //  Assuming search term is hoodie and filter is Women
    expect(
      getDerivedProducts(
        products,
        true,
        true,
        searchedProducts,
        filteredProducts,
        filteredProducts
      )
    ).toStrictEqual(filteredProducts);
  });
  test("Given search first and then filters should return filtered Products", () => {
    //  Assuming search term is green and filter is Men
    expect(
      getDerivedProducts(
        products,
        true,
        true,
        searchedProducts,
        filteredProducts,
        []
      )
    ).toStrictEqual([]);
  });
});
