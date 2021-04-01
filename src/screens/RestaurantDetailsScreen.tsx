import { View, Text } from "react-native";
import React from "react";
import DishList from "../components/DishList";
import {
  RestaurantDetailsNavigationProp,
  RestaurantDetailsScreenRouteProp,
} from "../types/NavigationTypes";
interface IProps {
  route: RestaurantDetailsScreenRouteProp;
  navigation: RestaurantDetailsNavigationProp;
}

const RestaurantDetailsScreen = ({ route, navigation }: IProps) => {
  return (
    <View>
      <DishList restaurant_id={route.params.restaurant_id} />
    </View>
  );
};

export default RestaurantDetailsScreen;
