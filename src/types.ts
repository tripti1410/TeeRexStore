export interface Product {
  id: number;
  imageURL: string;
  name: string;
  type: string;
  price: number;
  currency: string;
  color: string;
  gender: string;
  quantity: number;
}

export interface SelectedProduct {
  id: number;
  imageURL: string;
  name: string;
  type: string;
  price: number;
  currency: string;
  color: string;
  gender: string;
  quantity: number;
  selectedQuantity: number;
}

export type ProductFilterableKeys = "gender" | "color" | "type" | "price";
export type FiltersType = {
  gender: Array<string>;
  color: Array<string>;
  type: Array<string>;
  price: Array<string>;
};
