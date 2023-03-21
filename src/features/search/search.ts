import { Product } from "../../types";

const attributes = ["name"];

function getProduct(product, searchTerm) {
  const searchTermLowerCase = searchTerm.toLowerCase();
  const productAttributeLowerCase = product["name"].toLowerCase();
  return productAttributeLowerCase.startsWith(searchTermLowerCase);
}

function getSearchedProducts(products: Product[], searchTerm: string) {
  const result = products.filter((product) => getProduct(product, searchTerm));
  console.log(result, "++++++++");
  return result;
}

export default getSearchedProducts;
