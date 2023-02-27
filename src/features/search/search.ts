import { Product } from "../../types";

function getSearchedProducts(products: Product[], searchTerm: string) {
  if (searchTerm === " ") {
    return products;
  }
  return products;
}

export default getSearchedProducts;
