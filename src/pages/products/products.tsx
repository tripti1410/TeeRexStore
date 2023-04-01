import ProductFilters from "../../components/product-filters/product-filters";
import ProductsSearch from "../../components/products-search/products-search";
import { useGetProductsQuery } from "../../features/product-api/product-api-slice";
import "./product-listing.css";
import { Product } from "../../types";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import getSearchedProducts from "../../features/search/search";
import { setProducts } from "../../features/product-api/product-listing-slice";
import React, { useEffect } from "react";
import { setInitialFilters } from "../../features/filters/filters-slice";
import getFilteredProducts from "../../features/filters/filter-products";
import getDerivedProducts from "./get-derived-products";
import ProductListing from "./product-listing";

const Products = () => {
  let products: Product[] = [];
  const {
    data = [],
    isSuccess,
    error,
    isError,
    isLoading,
  } = useGetProductsQuery();
  const searchTerm = useAppSelector((state) => state.searchTerm.value);
  const selectedfilters = useAppSelector(
    (state) => state.filters.selectedFilters
  );
  if (isSuccess) {
    products = data;
  }
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isSuccess) return;
    dispatch(setProducts(products));
    dispatch(setInitialFilters(products));
  }, [dispatch, isSuccess]);

  const isSearch = searchTerm === "" ? false : true;
  const isFilters = Object.keys(selectedfilters).length <= 0 ? false : true;

  const searchedProducts = getSearchedProducts(products, searchTerm);
  const filteredProducts = getFilteredProducts(products, selectedfilters);
  const searchedFilteredProducts = getFilteredProducts(
    searchedProducts,
    selectedfilters
  );

  const updatedProducts = getDerivedProducts(
    products,
    isSearch,
    isFilters,
    searchedProducts,
    filteredProducts,
    searchedFilteredProducts
  ).map((product) => ({ ...product, selectedQuantity: 0 }));

  return (
    <div className="product-page">
      {isLoading && (
        <p className="loading flex-center flex-direction-column">
          Loading......
        </p>
      )}
      {isError && (
        <p className="error-msg flex-center flex-direction-column">
          {error.error}
        </p>
      )}
      {isSuccess && (
        <React.Fragment>
          <ProductsSearch />
          <ProductFilters />
          <ProductListing updatedProducts={updatedProducts} />
        </React.Fragment>
      )}
    </div>
  );
};

export default Products;

export { getDerivedProducts };
