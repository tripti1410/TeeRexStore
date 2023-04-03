import { useAppDispatch, useAppSelector } from "../../app/hooks";
import ProductFilters from "../../components/product-filters/product-filters";
import ProductsSearch from "../../components/products-search/products-search";
import getFilteredProducts from "../../features/filters/filter-products";
import { setInitialFilters } from "../../features/filters/filters-slice";
import { setProducts } from "../../features/product-api/product-listing-slice";
import getSearchedProducts from "../../features/search/search";
import { Product } from "../../types";
import getDerivedProducts from "./get-derived-products";
import ProductListing from "./product-listing";
import React from "react";
interface Props {
  products: Array<Product>;
}
const Products = ({ products }: Props) => {
  const searchTerm = useAppSelector((state) => state.searchTerm.value);
  const selectedfilters = useAppSelector(
    (state) => state.filters.selectedFilters
  );

  const dispatch = useAppDispatch();
  dispatch(setProducts(products));
  dispatch(setInitialFilters(products));

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
    <React.Fragment>
      <ProductsSearch />
      <ProductFilters />
      <ProductListing updatedProducts={updatedProducts} />
    </React.Fragment>
  );
};

export default Products;
