import { createSlice } from "@reduxjs/toolkit";
import { SelectedProduct } from "../../types";

interface InitialState {
  selectedProducts: Array<SelectedProduct>;
}

const initialState: InitialState = { selectedProducts: [] };

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
    removeProductFromCart(state, { type, payload }) {
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
  },
});
export default addToCartSlice.reducer;
export const { addProductToCart, removeProductFromCart } =
  addToCartSlice.actions;
