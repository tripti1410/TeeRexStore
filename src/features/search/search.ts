import { Product } from "../../types";

type ProductSearchableKeys = "name" | "color" | "type";
const attributes: Array<ProductSearchableKeys> = ["name", "color", "type"];

function getProduct(
  product: Product,
  attribute: ProductSearchableKeys,
  searchTerm: string
) {
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
