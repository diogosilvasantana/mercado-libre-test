interface Price {
  currency: string;
  amount: number;
  decimals: number;
}

export interface ProductItem {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
  location?: string;
}
