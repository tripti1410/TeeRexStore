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
  products = getSearchedProducts(products, searchTerm);
  products = getFilteredProducts(products, selectedfilters);

  return (
    <div className="product-page">
      <ProductsSearch />
      <ProductFilters />
      <section className="product-listing">
        {products.length <= 0 ? (
          <p>No products found</p>
        ) : (
          products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))
        )}
      </section>
    </div>
  );
};

export default ProductListing;
