import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Product } from "../../types";

interface Error {
  statusText: string;
  message: string;
}
export const productsAPISlice = createApi({
  reducerPath: "productsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://geektrust.s3.ap-southeast-1.amazonaws.com/",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], Error>({
      query: () => `coding-problems/shopping-cart/catalogue.json`,
    }),
  }),
});

export const { useGetProductsQuery } = productsAPISlice;
