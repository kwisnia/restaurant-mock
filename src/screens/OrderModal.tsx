import React from "react";
import { View, Text, Button } from "react-native";
import DishInfo from "../components/DishInfo";
import {
  OrderModalNavigationProp,
  OrderModalRouteProp,
} from "../types/NavigationTypes";

interface IProps {
  navigation: OrderModalNavigationProp;
  route: OrderModalRouteProp;
}

const OrderModal = ({ navigation, route }: IProps) => {
  const { restaurant_id, ordered_dishes } = route.params;
  return (
    <View>
      <Text>{restaurant_id}</Text>
      {ordered_dishes.map((dish) => (
        <DishInfo
          key={dish.id}
          name={dish.name}
          type={dish.dish_type}
          cost={dish.cost}
        />
      ))}
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
};

export default OrderModal;
