import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

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
  "RestaurantDetails"
>;

export type RestaurantDetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  "RestaurantDetails"
>;
