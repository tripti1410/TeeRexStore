import { SyntheticEvent } from "react";
import { useAppDispatch } from "../../app/hooks";
import { setSearchInput } from "../../features/search/search-slice";
import "./products-search.css";

const ProductsSearch = () => {
  const dispatch = useAppDispatch();
  const searchProducts = (e: SyntheticEvent) => {
    dispatch(setSearchInput(e.target.value));
  };

  return (
    <div className="products-search">
      <input
        type="search"
        placeholder="Search for products"
        onChange={(e) => searchProducts(e)}
      />
    </div>
  );
};

export default ProductsSearch;
