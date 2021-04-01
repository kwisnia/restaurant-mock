import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

export type RootStackParamList = {
  RestaurantList: undefined;
  RestaurantMenu: { restaurant_id: number };
};

export type RestaurantListNavigationProp = StackNavigationProp<
  RootStackParamList,
  "RestaurantList"
>;

export type RestaurantMenuNavigationProp = StackNavigationProp<
  RootStackParamList,
  "RestaurantMenu"
>;

export type RestaurantMenuScreenRouteProp = RouteProp<
  RootStackParamList,
  "RestaurantMenu"
>;
