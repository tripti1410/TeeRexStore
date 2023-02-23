import { configureStore } from "@reduxjs/toolkit";
import { productsAPISlice } from "./src/feautes/product-api/product-api-slice";
import productListingSlice from "./src/feautes/product-api/product-listing-slice";

export const store = configureStore({
  reducer: {
    [productsAPISlice.reducerPath]: productsAPISlice.reducer,
    products: productListingSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsAPISlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
