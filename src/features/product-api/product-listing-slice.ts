import { createSlice } from "@reduxjs/toolkit";

const productListingSlice = createSlice({
  name: "productListing",
  initialState: { value: [] },
  reducers: {
    setProducts(state, { type, payload }) {
      state.value = payload;
    },
  },
});
export default productListingSlice.reducer;
export const { setProducts } = productListingSlice.actions;
