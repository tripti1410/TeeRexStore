import ProductCard from "../../components/product-card/product-card";
import ProductFilters from "../../components/product-filters/product-filters";
import ProductsSearch from "../../components/products-search/products-search";
import { useGetProductsQuery } from "../../features/product-api/product-api-slice";
import "./product-listing.css";
import { Product } from "../../types";
import { useAppDispatch } from "../../app/hooks";

const ProductListing = () => {
  let products: Product[] = [];
  const { data = [], isSuccess } = useGetProductsQuery();

  if (isSuccess) {
    products = data;
  }

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
