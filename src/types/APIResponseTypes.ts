export type Cuisine =
  | "polska"
  | "chińska"
  | "indyjska"
  | "turecka"
  | "włoska"
  | "";

export interface Restaurant {
  id: number;
  name: string;
  address: string;
  cuisine_type: Cuisine;
  delivery_fee: number;
  logo: string;
}

export interface Dish {
  id: number;
  restaurant_id: number;
  dish_type: string;
  picture: string;
  cost: number;
  name: string;
}
