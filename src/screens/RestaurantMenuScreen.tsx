import { View, Text } from "react-native";
import React from "react";
import DishList from "../components/DishList";
import {
  RestaurantMenuNavigationProp,
  RestaurantMenuScreenRouteProp,
} from "../types/NavigationTypes";
interface IProps {
  route: RestaurantMenuScreenRouteProp;
  navigation: RestaurantMenuNavigationProp;
}

const RestaurantMenuScreen = ({ route, navigation }: IProps) => {
  return (
    <View>
      <DishList restaurant_id={route.params.restaurant_id} />
    </View>
  );
};

export default RestaurantMenuScreen;
