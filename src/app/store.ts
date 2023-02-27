import { configureStore } from "@reduxjs/toolkit";
import { productsAPISlice } from "../features/product-api/product-api-slice";
import productListingSlice from "../features/product-api/product-listing-slice";
import searchSlice from "../features/search/search-slice";

export const store = configureStore({
  reducer: {
    [productsAPISlice.reducerPath]: productsAPISlice.reducer,
    products: productListingSlice,
    searchTerm: searchSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsAPISlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
