import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsAPISlice = createApi({
  reducerPath: "productsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://geektrust.s3.ap-southeast-1.amazonaws.com/",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<void, void>({
      query: () => `coding-problems/shopping-cart/catalogue.json`,
    }),
  }),
});

export const { useGetProductsQuery } = productsAPISlice;
