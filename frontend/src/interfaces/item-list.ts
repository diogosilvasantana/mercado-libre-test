import { Author } from "./author";

export interface ItemsList {
  author: Author;
  categories: string[];
  items: ItemList;
}

export interface ItemList {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
  location?: string;
}

interface Price {
  currency: string;
  amount: number;
  decimals: number;
}
