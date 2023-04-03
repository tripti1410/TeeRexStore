import { ChangeEvent } from "react";
import { useAppDispatch } from "../../app/hooks";
import { setSearchTerm } from "../../features/search/search-slice";
import "./products-search.css";

const ProductsSearch = () => {
  const dispatch = useAppDispatch();
  const searchProducts = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    dispatch(setSearchTerm(value));
  };

  return (
    <div className="products-search" role="search">
      <input
        type="search"
        name="product-search"
        id="product-search"
        placeholder="Search for products"
        onChange={(e) => searchProducts(e)}
      />
    </div>
  );
};

export default ProductsSearch;
