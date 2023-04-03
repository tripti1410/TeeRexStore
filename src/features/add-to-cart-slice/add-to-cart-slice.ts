import { createSlice } from "@reduxjs/toolkit";
import { SelectedProduct } from "../../types";

interface InitialState {
  selectedProducts: Array<SelectedProduct>;
  totalAmount: number;
}

export const initialState: InitialState = {
  selectedProducts: [],
  totalAmount: 0,
};

const addToCartSlice = createSlice({
  name: "addToCart",
  initialState,
  reducers: {
    addProductToCart(state, { type, payload }) {
      const isExistingProduct = state.selectedProducts.some(
        (product) => product.id === payload.id
      );

      if (isExistingProduct) {
        state.selectedProducts.map((product) =>
          product.id === payload.id
            ? {
                ...product,
                selectedQuantity:
                  product.selectedQuantity === product.quantity
                    ? product.selectedQuantity
                    : (product.selectedQuantity += 1),
              }
            : product
        );
      } else {
        state.selectedProducts.push({
          ...payload,
          selectedQuantity: payload.quantity > 0 ? 1 : 0,
        });
      }
    },
    subtractProductFromCart(state, { type, payload }) {
      state.selectedProducts.map((product) =>
        product.id === payload.id
          ? {
              ...product,
              selectedQuantity:
                product.selectedQuantity === 0
                  ? 0
                  : (product.selectedQuantity -= 1),
            }
          : product
      );
    },
    changeSelectedQuantity(state, { type, payload }) {
      const modifiedProducts = state.selectedProducts.map((product) => {
        if (product.id === payload.productId) {
          return {
            ...product,
            selectedQuantity: Number(payload.quantity),
          };
        } else {
          return product;
        }
      });
      state.selectedProducts = modifiedProducts;
    },
    changeTotalAmount(state) {
      state.totalAmount = state.selectedProducts.reduce(
        (amount, product) => amount + product.selectedQuantity * product.price,
        0
      );
    },
    removeSelectedProduct(state, { type, payload }) {
      state.selectedProducts = state.selectedProducts.filter(
        (product) => product.id !== payload.productId
      );
    },
  },
});
export default addToCartSlice.reducer;
export const {
  addProductToCart,
  subtractProductFromCart,
  changeSelectedQuantity,
  changeTotalAmount,
  removeSelectedProduct,
} = addToCartSlice.actions;
