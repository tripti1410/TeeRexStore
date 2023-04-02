import { configureStore } from "@reduxjs/toolkit";
import addToCartSlice from "../features/add-to-cart-slice/add-to-cart-slice";
import filtersSlice from "../features/filters/filters-slice";
import { productsAPISlice } from "../features/product-api/product-api-slice";
import productListingSlice from "../features/product-api/product-listing-slice";
import searchSlice from "../features/search/search-slice";

export const store = configureStore({
  reducer: {
    [productsAPISlice.reducerPath]: productsAPISlice.reducer,
    products: productListingSlice,
    searchTerm: searchSlice,
    filters: filtersSlice,
    cart: addToCartSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsAPISlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
