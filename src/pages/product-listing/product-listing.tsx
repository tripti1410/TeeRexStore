import ProductCard from "../../components/product-card/product-card";
import ProductFilters from "../../components/product-filters/product-filters";
import ProductsSearch from "../../components/products-search/products-search";
import { useGetProductsQuery } from "../../features/product-api/product-api-slice";
import "./product-listing.css";
import { Product } from "../../types";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import getSearchedProducts from "../../features/search/search";
import { setProducts } from "../../features/product-api/product-listing-slice";
import { useEffect } from "react";
import { setInitialFilters } from "../../features/filters/filters-slice";
import getFilteredProducts from "../../features/filters/filter-products";
import getDerivedProducts from "./get-derived-products";

const ProductListing = () => {
  let products: Product[] = [];
  const { data = [], isSuccess } = useGetProductsQuery();
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
      <ProductsSearch />
      <ProductFilters />
      <section className="product-listing">
        {updatedProducts.length <= 0 ? (
          <div className="not-found-msg">
            <h3>We couldn't find any matches!</h3>
            <p>Please check the spelling or try searching something else</p>
          </div>
        ) : (
          updatedProducts.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))
        )}
      </section>
    </div>
  );
};

export default ProductListing;

export { getDerivedProducts };
