import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  RestaurantList: undefined;
  RestaurantDetails: { restaurant_id: number };
};

export type RestaurantListNavigationProp = StackNavigationProp<
  RootStackParamList,
  "RestaurantList"
>;

export type RestaurantDetailsNavigationProp = StackNavigationProp<
  RootStackParamList,
  "RestaurantList"
>;
