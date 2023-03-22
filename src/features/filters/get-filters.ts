import { Product } from "../../types";
const ATTRIBUTES: Array<string> = ["gender", "color", "type", "price"];

function getFilterVlaues(products: Array<Product>, attribute: string) {
  const attributeValues: Array<string> = [];
  products.forEach((product) => attributeValues.push(product[attribute]));

  if (attribute === "price") {
    const priceValues = [...new Set(attributeValues)].sort();
    const MaxPrice = Number(priceValues[priceValues.length - 1]);
    const MinPrice = Number(priceValues[0]);
    const margin = 50;
    return [
      `0 - Rs${MinPrice}`,
      `Rs${MinPrice + 1} - ${MaxPrice - margin}`,
      `Rs${MaxPrice - margin} < `,
    ];
  } else {
    return [...new Set(attributeValues)];
  }
}

function getFilters(products: Array<Product>) {
  const filters: object = ATTRIBUTES.reduce((accumulator, value) => {
    return { ...accumulator, [value]: getFilterVlaues(products, value) };
  }, {});
  return filters;
}

export default getFilters;
export { ATTRIBUTES };
