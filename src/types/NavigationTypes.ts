import { StackNavigationProp } from "@react-navigation/stack";
import {
  NavigatorScreenParams,
  RouteProp,
  CompositeNavigationProp,
} from "@react-navigation/native";
import { Dish } from "./APIResponseTypes";

export type RootStackParamList = {
  MainStackScreen: NavigatorScreenParams<MainStackParamList>;
  OrderSummary: { restaurant_id: number; ordered_dishes: Dish[] };
};

export type MainStackParamList = {
  RestaurantList: undefined;
  RestaurantMenu: { restaurant_id: number };
};

export type RestaurantListNavigationProp = StackNavigationProp<
  MainStackParamList,
  "RestaurantList"
>;

export type OrderModalNavigationProp = StackNavigationProp<
  RootStackParamList,
  "OrderSummary"
>;

export type RestaurantMenuNavigationProp = CompositeNavigationProp<
  StackNavigationProp<MainStackParamList, "RestaurantMenu">,
  StackNavigationProp<RootStackParamList>
>;

export type RestaurantMenuScreenRouteProp = RouteProp<
  MainStackParamList,
  "RestaurantMenu"
>;

export type OrderModalRouteProp = RouteProp<RootStackParamList, "OrderSummary">;
