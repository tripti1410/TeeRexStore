import { createSlice } from "@reduxjs/toolkit";

const productListingSlice = createSlice({
  name: "productListing",
  initialState: [],
  reducers: {
    setProducts(state, payload) {
      console.log(payload);
    },
  },
});
export default productListingSlice.reducer;
export const { setProducts } = productListingSlice.actions;
