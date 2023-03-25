import { Product } from "../../types";

const attributes = ["name", "color", "type"];

function getProduct(product: Product, attribute: string, searchTerm: string) {
  const searchTermLowerCase = searchTerm.toLowerCase();
  const productAttributeLowerCase = product[attribute].toLowerCase();
  return productAttributeLowerCase.startsWith(searchTermLowerCase);
}

function getSearchedProducts(products: Product[], searchTerm: string) {
  if (searchTerm === "") {
    return products;
  } else {
    const result = products.filter((product) => {
      let abc;
      attributes.forEach((attribute) => {
        if (getProduct(product, attribute, searchTerm)) {
          abc = true;
        }
      });
      return abc;
    });
    return result;
  }
}

export default getSearchedProducts;
