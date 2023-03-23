import { isObjectEmpty } from "../../app/utility";

function filterProduct(product, filterName, filterValue) {
  return product[filterName] === filterValue ? true : false;
}

function getFilteredProducts(products, filters) {
  if (isObjectEmpty(filters)) {
    return products;
  } else {
    const filteredProducts = products.filter((product) =>
      filterProduct(product, "color", "Blue")
    );
    return filteredProducts;
  }
}

export default getFilteredProducts;
