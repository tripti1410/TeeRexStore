import { useGetProductsQuery } from "../../features/product-api/product-api-slice";
import "./product-listing.css";

import Products from "./products";

const ProductsPage = () => {
  const {
    data = [],
    isSuccess,
    error,
    isError,
    isLoading,
  } = useGetProductsQuery();

  return (
    <div className="product-page">
      {isLoading && (
        <p className="loading flex-center flex-direction-column">
          Loading......
        </p>
      )}
      {isError && "status" in error && (
        <p className="error-msg flex-center flex-direction-column">
          {"error" in error ? error.error : JSON.stringify(error.data)}
        </p>
      )}
      {isSuccess && <Products products={data} />}
    </div>
  );
};

export default ProductsPage;
