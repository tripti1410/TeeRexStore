import { createSlice } from "@reduxjs/toolkit";

const addToCartSlice = createSlice({
  name: "addToCart",
  initialState: { value: [] },
  reducers: {
    addProductToCart(state, { type, payload }) {
      const isExistingProduct = state.value.some(
        (product) => product.id === payload.id
      );

      if (isExistingProduct) {
        state.value.map((product) =>
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
        state.value.push({
          ...payload,
          selectedQuantity: payload.quantity > 0 ? 1 : 0,
        });
      }
    },
    removeProductFromCart(state, { type, payload }) {
      state.value.map((product) =>
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
