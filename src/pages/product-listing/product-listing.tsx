import ProductCard from "../../components/product-card/product-card";
import ProductFilters from "../../components/product-filters/product-filters";
import ProductsSearch from "../../components/products-search/products-search";
import { useGetProductsQuery } from "../../feautes/product-api/product-api-slice";
import "./product-listing.css";
import { Product } from "../../types";

const ProductListing = () => {
  const products: Product[] = [];
  const { data = [], isSuccess } = useGetProductsQuery();

  if (isSuccess) {
    // products = data;
  }

  return (
    <div className="product-page">
      <ProductsSearch />
      <ProductFilters />
      <section className="product-listing">
        {[1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(() => (
          <ProductCard />
        ))}
      </section>
    </div>
  );
};

export default ProductListing;
