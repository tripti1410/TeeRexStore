import { isObjectEmpty } from "../../app/utility";
import { Product } from "../../types";

function filterProduct(
  product: Product,
  filterName: string,
  filterValue: string
): boolean {
  return product[filterName as keyof Product] === filterValue ? true : false;
}
function filterProductBasedOnPrice(
  product: Product,
  filterName: string,
  filterValue: string
): boolean {
  const filterValueArray = filterValue.split(" ");
  const lowerPrice = Number(filterValueArray[1]);
  const higherPrice = Number(filterValueArray[3]);
  return product[filterName as keyof Product] >= lowerPrice &&
    product[filterName as keyof Product] <= higherPrice
    ? true
    : false;
}

function filterProductOfAnAttriute(
  product: Product,
  filterName: string,
  filterValues: Array<string>
): boolean {
  const isProductHasFilterValue: boolean[] = [];
  if (filterName === "price") {
    filterValues.forEach((filterValue) => {
      isProductHasFilterValue.push(
        filterProductBasedOnPrice(product, filterName, filterValue)
      );
    });
  } else {
    filterValues.forEach((filterValue) => {
      isProductHasFilterValue.push(
        filterProduct(product, filterName, filterValue)
      );
    });
  }
  return isProductHasFilterValue.includes(true);
}

function getFilteredProducts(
  products: Array<Product>,
  filters: { [key: string]: Array<string> }
) {
  if (isObjectEmpty(filters)) {
    return products;
  } else {
    return products.filter((product) => {
      const filteredProduct: boolean[] = [];
      for (const [filterName, filterValues] of Object.entries(filters)) {
        filteredProduct.push(
          filterProductOfAnAttriute(product, filterName, filterValues)
        );
      }
      return filteredProduct.every((x) => x === true);
    });
  }
}

export default getFilteredProducts;
