import ProductCard from "../../components/product-card/product-card";
import ProductFilters from "../../components/product-filters/product-filters";
import ProductsSearch from "../../components/products-search/products-search";
import { useGetProductsQuery } from "../../features/product-api/product-api-slice";
import "./product-listing.css";
import { Product } from "../../types";
import { useAppSelector } from "../../app/hooks";
import getSearchedProducts from "../../features/search/search";

const ProductListing = () => {
  let products: Product[] = [];
  const { data = [], isSuccess } = useGetProductsQuery();
  const searchTerm = useAppSelector((state) => state.searchTerm);
  if (isSuccess) {
    products = data;
  }

  products = getSearchedProducts(products, searchTerm);

  return (
    <div className="product-page">
      <ProductsSearch />
      <ProductFilters />
      <section className="product-listing">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </section>
    </div>
  );
};

export default ProductListing;
