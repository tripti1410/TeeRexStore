import { Product } from "../../types";

function getDerivedProducts(
  products: Array<Product>,
  isSearch: boolean,
  isFilter: boolean,
  searchedProducts: Array<Product>,
  filteredProducts: Array<Product>,
  searchedFilteredProducts: Array<Product>
) {
  let updatedProducts: Array<Product> = [];

  if (isSearch && isFilter) {
    updatedProducts = searchedFilteredProducts;
  } else if (isSearch && !isFilter) {
    updatedProducts = searchedProducts;
  } else if (!isSearch && isFilter) {
    updatedProducts = filteredProducts;
  } else if (isSearch) {
    updatedProducts = searchedProducts;
  } else if (isFilter) {
    updatedProducts = filteredProducts;
  } else {
    updatedProducts = updatedProducts.length === 0 ? products : updatedProducts;
  }

  return updatedProducts;
}

export default getDerivedProducts;
