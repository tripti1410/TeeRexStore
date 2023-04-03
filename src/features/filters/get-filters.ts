import { Product, ProductFilterableKeys } from "../../types";

function getFilterValuesFromAttribute(
  products: Array<Product>,
  attribute: ProductFilterableKeys
): Array<string> {
  const attributeValuesExceptPrice: Array<string> = [];
  const priceValues: Array<number> = [];
  products.forEach((product) => {
    if (attribute === "price") {
      priceValues.push(product[attribute]);
    } else {
      attributeValuesExceptPrice.push(product[attribute]);
    }
  });
  let attributeValues: Array<string> = [];
  if (priceValues.length > 0) {
    const priceValuesSorted = [...new Set(priceValues)].sort();
    const MaxPrice = Number(priceValuesSorted[priceValuesSorted.length - 1]);
    const MinPrice = Number(priceValuesSorted[0]);
    const margin = 50;
    attributeValues = [
      `Rs 0 - ${MinPrice}`,
      `Rs ${MinPrice + 1} - ${MaxPrice - margin}`,
      `Rs ${MaxPrice - (margin - 1)} & more `,
    ];
  } else {
    attributeValues = [...new Set(attributeValuesExceptPrice)];
  }
  return attributeValues;
}

export { getFilterValuesFromAttribute };
