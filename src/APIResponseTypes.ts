export type Cuisine =
  | "polska"
  | "chińska"
  | "indyjska"
  | "turecka"
  | "włoska"
  | "";

export interface Restaurant {
  restaurant_id: number;
  restaurant_name: string;
  restaurant_address: string;
  restaurant_cuisine_type: Cuisine;
  delivery_fee: number;
  logo_url: string;
}

export interface Dish {
  dish_id: number;
  restaurant_id: number;
  dish_type: string;
  picture_url: string;
  cost: number,
}
