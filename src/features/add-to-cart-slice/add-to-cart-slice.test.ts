import { describe, expect, test } from "vitest";
import reducer, {
  addProductToCart,
  subtractProductFromCart,
  changeSelectedQuantity,
  changeTotalAmount,
  removeSelectedProduct,
} from "./add-to-cart-slice";
import products from "../../app/test-dummy-data";

const initialState = { selectedProducts: [], totalAmount: 0 };
const state1 = {
  ...initialState,
  selectedProducts: [{ ...products[1], selectedQuantity: 2 }],
};
describe("Suit for what ADD to cart should do", () => {
  test("New product selected", () => {
    expect(reducer(initialState, addProductToCart(products[0]))).toEqual({
      ...initialState,
      selectedProducts: [{ ...products[0], selectedQuantity: 1 }],
    });
  });
  test("New product selected, check if product is in stock", () => {
    expect(reducer(initialState, addProductToCart(products[2]))).toEqual({
      ...initialState,
      selectedProducts: [{ ...products[2], selectedQuantity: 0 }],
    });
  });
  test("Existing product selected", () => {
    const state = {
      ...initialState,
      selectedProducts: [{ ...products[0], selectedQuantity: 1 }],
    };
    expect(reducer(state, addProductToCart(products[0]))).toEqual({
      ...initialState,
      selectedProducts: [{ ...products[0], selectedQuantity: 2 }],
    });
  });
  test("Existing product selected, check if product is in stock", () => {
    expect(reducer(state1, addProductToCart(products[1]))).toEqual(state1);
  });
});

describe("Suit for what SUBTRACTING from cart should do", () => {
  test("Remove one quantity from selected product", () => {
    expect(reducer(state1, subtractProductFromCart(products[1]))).toEqual({
      ...initialState,
      selectedProducts: [{ ...products[1], selectedQuantity: 1 }],
    });
  });
  test("Remove one quantity from selected product, check if selected quantity is already 0", () => {
    const state = {
      ...initialState,
      selectedProducts: [{ ...products[1], selectedQuantity: 0 }],
    };
    expect(reducer(state, subtractProductFromCart(products[1]))).toEqual(state);
  });
});

describe("Suit for what CHANGING quantity from shopping cart should do", () => {
  test("Remove selected quantity from selected product", () => {
    expect(
      reducer(state1, changeSelectedQuantity({ productId: 7, quantity: 1 }))
    ).toEqual({
      ...initialState,
      selectedProducts: [{ ...products[1], selectedQuantity: 1 }],
    });
  });
});

describe("Suit for what CHANGING total amount of selected products from shopping cart should do", () => {
  test("Add or subtract total amount based on changing quantity of selected products", () => {
    expect(reducer(state1, changeTotalAmount())).toEqual({
      ...state1,
      totalAmount: 1000,
    });
  });
});

describe("Suit for DELETING selected products from shopping cart should do", () => {
  test("Add or subtract total amount based on changing quantity of selected products", () => {
    expect(reducer(state1, removeSelectedProduct({ productId: 7 }))).toEqual({
      ...state1,
      selectedProducts: [],
    });
  });
});
